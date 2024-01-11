import React from "react";
import { Link } from "react-router-dom";
import { IoMdDoneAll } from "react-icons/io";
const PaySuccess = () => {
  return (
    <section className="PaySuccess">
      <main>
        <div>
          <h1>
            Order Plased <IoMdDoneAll />
          </h1>
          <p>Your Order plased Successfully and track your order ! </p>
        </div>
        <Link to="/myorder">Track Order</Link>
      </main>
    </section>
  );
};

export default PaySuccess;
