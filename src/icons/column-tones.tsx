import type { SVGProps } from 'react';

const ColumnTonesIcon = (props: SVGProps<SVGSVGElement>) => {
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
        d="M8 6C6.89543 6 6 6.89543 6 8V40C6 41.1046 6.89543 42 8 42H14V6H8Z"
        fillOpacity="0.3"
      />
      <path
        d="M40 6H34V42H40C41.1046 42 42 41.1046 42 40V8C42 6.89543 41.1046 6 40 6Z"
        fillOpacity="0.3"
      />
      <path d="M17 6H31V42H17V6Z" />
    </svg>
  );
};

export default ColumnTonesIcon;
