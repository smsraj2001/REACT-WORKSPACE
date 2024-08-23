import React from 'react';
import bgheader from './HeaderComponent.css'; // Keep the existing CSS for the background

const HeaderComponent = () => {
  return (
    <div className="container bgheader">
      <div id="heading" className="d-flex justify-content-center align-items-center flex-column">
        <h1>TVS MOTORS</h1>
        <img src="logo/tvslogo.jpg" alt="TVS Motors" className="imgfloat mt-3" width="100px" height="50px" />
      </div>
    </div>
  );
};

export default HeaderComponent;