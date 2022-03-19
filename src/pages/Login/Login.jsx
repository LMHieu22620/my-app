import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { RoomContext } from "../../context";
import Home from "../Home/Home";
import "./login.css";
const Login = () => {
  const accout = {
    email: "admin@gmail.com",
    password: "123",
  };
  const contextType = useContext(RoomContext);
  const { usesr, setUser } = contextType;
  const [details, setDetails] = useState({ email: "", password: "" });
  const submitLogin = (e) => {
    e.preventDefault();
    if (details.email == accout.email && details.password == accout.password) {
      setUser({ email: details.email });
    } else {
      console.log("error");
    }
    Login(details);
  };
  const Login = (details) => {
    console.log(details);
  };

  console.log(usesr);
  return (
    <div>
      {usesr.email == "" ? (
        <div className="login">
          <div className="login__overlay"></div>
          <div className="login__cart">
            <div className="login__cart-container">
              <h3 className="login__cart-dn"> Đăng Nhập</h3>
              <div className="login__cart-item">
                <h4 className="login__cart-item-itemone">Chưa Có Tài Khoản?</h4>
                <h4 className="login__cart-item-itemone login__cart-item-itemtwo">
                  Đăng Ký
                </h4>
              </div>
              <div className="login__cart-input">
                <div className="auth-form__group">
                  <input
                    type="text"
                    className="auth-form__input"
                    placeholder="admin@gmail.com"
                    onChange={(e) =>
                      setDetails({ ...details, email: e.target.value })
                    }
                    value={details.email}
                  />
                </div>
                <div className="auth-form__group">
                  <input
                    type="password"
                    className="auth-form__input"
                    placeholder="123"
                    onChange={(e) =>
                      setDetails({ ...details, password: e.target.value })
                    }
                    value={details.password}
                  />
                </div>
              </div>
              <Link to="/">
                <button className="btn-login" onClick={submitLogin}>
                  Đăng nhập
                </button>
              </Link>
              <div className="login__cart-Forgot">
                <span className="login__cart-Forgot-pw">Quên Mật Khẩu</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Home />
      )}
    </div>
  );
};

export default Login;
