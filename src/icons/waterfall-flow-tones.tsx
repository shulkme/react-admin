import type { SVGProps } from 'react';

const WaterfallFlowTonesIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      viewBox="0 0 48 48"
      {...props}
    >
      <path d="M8 6C6.89543 6 6 6.89543 6 8V12.5H22.5V6H8Z" fillOpacity="0.3" />
      <path
        d="M22.5 42V15.5H6V40C6 41.1046 6.89543 42 8 42H22.5Z"
        fillOpacity="0.3"
      />
      <path d="M40 42C41.1046 42 42 41.1046 42 40V35.5L25.5 35.5L25.5 42H40Z" />
      <path d="M42 8L42 32.5L25.5 32.5L25.5 6L40 6C41.1046 6 42 6.89543 42 8Z" />
    </svg>
  );
};

export default WaterfallFlowTonesIcon;
