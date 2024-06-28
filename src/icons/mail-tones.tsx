import type { SVGProps } from 'react';

const MailTonesIcon = (props: SVGProps<SVGSVGElement>) => {
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
        d="M4 14.2284V38C4 39.1046 4.89543 40 6 40H42C43.1046 40 44 39.1046 44 38V14.2272L43.0428 14.828L25.0428 25.828C24.4025 26.2193 23.5972 26.2193 22.957 25.828L4.95696 14.828L4 14.2284Z"
        fillOpacity="0.3"
      />
      <path d="M4 14.2284L4.95696 14.828L22.957 25.828C23.5972 26.2193 24.4025 26.2193 25.0428 25.828L43.0428 14.828L44 14.2272V10C44 8.89543 43.1046 8 42 8H6C4.89543 8 4 8.89543 4 10V14.2284Z" />
    </svg>
  );
};

export default MailTonesIcon;
