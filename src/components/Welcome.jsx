import React, { useEffect } from 'react';

function CustomWelc() {
    useEffect(() => {
        alert('Welcome in our shop');
      }, []);  
  return (
    <div>
      <h1 className="d-flex justify-content-center display-4 my-3 fw-bold">The best books at the best prices </h1>
    </div>
  );
}

export default CustomWelc;
