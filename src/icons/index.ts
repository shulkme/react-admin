// +---------------------------------
// | 本地图标库
// | 按需加载
// +---------------------------------

import { mapKeys } from 'lodash';
import React, { ComponentType } from 'react';

type IconComponent = () => Promise<{
  default: ComponentType<React.SVGProps<SVGSVGElement>>;
}>;

const modules = import.meta.glob('./**.tsx');

const _icons = mapKeys(modules, (_, key) => {
  return key.match(/[^/]+(?=\.\w+$)/)?.[0] || key;
});

// export default _icons;

// 类型推导
const local_icons = _icons as {
  'apps-3-tones': IconComponent;
  'apps-tones': IconComponent;
  'box-tones': IconComponent;
  'cart-tones': IconComponent;
  'column-tones': IconComponent;
  'contacts-tones': IconComponent;
  'document-check-tones': IconComponent;
  'file-box-tones': IconComponent;
  'gear-2-tones': IconComponent;
  'grid-tones': IconComponent;
  'list-view-tones': IconComponent;
  'mail-tones': IconComponent;
  'message-circle-2-tones': IconComponent;
  'pen-tones': IconComponent;
  'piggy-bank-tones': IconComponent;
  'ranking-tones': IconComponent;
  'seal-tones': IconComponent;
  'shield-lock-tones': IconComponent;
  'switch-button-tones': IconComponent;
  'table-chart-2-tones': IconComponent;
  'text-field-tones': IconComponent;
  'wallet-tones': IconComponent;
  'waterfall-flow-tones': IconComponent;
};

export default local_icons;
