import type React from 'react';
import { Link } from 'react-router-dom';

const Ecommerce: React.FC = () => {
  return (
    <>
      <div>ecommerce</div>
      <div>
        <Link to="/dashboards/personal/welcome">welcome</Link>
      </div>
    </>
  );
};

export default Ecommerce;
