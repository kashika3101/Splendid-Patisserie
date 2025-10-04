import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";
import logo from '../../assets/images/PageLogo.png';

function Footer() {
  return (
    <footer className="footer-container">
      {/* Top wave */}
      <div className="footer-wave">
        <svg
          viewBox="0 0 1440 150"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffe0e6"
            d="M0,64L40,69.3C80,75,160,85,240,101.3C320,117,400,139,480,138.7C560,139,640,117,720,106.7C800,96,880,96,960,90.7C1040,85,1120,75,1200,74.7C1280,75,1360,85,1400,90.7L1440,96V0H0Z"
          ></path>
        </svg>
      </div>

      <div className="footer-content">
        <div className="footer-brand">
          <img src={logo} alt="Splendid Patisserie Logo" className="footer-logo" />
          <p className="footer-brand-name">Splendid Patisserie</p>
        </div>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
        </div>

        {/* Footer Sections */}
        <div className="footer-sections">
          <div>
            <h4>Know Us</h4>
            <ul>
              <li>Our Story</li>
              <li>Contact Us</li>
              <li>Media</li>
            </ul>
          </div>

          <div>
            <h4>Need Help</h4>
            <ul>
              <li>FAQ</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h4>More Info</h4>
            <ul>
              <li>Gift Hampers</li>
              <li>Artisan Chocolates</li>
              <li>Assorted Cupcakes</li>
            </ul>
          </div>
        </div>

        <p className="copywright">© 2025 | Splendid Patisserie</p>
      </div>
    </footer>
  );
}

export { Footer };
