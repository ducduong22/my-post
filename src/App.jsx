import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "./App.css";
import Title from "./components/Title";
import Post from "./components/Post1";

function App() {
  return (
    <div id="posts-container">
      <Title />
      <Post />
    </div>
  );
}

export default App;
