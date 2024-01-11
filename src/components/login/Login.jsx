import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FiLogIn } from "react-icons/fi";
const Login = () => {
  return (
    <section className="login">
      <div>
        <button>
          <FiLogIn />
          Login
        </button>
        <button>
          <FcGoogle /> Login with Google
        </button>
      </div>
    </section>
  );
};

export default Login;
