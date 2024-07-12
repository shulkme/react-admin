import Icon from '@/components/icon';
import {
  closestCenter,
  DndContext,
  DndContextProps,
  DraggableAttributes,
  DraggableSyntheticListeners,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  UniqueIdentifier,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  restrictToFirstScrollableAncestor,
  restrictToVerticalAxis,
  restrictToWindowEdges,
} from '@dnd-kit/modifiers';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS, Transform } from '@dnd-kit/utilities';
import { Button, Checkbox, Col, Popover, Row } from 'antd';
import { ThemeProvider, useTheme } from 'antd-style';
import React, { forwardRef, HTMLAttributes, useState } from 'react';
export interface CheckItemProps extends HTMLAttributes<HTMLDivElement> {
  attributes?: DraggableAttributes;
  listeners?: DraggableSyntheticListeners;
  isDragging?: boolean;
  isDragOverlay?: boolean;
  transform?: Transform | null;
  transition?: string;
}

const CheckItem = React.memo(
  forwardRef<HTMLDivElement, CheckItemProps>(
    (
      {
        isDragOverlay,
        transform,
        transition,
        attributes,
        listeners,
        isDragging,
        ...props
      },
      ref,
    ) => {
      const theme = useTheme();
      const style = {
        transform: CSS.Transform.toString(transform || null),
        transition,
        padding: 2,
        cursor: 'grabbing',
        background: isDragging ? theme.colorPrimaryBg : theme.colorBgContainer,
        opacity: !isDragging || isDragOverlay ? 1 : 0.5,
      };
      return (
        <div ref={ref} {...props} style={style}>
          <Row align="middle" gutter={4}>
            <Col flex="none">
              <Button
                size="small"
                icon={<Icon name="grip-vertical" />}
                type="text"
                disabled={isDragging}
                {...attributes}
                {...listeners}
                style={{
                  cursor: isDragging ? 'grabbing' : 'grab',
                }}
              />
            </Col>
            <Col flex="auto">
              <Checkbox>Name</Checkbox>
            </Col>
          </Row>
        </div>
      );
    },
  ),
);

const SortableItem: React.FC<{ id: UniqueIdentifier }> = (props) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: props.id });

  return (
    <CheckItem
      ref={setNodeRef}
      attributes={attributes}
      listeners={listeners}
      transform={transform}
      transition={transition}
      isDragging={isDragging}
    />
  );
};

const CheckList: React.FC = () => {
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const [items, setItems] = useState(['1', '2', '3']);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );
  const getIndex = (id: UniqueIdentifier) => {
    return items.findIndex((item) => item === id);
  };

  const handleDragStart: DndContextProps['onDragStart'] = (event) => {
    const { active } = event;
    setActiveId(active.id);
  };
  const handleDragEnd: DndContextProps['onDragEnd'] = (event) => {
    setActiveId(null);
    const { active, over } = event;

    if (over) {
      if (active.id !== over.id) {
        setItems((items) => {
          const oldIndex = getIndex(active.id);
          const newIndex = getIndex(over.id);

          return arrayMove(items, oldIndex, newIndex);
        });
      }
    }
  };
  return (
    <ThemeProvider
      theme={{
        components: {
          Button: {
            controlHeightSM: 24,
            onlyIconSizeSM: 14,
          },
        },
      }}
    >
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        modifiers={[
          restrictToVerticalAxis,
          restrictToWindowEdges,
          restrictToFirstScrollableAncestor,
        ]}
      >
        <Checkbox.Group style={{ display: 'block', overflow: 'auto' }}>
          <SortableContext items={items} strategy={verticalListSortingStrategy}>
            {items.map((id) => (
              <SortableItem key={id} id={id} />
            ))}
          </SortableContext>
          <DragOverlay>
            {activeId ? <CheckItem isDragging isDragOverlay /> : null}
          </DragOverlay>
        </Checkbox.Group>
      </DndContext>
    </ThemeProvider>
  );
};

const TableColumns: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <Popover
      content={<CheckList />}
      title="Columns"
      trigger="click"
      placement="bottomRight"
    >
      {props.children}
    </Popover>
  );
};

export default TableColumns;
