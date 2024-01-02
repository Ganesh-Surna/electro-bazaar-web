import React from 'react';
import { Dropdown } from 'antd';
const items = [
  {
    key: '1',
    label: (
      <a>
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a>
        2nd menu item
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a >
        3rd menu item
      </a>
    ),
  },
];
const DropdownComponent = ({title}) => (
  <li>
    <Dropdown
      menu={{
        items,
        style: {width:"100%"},
      }}
      placement="bottomLeft"
      arrow
    >
      <span>{title}</span>
    </Dropdown>
</li>
);
export default DropdownComponent;