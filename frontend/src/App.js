import "./App.css";
import React, { useEffect, useState } from "react";
import "./components/randomimg";
import RandomImage from "./components/randomimg";
import CoinToss from "./components/cointoss";

function App() {
  const [viewCount, setViewCount] = useState({});

  const fetchViewCount = async () => {
    fetch(" http://192.168.0.22:5000/view-count")
      .then((res) => res.json())
      .then((data) => setViewCount(data));
  };

  const setViewPortHeight = () => {
    // stinky code that makes the app the same height as the view port including the top bar (for mobile)
    document.querySelector("body").style.maxHeight =
      window.innerHeight.toString() + "px";
  };

  useEffect(() => {
    fetchViewCount();
    setViewPortHeight();
  }, []);

  return (
    <div className="App">
      <div className="upper">
        <header>
          <h1>marknorman</h1>
          <hr />
          <br />
        </header>

        <main className="main-body">
          <p>
            This page has been viewed <b>{viewCount.count}</b> times! 🔥
          </p>
          <br />
          <RandomImage />
          <br />
          <CoinToss />
          <br />
          <p>Test paragraph (used for debugging):</p>
          <p>{window.innerHeight}</p>
        </main>
      </div>
      <footer>copyright &copy; mark norman 2021</footer>
    </div>
  );
}

export default App;
