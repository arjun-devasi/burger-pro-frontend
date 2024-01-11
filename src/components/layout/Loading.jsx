import React from "react";
import { motion } from "framer-motion";
const Loading = () => {
  const option = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    transition: {
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  };
  return (
    <section className="loading">
      <main>
        <div>
          <motion.p {...option}>Loading...</motion.p>
        </div>
      </main>
    </section>
  );
};

export default Loading;
