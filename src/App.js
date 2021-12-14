import Profile from "./components/Profile";
import ContactForm from "./components/ContactForm";
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Navbar from "./components/Navbar";
import "react-calendar/dist/Calendar.css";

function App() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="App">
      <Navbar />
      <div className="components">
        <Profile />
        <Calendar onChange={setDate} value={date} />
        <ContactForm date={date.toDateString()} />
      </div>
    </div>
  );
}

export default App;
