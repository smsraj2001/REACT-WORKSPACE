import React from 'react';
import './Investors.css'; // Import the custom CSS file

const Investors = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4 text-primary">Investor Information</h1>

      {/* Overview Section */}
      <section className="mb-5 p-4 border rounded shadow-sm bg-light">
        <h2 className="mb-3 text-success">Overview</h2>
        <ul className="list-group">
          <li className="list-group-item bg-info text-white">Financial Reports</li>
          <li className="list-group-item bg-info text-white">Investor Information</li>
          <li className="list-group-item bg-info text-white">Investor Communication</li>
          <li className="list-group-item bg-info text-white">SEBI Disclosure</li>
        </ul>
      </section>

      {/* Financial Reports Section */}
      <section className="mb-5 p-4 border rounded shadow-sm bg-light">
        <h2 className="mb-3 text-success">Latest Financial Reports</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Audited Financial Result for the year ended 31st March 2024</strong><br />
            March 2024
          </li>
          <li className="list-group-item">
            <strong>Financial Results for the Quarter ended 31st December 2023</strong><br />
            December 2023
          </li>
          <li className="list-group-item">
            <strong>32nd Annual Report 2023-24</strong><br />
            July 2024
          </li>
        </ul>
      </section>

      {/* Important Investor Information Section */}
      <section className="mb-5 p-4 border rounded shadow-sm bg-light">
        <h2 className="mb-3 text-success">Important Investor Information</h2>
        <ul className="list-group">
          <li className="list-group-item">Notice of Board Meetings</li>
          <li className="list-group-item">Material Subsidiary Policy</li>
        </ul>
      </section>

      {/* Contact Information Section */}
      <section className="mb-5 p-4 border rounded shadow-sm bg-light">
        <h2 className="mb-3 text-success">Contact Information</h2>
        <h3>Address For Communication</h3>
        <address>
          <p>"Chaitanya", No.12, Khader Nawaz Khan Road, Nungambakkam, Chennai - 600 006, Tamil Nadu, India.</p>
          <p>Tel: 044 - 2833 2115</p>
          <p>Fax: 044 - 2833 2113</p>
          <p>CIN No: L35921TN1992PLC022845</p>
          <p>Email: <a href="mailto:contactus@tvsmotor.com" className="text-primary">contactus@tvsmotor.com</a></p>
          <p>Website: <a href="http://www.tvsmotor.com" target="_blank" rel="noopener noreferrer" className="text-primary">www.tvsmotor.com</a></p>
        </address>
      </section>

      {/* Share Transfer Agent Section */}
      <section className="mb-5 p-4 border rounded shadow-sm bg-light">
        <h2 className="mb-3 text-success">Details of Share Transfer Agent</h2>
        <address>
          <p>Integrated Registry Management Services Private Limited</p>
          <p>Unit: TVS Motor Company Limited</p>
          <p>2nd Floor, Kences Towers, No. 1, Ramakrishna Street, North Usman Road, T Nagar, Chennai-600 017</p>
          <p>Tel: (044) 2814 0801-03</p>
          <p>Fax: (044) 2814 2479</p>
          <p>Email: <a href="mailto:corpserv@integratedindia.in" className="text-primary">corpserv@integratedindia.in</a>, <a href="mailto:srirams@integratedindia.in" className="text-primary">srirams@integratedindia.in</a></p>
        </address>
      </section>

      {/* Nodal Officer Section */}
      <section className="p-4 border rounded shadow-sm bg-light">
        <h2 className="mb-3 text-success">Details of Nodal Officer</h2>
        <p><strong>Mr K S Srinivasan</strong></p>
        <p>Email: <a href="mailto:srinivasan.ks@tvsmotor.com" className="text-primary">srinivasan.ks@tvsmotor.com</a></p>
      </section>
    </div>
  );
};

export default Investors;
