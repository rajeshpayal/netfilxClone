import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useFirebase } from "../firebase";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const firebase = useFirebase();
  const navigate = useNavigate();
  const submitHandler = (event) => {
    event.preventDefault();

    if (email === "" && password === "") {
      alert("Please enter your email and password");
    }
    try {
      firebase.signUpWithEmailAndPassword(email, password);
      navigate("/login");
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div className="w-full h-screen">
      <img
        className=" sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/3d6cf7c4-ad17-457a-b6cf-ea952926ba74/54a0de92-feb4-4891-8cb3-00a794ec89f6/IN-en-20230206-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="netflix logo"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[330px] mx-auto py-17">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <form
              className="w-full flex flex-col py-4"
              onSubmit={submitHandler}
            >
              <input
                type="emial"
                className="p-3 my-2 bg-gray-600 rounded"
                placeholder="Email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <input
                className="p-3 my-2 bg-gray-600 rounded"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <button
                className="bg-red-600 py-3 my-6 rounded font-bold"
                type="submit"
              >
                Sign -up
              </button>
              <div className="flex justify-between items-center">
                <p>
                  <input type="checkbox" className="mr-2" />
                  Remember Me
                </p>
                <p>Need Help</p>
              </div>
              <p className="py-10">
                <span className="text-gray-600 ">
                  Already subscribed to Netflix{" "}
                </span>{" "}
                <Link to="/login">Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
