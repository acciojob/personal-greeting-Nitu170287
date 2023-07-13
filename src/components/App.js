import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [name, setName] = useState("");

  

  return (
    <div>
      {/* Do not remove the main div */}
      <label>Enter your name:</label>
      <br />
      <input type="text" onChange={(e)=>setName("Hello " + e.target.value)}></input>

      <p>{name}</p>
    </div>
  );
};

export default App;
