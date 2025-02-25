import type { SVGProps } from 'react';

const SealTonesIcon = (props: SVGProps<SVGSVGElement>) => {
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
        d="M15.0024 26H10C7.79086 26 6 27.7909 6 30V37H42V30C42 27.7909 40.2091 26 38 26H32.9976C28.0051 25.2849 29.1205 20.4982 30.169 15.9983C30.5899 14.1921 31 12.432 31 11C31 7.13401 27.866 4 24 4C20.134 4 17 7.13401 17 11C17 12.432 17.4101 14.1921 17.831 15.9983C18.8795 20.4982 19.9949 25.2849 15.0024 26Z"
        fillOpacity="0.3"
      />
      <path d="M8 40H40V44H8V40Z" />
    </svg>
  );
};

export default SealTonesIcon;
