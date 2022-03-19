import React, { useContext } from "react";
import Content from "../../component/Content/Content";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";
import { RoomContext } from "../../context";
import Login from "../Login/Login";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

const Home = () => {
  const contextType = useContext(RoomContext);
  const { usesr, setUser } = contextType;
  console.log(usesr.email);
  return (
    <div>
      <Header />
      {/* {usesr.email == "" ? <NotFoundPage /> : <Content />} */}
      <Content />
      <Footer />
    </div>
  );
};

export default Home;
