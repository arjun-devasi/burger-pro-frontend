import React from "react";
import userimg from "../../assets/my profile cv.jpg";
const ViewUser = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <section className="myorders">
      <main>
        <table>
          <thead>
            <tr>
              <th>User Id</th>
              <th>Name</th>
              <th>Photo </th>
              <th>Amount</th>
              <th>Role</th>
              <th>Since</th>
            </tr>
          </thead>
          {arr.map((id) => (
            <tbody key={id}>
              <tr>
                <td>#fcffsdfmfml</td>
                <td>Arjun</td>
                <td>
                  <img src={userimg} alt="pic" />
                </td>
                <td>₹ 2327</td>
                <td>Admin</td>
                <td>23/09/23</td>
              </tr>
            </tbody>
          ))}
        </table>
      </main>
    </section>
  );
};

export default ViewUser;
