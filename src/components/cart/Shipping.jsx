import React from "react";
import { Country, State } from "country-state-city";
const Shipping = () => {
  return (
    <section className="shipping">
      <main>
        <h1>Shipping Order</h1>
        <form>
          <div>
            <label>Name</label>
            <input type="text" placeholder="name" />
          </div>
          <div>
            <label>House No. </label>
            <input type="number" placeholder="write house no." />
          </div>
          <div>
            <label>City</label>
            <input type="text" placeholder="Enter City" />
          </div>
          <div>
            <label>Country</label>
            <select>
              <option value="">Country</option>
              {Country &&
                Country.getAllCountries().map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label>State</label>
            <select>
              <option value="">State</option>
              {State &&
                State.getStatesOfCountry("IN").map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label>Pincode</label>
            <input type="number" placeholder="Pincode" />
          </div>
          <button type="Submit">Confirm Order</button>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
