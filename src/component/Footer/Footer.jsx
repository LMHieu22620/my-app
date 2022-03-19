import React from "react";
import { Link } from "react-router-dom";
import logo from "../Header/logo.png";
import "./footer.css";
const footerAboutLinks = [
  {
    display: "Giới Thiệu",
    path: "/about",
  },
];

const footerCustomerLink = [
  {
    display: "Animal",
    path: "/about",
  },
  {
    display: "Animal",
    path: "/about",
  },
  {
    display: "Animal",
    path: "/about",
  },
];
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="Grid">
          <div>
            <div className="footer__title">Tổng đài hỗ trợ</div>
            <div className="footer__content">
              <p>
                Liên Hệ <strong>0123456789</strong>
              </p>
              <p>
                Thắc Mắc <strong>0123456789</strong>
              </p>
              <p>
                Góp Ý, Khiếu Nại <strong>0123456789</strong>
              </p>
            </div>
          </div>
          <div>
            <div className="footer__title">Về Animal</div>
            <div className="footer__content">
              {footerAboutLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className="footer__title">Chăm Sóc Khách Hàng</div>
            <div className="footer__content">
              {footerCustomerLink.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div className="footer__about">
            <p>
              <Link to="/">
                <img src={logo} className="footer__logo" />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
