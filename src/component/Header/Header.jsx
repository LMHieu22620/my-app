import React, { useContext, useEffect, useRef } from "react";
import "./header.css";
import logo from "../Header/logo.png";
import { Link } from "react-router-dom";
import { RoomContext } from "../../context";
const Header = () => {
  const headerRef = useRef(null);
  const contextType = useContext(RoomContext);
  const { usesr, setUser } = contextType;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("active");
      } else {
        headerRef.current.classList.remove("active");
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  const Logout = () => {
    setUser({ email: "" });
  };
  return (
    <div className="header" ref={headerRef}>
      <div className="container header-container">
        <div className="header-home">
          <Link to="/">Home</Link>
        </div>
        <img className="header-logo" src={logo} alt="" />
        <div className="header-logout">
          <Link to="/login" onClick={Logout}>
            {usesr.email == "" ? "Đăng Nhập" : "Đăng Xuất"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
