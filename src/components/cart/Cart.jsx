import React from "react";
import burger1 from "../../assets/burger-1.jpg";
import burger2 from "../../assets/burger-2.avif";
import burger3 from "../../assets/burger-3.jpg";
import burger4 from "../../assets/burger-4.jpg";
import { Link } from "react-router-dom";
const CartItem = ({ titel, increment, decrement, img }) => {
  return (
    <div className="CartItem">
      <div>
        <h4>{titel}</h4>
        <img src={img} alt="burger" />
      </div>
      <div>
        <button onClick={decrement}>-</button>
        <input type="number" value={0} readOnly />
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};
const Cart = () => {
  const increment = (item) => {};
  const decrement = (item) => {};
  return (
    <section className="cart">
      <main>
        <CartItem
          titel="burger veg 1"
          increment={increment(1)}
          decrement={decrement(1)}
          img={burger1}
        />
        <CartItem
          titel="burger veg 2"
          increment={increment(1)}
          decrement={decrement(1)}
          img={burger2}
        />
        <CartItem
          titel="burger veg 4"
          increment={increment(1)}
          decrement={decrement(1)}
          img={burger3}
        />
        <CartItem
          titel="burger veg 4"
          increment={increment(1)}
          decrement={decrement(1)}
          img={burger4}
        />
        <article className="cart-Charge">
          <div>
            <h4>Total Sub-Charge</h4>
            <p>₹ {2000}/-</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹ {2000 * 0.18}/-</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹ {200}/-</p>
          </div>
          <div>
            <h4>Total </h4>
            <p>₹ {2000 * 0.18 + 200 + 2000}/-</p>
          </div>
        </article>
        <Link className="checkout" to="/checkout">
          CheckOut
        </Link>
      </main>
    </section>
  );
};

export default Cart;
