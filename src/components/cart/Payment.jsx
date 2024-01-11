import React from "react";

const Payment = () => {
  return (
    <section className="ConfirmOrder">
      <main>
        <h1>Confirm Order</h1>
        <form>
          <div>
            <label>Cash On Delivery</label>
            <input type="radio" name="payment" />
          </div>
          <div>
            <label>Online payment</label>
            <input type="radio" name="payment" />
          </div>
          <button>Place order</button>
        </form>
      </main>
    </section>
  );
};

export default Payment;
