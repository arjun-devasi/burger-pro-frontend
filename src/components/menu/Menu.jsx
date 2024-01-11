import React from "react";
import { motion } from "framer-motion";
import burger1 from "../../assets/burger-1.jpg";
import burger2 from "../../assets/burger-2.avif";
import burger3 from "../../assets/burger-3.jpg";
import burger4 from "../../assets/burger-4.jpg";
// import { color } from "framer-motion";
const MenuData = [
  {
    id: 1,
    name: "Burger-1",
    line: "Thic panerr burger with extra layer",
    price: 499,
    imageSrc: burger1,
  },
  {
    id: 2,
    name: "Burger-2",
    line: "Thic panerr burger with extra layer",
    price: 399,
    imageSrc: burger2,
  },
  {
    id: 3,
    name: "Burger-1",
    line: "Thic panerr burger with extra layer",
    price: 599,
    imageSrc: burger3,
  },
  {
    id: 4,
    name: "Burger-4",
    line: "Thic panerr burger with extra layer",
    price: 299,
    imageSrc: burger4,
  },
];
const Menu = () => {
  return (
    <section className="explore-menu">
      <div>
        <motion.h1
          initial={{ y: "-100%" }}
          whileInView={{ y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Explore Menu
        </motion.h1>
        <div className="menuCard">
          {MenuData.map(({ id, name, line, price, imageSrc }) => (
            <div key={id} className="menu-item">
              <img src={imageSrc} alt="imageburger-2" />
              <div>
                <h2>{name} Veg Hopper</h2>
                <div>
                  <p>{line}</p>
                  <p style={{ color: "red" }}>₹ {price}/-</p>
                </div>
                <button>Add</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
