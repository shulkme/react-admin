import type { SVGProps } from 'react';

const SwitchButtonTonesIcon = (props: SVGProps<SVGSVGElement>) => {
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
        d="M14 10C6.26801 10 0 16.268 0 24C0 31.732 6.26801 38 14 38H34C41.732 38 48 31.732 48 24C48 16.268 41.732 10 34 10H14ZM14 32C18.4183 32 22 28.4183 22 24C22 19.5817 18.4183 16 14 16C9.58172 16 6 19.5817 6 24C6 28.4183 9.58172 32 14 32Z"
        fillOpacity="0.3"
      />
      <path d="M22 24C22 28.4183 18.4183 32 14 32C9.58172 32 6 28.4183 6 24C6 19.5817 9.58172 16 14 16C18.4183 16 22 19.5817 22 24Z" />
    </svg>
  );
};

export default SwitchButtonTonesIcon;
