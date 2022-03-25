import { useState } from "react";
import "./app.scss";
import Router from "./router";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router></Router>
    </>
  );
}

export default App;
