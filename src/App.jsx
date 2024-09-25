import "./App.css";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  // Function to handle clicks on the samosa image
  const updateCount = () => setCount(count + multiplier);

  // Function to purchase the Double Stuffed upgrade
  const buyDoubleStuffed = () => {
    if (count >= 10) {
      setMultiplier(multiplier * 2);
      setCount(count - 10); // Deduct the cost of the upgrade
    }
  };

  // Function to purchase the Party Pack upgrade
  const buyPartyPack = () => {
    if (count >= 100) {
      setMultiplier(multiplier * 5);
      setCount(count - 100); // Deduct the cost of the upgrade
    }
  };

  // Function to purchase the Full Feast upgrade
  const buyFullFeast = () => {
    if (count >= 1000) {
      setMultiplier(multiplier * 10);
      setCount(count - 1000); // Deduct the cost of the upgrade
    }
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img
          src="https://static.toiimg.com/thumb/61050397.cms?width=1200&height=900"
          className="samosa"
          alt="Samosa"
          onClick={updateCount}
        />
        <div className="container">
          <div className="upgrade">
            <h3>Double Stuffed 👯‍♀️</h3>
            <p>2x per click</p>
            <button onClick={buyDoubleStuffed}>10 samosas</button>
          </div>
          <div className="upgrade">
            <h3>Party Pack 🎉</h3>
            <p>5x per click</p>
            <button onClick={buyPartyPack}>100 samosas</button>
          </div>
          <div className="upgrade">
            <h3>Full Feast 👩🏽‍🍳</h3>
            <p>10x per click</p>
            <button onClick={buyFullFeast}>1000 samosas</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
