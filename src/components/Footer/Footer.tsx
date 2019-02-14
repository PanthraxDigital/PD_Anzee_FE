import "../../vendor/bootstrap/css/bootstrap.css";
import "../../css/util.min.css";
import "../../css/main.min.css";
import "../../fonts/font-awesome-4.7.0/css/font-awesome.min.css";

import * as React from "react";

import { SocialMediaIcon } from "..";
import { SOCIAL_MEDIA } from "../../core/config";
import Nav from "./Nav";

const Footer: React.FC = () => (
  <footer className="bg6 p-t-45 p-b-43 p-l-45 p-r-45" id="footer">
    <div className="flex-w p-b-90">
      <Nav />
    </div>
    <div className="t-center p-l-15 p-r-15">
      <a href="#">
        <img
          className="h-size2"
          src={require("../../images/icons/paypal.png")}
          alt="IMG-PAYPAL"
        />
      </a>
      <a href="#">
        <img
          className="h-size2"
          src={require("../../images/icons/visa.png")}
          alt="IMG-VISA"
        />
      </a>
      <a href="#">
        <img
          className="h-size2"
          src={require("../../images/icons/mastercard.png")}
          alt="IMG-MASTERCARD"
        />
      </a>
      <a href="#">
        <img
          className="h-size2"
          src={require("../../images/icons/express.png")}
          alt="IMG-EXPRESS"
        />
      </a>
      <a href="#">
        <img
          className="h-size2"
          src={require("../../images/icons/discover.png")}
          alt="IMG-DISCOVER"
        />
      </a>
      <div className="t-center s-text8 p-t-20">
        Copyright Anzee.in © 2019. All rights reserved. Powered by{" "}
        <a href="http://www.panthrax.com">Panthrax</a>
      </div>
    </div>
  </footer>
);

export default Footer;
