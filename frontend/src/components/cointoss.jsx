import React, { useState, useEffect } from "react";

const CoinToss = () => {
  const [result, setResult] = useState("heads");

  useEffect(() => {
    coinToss();
  }, []);

  function coinToss() {
    Math.random() < 0.5 ? setResult("heads") : setResult("tails");
  }

  const pics = {
    heads: "https://www.chards.co.uk/media/blog/46/1995onepoundrev500.png",
    tails: "https://www.chards.co.uk/media/blog/46/1997onepoundrev500.png",
  };

  return (
    <div className="coin-toss">
      <img
        src={pics[result]}
        alt={result + " img"}
        width="75"
        onClick={coinToss}
      />
      <div className="coin-toss-result-text">
        <strong>Coin Toss: (🧑/🐉)</strong>
        <span className="coin-toss-result">{result.toLocaleUpperCase()}</span>
      </div>
    </div>
  );
};

export default CoinToss;
