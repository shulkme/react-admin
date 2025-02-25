import type { SVGProps } from 'react';

const ContactsTonesIcon = (props: SVGProps<SVGSVGElement>) => {
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
        d="M6 35.1865C6 29.1889 11 25 20 25C29 25 34 29.1889 34 35.1865V44H6V35.1865Z"
        fillOpacity="0.3"
      />
      <path d="M27 11.1252C27 7.19005 23.8661 4 20.0003 4C19.7435 4 19.4868 4.01439 19.2315 4.0431C15.3891 4.4753 12.6184 7.99641 13.043 11.9077L13.4947 16.0692C13.8612 19.4451 16.6637 22 20.0003 22C23.3369 22 26.1395 19.4451 26.5059 16.0692L26.9577 11.9077C26.9859 11.6479 27 11.3866 27 11.1252Z" />
      <path d="M46 10H32V14H46V10Z" />
      <path d="M34 22H46V26H34V22Z" />
      <path d="M46 34H38V38H46V34Z" />
    </svg>
  );
};

export default ContactsTonesIcon;
