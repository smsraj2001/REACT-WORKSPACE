import React from 'react';
import './FooterComponent.css'; // Ensure the CSS file is properly imported

const FooterComponent = () => {
  return (
    <div id="footer" className="bgfooter">
      <div className="container">
        <div className="row footer-content">
          {/* Reach Us Section */}
          <div className="col-md-4 footer-section text-left">
            <h3>Reach Us</h3>
            <p>
              <strong className="text-primary">TVS Motor Email:</strong> 
              <a href="mailto:customercare@tvsmotor.com" className="text-dark ml-2">
                customercare@tvsmotor.com
              </a>
            </p>
            <p>
              <strong className="text-primary">TVS Motor Call:</strong> 
              <a href="tel:18002587555" className="text-dark ml-2">
                18002587555
              </a>
            </p>
          </div>

          {/* Follow Us Section */}
          <div className="col-md-4 footer-section text-center">
            <h3>Follow Us</h3>
            <a href="https://in.linkedin.com/company/tvs-motor-company" title="LinkedIn" className="mx-2">
              <img src="logo/linkedin.png" alt="LinkedIn" className="footer-icon" />
            </a>
            <a href="https://www.youtube.com/@tvsmotorcompany" title="YouTube" className="mx-2">
              <img src="logo/youtube.png" alt="YouTube" className="footer-icon" />
            </a>
            <a href="https://www.facebook.com/tvsmotorcompany/" title="Facebook" className="mx-2">
              <img src="logo/facebook.png" alt="Facebook" className="footer-icon" />
            </a>
            <a href="https://www.instagram.com/tvsmotorcompany/?hl=en" title="Instagram" className="mx-2">
              <img src="logo/instagram.png" alt="Instagram" className="footer-icon" />
            </a>
            <a href="https://twitter.com/tvsmotorcompany?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" title="Twitter" className="mx-2">
              <img src="logo/x.png" alt="Twitter" className="footer-icon" />
            </a>
          </div>

          {/* Legal Section */}
          <div className="col-md-4 footer-section text-right">
            <h3>© TVS Motor Company. All Rights Reserved</h3>
            <a href="#" className="d-block">Privacy Policy</a>
            <a href="#" className="d-block">Disclaimer</a>
            <a href="#" className="d-block">Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
