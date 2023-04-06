import React from "react";
import "./Home.css";
import img1 from "../assets/background/img1.jpg";

const Home = () => {
  return (
    <>
      <div className="homepage">
        <img src={img1} alt="homepage" className="home__picture" />
      </div>
    </>
  );
};

export default Home;
