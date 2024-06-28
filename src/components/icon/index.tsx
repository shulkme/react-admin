// +---------------------------------
// | 图标组件
// | 按需加载，可添加本地图标，亦可导出第三方图标库，便于统一管理
// | 通常情况下，图标内容及数量随业务固定，所以推荐本地化动态加载，不建议完全导入第三方图标库，仅当后端指定图标时，可全部导入
// +---------------------------------

import { cx, useTheme } from 'antd-style';
import { mapKeys } from 'lodash';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import React, { Suspense, lazy, type ComponentType } from 'react';

// 图标组件类型断言，解决第三方类型冲突
type IconComponent = () => Promise<{
  default: ComponentType<React.SVGProps<SVGSVGElement>>;
}>;

type LazyComponent = React.LazyExoticComponent<
  React.ComponentType<React.SVGProps<SVGSVGElement>>
>;

export interface IconProps
  extends Omit<React.SVGProps<SVGSVGElement>, 'name' | 'ref'> {
  name: keyof typeof icons;
  size?: string | number;
}

// 本地导入，推荐写法
const modules = import.meta.glob('../../icons/**.tsx');
const local_icons = mapKeys(modules, (_, key) => {
  return key.match(/[^/]+(?=\.\w+$)/)?.[0] || key;
});

// 图标集合
const icons = {
  ...dynamicIconImports,
  ...local_icons,
  // 或者，
  // 'xxx': () => import('@/icons/xxx'),
} as Record<string, IconComponent>;

// 图标懒加载
const LazyIcons: Record<string, LazyComponent> = Object.keys(icons).reduce(
  (pre, cur) => {
    pre[cur] = lazy(icons[cur]);
    return pre;
  },
  {} as Record<string, LazyComponent>,
);

const _Icon: React.FC<IconProps> = ({
  name,
  size = '1em',
  className,
  ...reset
}) => {
  const { iconPrefixCls, borderRadiusXS, colorFillSecondary } = useTheme();
  const Comp = LazyIcons[name];
  return (
    <span key={name} rel="img" className={cx(iconPrefixCls, className)}>
      <Suspense
        fallback={
          // 图标异步加载占位符，可选
          <div
            style={{
              width: size,
              height: size,
              background: colorFillSecondary,
              borderRadius: `${borderRadiusXS}px`,
            }}
          />
        }
      >
        <Comp width={size} height={size} {...reset} />
      </Suspense>
    </span>
  );
};

// 避免重复渲染 re-renders
const Icon = React.memo(_Icon);

export default Icon;
