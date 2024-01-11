import React from "react";
import { MdError } from "react-icons/md";
import { Link } from "react-router-dom";
import Loading from "./Loading";
const PageNotFound = () => {
  const loadings = true;
  return (
    <section className="page404">
      {loadings === false ? (
        <main>
          <div>
            <MdError />
            <h1> 404 </h1>
          </div>
          <p>Page not found, Click for Home page.</p>
          <button>
            <Link to="/"> Home Page</Link>
          </button>
        </main>
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default PageNotFound;
