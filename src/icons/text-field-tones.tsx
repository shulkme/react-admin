import type { SVGProps } from 'react';

const TextFiledTonesIcon = (props: SVGProps<SVGSVGElement>) => {
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
        d="M30 10H6C4.89543 10 4 10.8954 4 12V36C4 37.1046 4.89543 38 6 38H30V10Z"
        fillOpacity="0.3"
      />
      <path
        d="M34 38H42C43.1046 38 44 37.1046 44 36V12C44 10.8954 43.1046 10 42 10H34V38Z"
        fillOpacity="0.3"
      />
      <path d="M26 3H38V7H34V41H38V45H26V41H30V7H26V3Z" />
    </svg>
  );
};

export default TextFiledTonesIcon;
