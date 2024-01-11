import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { GiArmoredBoomerang } from "react-icons/gi";
const ViewOrder = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <section className="myorders">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Item Qty</th>
              <th>Status </th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>User</th>
              <th>Action</th>
            </tr>
          </thead>
          {arr.map((id) => (
            <tbody key={id}>
              <tr>
                <td>#fcffsdfmfml</td>
                <td>Processing</td>
                <td>23</td>
                <td>2327</td>
                <td>Online</td>
                <td>Arjun</td>
                <td>
                  <Link to={`/order/${id}`}>
                    <AiOutlineEye />
                  </Link>
                  <button>
                    <GiArmoredBoomerang />
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </main>
    </section>
  );
};

export default ViewOrder;
