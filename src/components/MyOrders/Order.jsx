import React from "react";

const Order = () => {
  return (
    <section className="Order">
      <main>
        <h1>Order Details</h1>
        <div>
          <h3>Shipping</h3>
          <p>
            <b>Address :</b>
            {"sdsadsacsd"}
          </p>
        </div>
        <div>
          <h3>Contact</h3>
          <p>
            <b>Name :</b>
            {"Arjun devasi"}
          </p>
          <p>
            <b>Phone :</b>
            {"1234567890"}
          </p>
        </div>
        <div>
          <h3>Status</h3>
          <p>
            <b>Order Status :</b>
            {"deliverd"}
          </p>
          <p>
            <b>Plased At :</b>
            {"12355"}
          </p>
          <p>
            <b>Delivered At :</b>
            {"223433"}
          </p>
        </div>
        <div>
          <h3>
            <b>Payment</b>
          </h3>
          <p>
            <b>Payment Method :</b>
            {"online"}
          </p>
          <p>
            <b>Payment Ref :</b>
            {"dlccm2223c dfe"}
          </p>
          <p>
            <b>Paid At :</b>
            {"23-09-23"}
          </p>
        </div>
        <div>
          <h3>
            <b>Shipping</b>
          </h3>
          <p>
            <b>Address :</b>
            {"sdsadsacsd"}
          </p>
        </div>
        <div>
          <h3>
            <b>Amount</b>
          </h3>
          <p>
            <b>Item Total :</b>₹{"2100"}
          </p>
          <p>
            <b>Shipping Charge :</b>₹{200}
          </p>
          <p>
            <b>Gst Tax :</b>₹{200}
          </p>
          <p>
            <b>Total Amount :</b>₹{2500}
          </p>
        </div>
        <article>
          <h2>Order Items</h2>
          <div>
            <h4>Veg Burger</h4>
            <p>12 x 20</p>
          </div>
          <div>
            <h4>Paneer Burger</h4>
            <p>10 x 15</p>
          </div>
          <div>
            <h4>Fries Burger</h4>
            <p>11 x 17</p>
          </div>
          <div>
            <h4>Total Amount</h4>
            <p>₹{5500}</p>
          </div>
        </article>
      </main>
    </section>
  );
};

export default Order;
