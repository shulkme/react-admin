import type { SVGProps } from 'react';

const RankingTonesIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      fill="currentColor"
      {...props}
    >
      <path
        d="M35 13C34.4477 13 34 13.4477 34 14V41C34 41.5523 34.4477 42 35 42H41C41.5523 42 42 41.5523 42 41V14C42 13.4477 41.5523 13 41 13H35Z"
        fillOpacity="0.3"
      />
      <path
        d="M7 21C6.44772 21 6 21.4477 6 22V41C6 41.5523 6.44772 42 7 42H13C13.5523 42 14 41.5523 14 41V22C14 21.4477 13.5523 21 13 21H7Z"
        fillOpacity="0.3"
      />
      <path d="M20 6C20 5.44771 20.4477 5 21 5H27C27.5523 5 28 5.44772 28 6V41C28 41.5523 27.5523 42 27 42H21C20.4477 42 20 41.5523 20 41V6Z" />
    </svg>
  );
};

export default RankingTonesIcon;
