import React from "react";
import { Link } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { Chart as Chartjs, Tooltip, ArcElement, Legend } from "chart.js";
Chartjs.register(Tooltip, ArcElement, Legend);
const Box = ({ title, value }) => (
  <div>
    <h2>
      {title === "Income" && "₹"}
      {value}
    </h2>
    <p>{title}</p>
  </div>
);
const Dashboard = () => {
  const data = {
    labels: ["Preparing", "Shipped", "Deliverd"],
    datasets: [
      {
        label: "# of order",
        data: [2, 3, 4],
        backgroundColor: [
          "rgba(159,63,176,0.1)",
          "rgba(159,63,60,0.1)",
          "rgba(156,0,176,0.1)",
        ],
        borderColor: ["rgb(159,63,176)", "rgb(159,63,176)", "rgb(159,63,176)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <section className="dashboard">
      <main>
        <article>
          <Box title={"Orders"} value={20} />
          <Box title={"Users"} value={20} />
          <Box title={"Income"} value={2000} />
        </article>
        <section>
          <div>
            <Link to="/admin/orders"> View Orders</Link>
            <Link to="/admin/users"> View Users</Link>
          </div>
          <aside>
            <Doughnut data={data} />
          </aside>
        </section>
      </main>
    </section>
  );
};

export default Dashboard;
