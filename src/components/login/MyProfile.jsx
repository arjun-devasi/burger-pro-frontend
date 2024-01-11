import React from "react";
import profileImg from "../../assets/my profile cv.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import { delay } from "@reduxjs/toolkit/dist/utils";
const MyProfile = () => {
  const option = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <section className="myprofile">
      <main>
        <motion.img src={profileImg} {...option} alt="profile" />
        <motion.h2 {...option} transition={{ delay: 0.3 }}>
          Arjun Devasi
        </motion.h2>
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            to="/admin/dashboard"
            style={{ borderRadius: 0, backgroundColor: "#033b7b" }}
          >
            Dashboard
          </Link>
        </motion.div>
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/myorders">Orders</Link>
        </motion.div>
        <motion.button {...option}>Logout</motion.button>
      </main>
    </section>
  );
};

export default MyProfile;
