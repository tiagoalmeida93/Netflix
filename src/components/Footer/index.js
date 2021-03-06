import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

function Footer() {
  return (
    <Container>
      <span>
        Questions? <Link>Call 1-877-742-1335</Link>
      </span>
      <div className="footer-columns">
        <ul>
          <li>
            <Link>FAQ</Link>
          </li>
          <li>
            <Link>Investor Relations</Link>
          </li>
          <li>
            <Link>Ways to Watch</Link>
          </li>
          <li>
            <Link>Corporate Information</Link>
          </li>
          <li>
            <Link>Netflix Originals</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link>Help Center</Link>
          </li>
          <li>
            <Link>Jobs</Link>
          </li>
          <li>
            <Link>Terms of Use</Link>
          </li>
          <li>
            <Link>Contact Us</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link>Account</Link>
          </li>
          <li>
            <Link>Redeem Gift Cards</Link>
          </li>
          <li>
            <Link>Privacy</Link>
          </li>
          <li>
            <Link>Speed Test</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link>Media Center</Link>
          </li>
          <li>
            <Link>Buy Gift Cards</Link>
          </li>
          <li>
            <Link>Cookie Preferences</Link>
          </li>
          <li>
            <Link>Legal Notices</Link>
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default Footer;
