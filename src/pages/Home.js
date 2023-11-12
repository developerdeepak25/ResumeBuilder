import React from "react";
import "./home.scss";
import Editor from "../components/Editor";
import Preview from "../preview/Preview";

const Home = () => {
  return (
    <div className="app-wrapper">
      <div className="app-container">
        <div className="app-editor">
          <Editor/>
        </div>
        <div className="page-area">
          <Preview/>
        </div>
      </div>
    </div>
  );
};

export default Home;
