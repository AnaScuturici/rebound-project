import Profile from "./components/Profile";
import ContactForm from "./components/ContactForm";
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function App() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="App">
     <Profile />
     <Calendar onChange={onChange} value={value}/>
     <ContactForm />
    </div>
  );
}

export default App;
