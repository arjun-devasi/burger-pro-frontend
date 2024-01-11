import React from "react";
import { Link } from "react-router-dom";
import { MdFastfood } from "react-icons/md";
import { FiLogIn, FiShoppingCart } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
const Header = ({ isAuthenticated = true }) => {
  return (
    <nav>
      <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}>
        <MdFastfood />
      </motion.div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">
          <FiShoppingCart />
        </Link>
        <Link to={isAuthenticated ? "/myprofile" : "/login"}>
          {isAuthenticated ? <FaUser /> : <FiLogIn />}
        </Link>
      </div>
    </nav>
  );
};

export default Header;
