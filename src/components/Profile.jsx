import photo from "./profile-pic.jpeg";
import "./Profile.css";
import ContactForm from "./ContactForm";
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";
import React, { useState } from 'react';

function Profile() {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState(false);

  const handleClick = () => {
    setView(true);
  };

  return (
    <div className="profile-page">
      <img className="profile-pic" alt="profile-pic" src={photo} ></img>
      <h1>Welcome!</h1>
      <p>About me</p>
      <button className="book-btn" onClick={handleClick}>Book a session with me!</button>
      {view && (
        <>
        <Calendar onChange={setDate} value={date} />
        <ContactForm date={date.toDateString()} />
      </>
      )}
    </div>
  )
}

export default Profile;
