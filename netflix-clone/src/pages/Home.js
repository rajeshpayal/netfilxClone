import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Request";

const Home = () => {
  return (
    <>
      <Main />
      <Row id="0" title="Up Coming" fetchURL={requests.requestUpComing} />
      <Row id="1" title="Popular" fetchURL={requests.requestPopular} />
      <Row id="2" title="Trending" fetchURL={requests.requestTreading} />
      <Row id="3" title="Top rated" fetchURL={requests.requestTopRated} />
    </>
  );
};

export default Home;
