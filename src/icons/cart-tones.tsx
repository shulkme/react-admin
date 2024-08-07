import type { SVGProps } from 'react';

const CartTonesIcon = (props: SVGProps<SVGSVGElement>) => {
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
        d="M40.1668 32L43.806 10.1644C43.9076 9.55487 43.4376 9 42.8196 9H11.449L14.4894 30.2828C14.6301 31.2681 15.474 32 16.4693 32H40.1668Z"
        fillOpacity="0.3"
      />
      <path d="M7.26541 8H4V4H8.1327C9.62566 4 10.8914 5.09779 11.1026 6.57574L14.4893 30.2828C14.63 31.2681 15.4739 32 16.4692 32H42V36H16.4692C13.4833 36 10.9518 33.8044 10.5295 30.8485L7.26541 8Z" />
      <path d="M19 41C19 42.6569 17.6569 44 16 44C14.3431 44 13 42.6569 13 41C13 39.3431 14.3431 38 16 38C17.6569 38 19 39.3431 19 41Z" />
      <path d="M38 44C39.6569 44 41 42.6569 41 41C41 39.3431 39.6569 38 38 38C36.3431 38 35 39.3431 35 41C35 42.6569 36.3431 44 38 44Z" />
    </svg>
  );
};

export default CartTonesIcon;
