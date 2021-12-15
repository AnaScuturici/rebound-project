import Profile from "./components/Profile";
import React from 'react';
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="components">
        <Profile />
      </div>
    </div>
  );
}

export default App;
