import type { SVGProps } from 'react';

const FileBoxTonesIcon = (props: SVGProps<SVGSVGElement>) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42 18H6V40C6 41.1046 6.89543 42 8 42H40C41.1046 42 42 41.1046 42 40V18ZM16 24H32V28H16V24Z"
        fillOpacity="0.3"
      />
      <path d="M10 6H38V9H10V6Z" />
      <path d="M8 11H40V15H8V11Z" />
      <path d="M32 24H16V28H32V24Z" />
    </svg>
  );
};

export default FileBoxTonesIcon;
