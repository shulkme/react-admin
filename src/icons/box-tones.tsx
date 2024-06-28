import type { SVGProps } from 'react';

const BoxTonesIcon = (props: SVGProps<SVGSVGElement>) => {
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
        d="M42.188 15L25.5014 24.6607V43.9297L41.188 34.8731C41.8068 34.5158 42.188 33.8556 42.188 33.141V15Z"
        fillOpacity="0.3"
      />
      <path
        d="M5.81494 33.141V15.0001L22.5014 24.6607V43.9297L6.81494 34.8731C6.19614 34.5158 5.81494 33.8556 5.81494 33.141Z"
        fillOpacity="0.3"
      />
      <path d="M25 3.57728C24.3811 3.22001 23.6188 3.22001 23 3.57728L7.3374 12.6201L23.9999 22.2668L40.6624 12.62L25 3.57728Z" />
    </svg>
  );
};

export default BoxTonesIcon;
