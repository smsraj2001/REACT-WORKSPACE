import React from 'react';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';

function AppLayout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <HeaderComponent />
      <div className="d-flex flex-grow-1">
        <main className="flex-grow-1 p-3 pe-5"> {/* Add padding end to make space for Sidebar */}
          {children}
        </main>
        <div className="position-relative"> {/* Container for the Sidebar */}
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default AppLayout;
