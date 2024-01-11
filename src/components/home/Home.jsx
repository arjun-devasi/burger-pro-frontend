import React from "react";
import { motion } from "framer-motion";
import burger2 from "../../assets/burger-home.png";
import Menu from "../menu/Menu";
// import { delay } from "@reduxjs/toolkit/dist/utils";
const Home = () => {
  return (
    <>
      <div className="home-box">
        <div>
          <motion.h1
            initial={{ x: "-100%" }}
            whileInView={{ x: 0 }}
            transition={{ delay: 0.2 }}
          >
            YUMMY BURGER
          </motion.h1>
          <p>Bite into Joy: Where Every Burger Tells a Delicious Story!</p>
          <motion.button
            initial={{ y: "-100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Explore more
          </motion.button>
          <img className="heroImage" src={burger2} alt="hero-pic" />
        </div>
      </div>
      <Menu />
    </>
  );
};

export default Home;
