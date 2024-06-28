import type { SVGProps } from 'react';

const ListViewTonesIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      viewBox="0 0 48 48"
      {...props}
    >
      <path
        d="M8 6C6.89543 6 6 6.89543 6 8V14C6 15.1046 6.89543 16 8 16H18C19.1046 16 20 15.1046 20 14V8C20 6.89543 19.1046 6 18 6H8Z"
        fillOpacity="0.3"
      />
      <path d="M42 9H24V13H42V9Z" fillOpacity="0.3" />
      <path
        d="M6 34C6 32.8954 6.89543 32 8 32H18C19.1046 32 20 32.8954 20 34V40C20 41.1046 19.1046 42 18 42H8C6.89543 42 6 41.1046 6 40V34Z"
        fillOpacity="0.3"
      />
      <path d="M42 35H24V39H42V35Z" fillOpacity="0.3" />
      <path d="M8 19C6.89543 19 6 19.8954 6 21V27C6 28.1046 6.89543 29 8 29H18C19.1046 29 20 28.1046 20 27V21C20 19.8954 19.1046 19 18 19H8Z" />
      <path d="M42 22H24V26H42V22Z" />
    </svg>
  );
};

export default ListViewTonesIcon;
