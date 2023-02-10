import React from "react";
import { Link } from "react-router-dom";
import { useFirebase } from "../firebase";

const NavBar = () => {
  const firebase = useFirebase();

  return (
    <>
      <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
        <Link to="/">
          <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
            NETFLIX
          </h1>
        </Link>
        {!firebase.isLoggedIn && (
          <div>
            <Link to="/login">
              <button className="text-white pr-4"> Sign In</button>
            </Link>
            <Link to="/signup">
              <button className="bg-red-600 px-6 py-4 rounded cursor-pointer">
                Sign Up
              </button>
            </Link>
          </div>
        )}
        {firebase.isLoggedIn && (
          <div>
            <Link to="/account">
              <button className="text-white pr-4">Account</button>
            </Link>
            <Link to="/signup">
              <button
                className="bg-red-600 px-6 py-4 rounded cursor-pointer"
                onClick={() => firebase.logout()}
              >
                Logout
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;