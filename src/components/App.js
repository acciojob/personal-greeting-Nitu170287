import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => setName(e.target.value);

  return (
    <div>
      {/* Do not remove the main div */}
      <label>Enter your name:</label>
      <br />
      <input type="text" onChange={handleChange}></input>
      <p>Hello {name}</p>
    </div>
  );
};

export default App;
