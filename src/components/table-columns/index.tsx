import Icon from '@/components/icon';
import { DndContext, useDraggable } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { Button, Checkbox, Col, Popover, Row, Typography } from 'antd';
import { ThemeProvider } from 'antd-style';
import React, { useState } from 'react';

const CheckItem: React.FC = () => {
  const { listeners, setNodeRef, attributes } = useDraggable({
    id: 'id',
  });
  return (
    <Row align="middle" gutter={4} ref={setNodeRef}>
      <Col flex="none">
        <Button
          size="small"
          icon={<Icon name="grip-vertical" />}
          type="text"
          {...listeners}
          {...attributes}
        />
      </Col>
      <Col flex="auto">
        <Checkbox>Name</Checkbox>
      </Col>
    </Row>
  );
};

const CheckList: React.FC = () => {
  const [items] = useState([1, 2, 3]);
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
      <DndContext>
        <Checkbox.Group style={{ display: 'block' }}>
          <Typography.Text type="secondary">Fixed Left</Typography.Text>
          <SortableContext items={items} strategy={verticalListSortingStrategy}>
            {items.map((_, index) => (
              <CheckItem key={index} />
            ))}
          </SortableContext>
          <Typography.Text type="secondary">Not Fixed</Typography.Text>
          <SortableContext items={items} strategy={verticalListSortingStrategy}>
            {items.map((_, index) => (
              <CheckItem key={index} />
            ))}
          </SortableContext>
          <Typography.Text type="secondary">Fixed Right</Typography.Text>
          <SortableContext items={items} strategy={verticalListSortingStrategy}>
            {items.map((_, index) => (
              <CheckItem key={index} />
            ))}
          </SortableContext>
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
