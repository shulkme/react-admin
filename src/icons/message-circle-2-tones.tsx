import type { SVGProps } from 'react';

const MessageCircle2TonesIcon = (props: SVGProps<SVGSVGElement>) => {
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
        d="M44 24C44 35.0457 35.0457 44 24 44H6.41411C5.52321 44 5.07704 42.9229 5.70701 42.2929L9.85781 38.1421C6.23856 34.5228 4 29.5228 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24ZM16 22V18H32V22H16ZM16 26H26V30H16V26Z"
        fillOpacity="0.3"
      />
      <path d="M32 18H16V22H32V18Z" />
      <path d="M26 26H16V30H26V26Z" />
    </svg>
  );
};

export default MessageCircle2TonesIcon;
