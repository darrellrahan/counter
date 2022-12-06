import React, { useState } from "react";
import Button from "./Button";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>{count}</h1>
      <Button
        style={{ display: count > 0 ? "inline-block" : "none" }}
        onClick={() => count > 0 && setCount(count - 1)}
        text="-"
      />
      <Button onClick={() => setCount(count + 1)} text="+" />
    </div>
  );
};

export default App;
