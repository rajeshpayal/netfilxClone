import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
// import { FirebaseProvider } from "./firebase";

import Account from "./pages/Account";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <NavBar />
      {/* <FirebaseProvider> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/account" element={<Account />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      {/* </FirebaseProvider> */}
    </>
  );
}

export default App;
