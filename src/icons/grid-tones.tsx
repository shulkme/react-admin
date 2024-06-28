import type { SVGProps } from 'react';

const GirdTonesIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      viewBox="0 0 48 48"
      {...props}
    >
      <path d="M8 6C6.89543 6 6 6.89543 6 8V22.5H22.5V6H8Z" fillOpacity="0.3" />
      <path
        d="M25.5 6V22.5H42V8C42 6.89543 41.1046 6 40 6H25.5Z"
        fillOpacity="0.3"
      />
      <path
        d="M22.5 42V25.5H6V40C6 41.1046 6.89543 42 8 42H22.5Z"
        fillOpacity="0.3"
      />
      <path d="M25.5 25.5V42H40C41.1046 42 42 41.1046 42 40V25.5H25.5Z" />
    </svg>
  );
};

export default GirdTonesIcon;
