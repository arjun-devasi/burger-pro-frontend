import React from "react";
import burgerImg from "../../assets/burger-contact.png";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <section className="contact">
      <motion.form
        initial={{ x: "-100%" }}
        whileInView={{ x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h1>Contact Us</h1>
        <input placeholder="Name" type="text" />
        <input placeholder="Email" type="email" />
        <textarea placeholder="...message" cols={30} rows={10} />
        <button type="submit">Submit</button>
      </motion.form>
      <div className="form-box">
        <motion.div
          initial={{ y: "-100%", opacity: 0, x: "50%" }}
          whileInView={{ y: "-50%", x: "50%", opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <img src={burgerImg} alt="pic" />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
