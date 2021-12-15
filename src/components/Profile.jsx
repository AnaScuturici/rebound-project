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
      <h1>Julia Ivan</h1>
      <p className="description">Julia is a licensed Family Therapist in London. She has been working in the mental health field for over ten years, and has experience working with adults, children and families who have experienced trauma.</p>
      <h3>Specialized in:</h3>
      <p>Family Therapy, Counseling and Psychotherapy</p>
      <button className="book-btn" onClick={handleClick}>Book a session with me!</button>
      {view && (
        <>
        <p>Pick a date and send me a message about what you would like to discuss with me. {"\n"}
        I will get back to you within a day to confirm our appointment!
      </p>
        <Calendar onChange={setDate} value={date} />
        <ContactForm date={date.toDateString()} />
      </>
      )}
    </div>
  )
}

export default Profile;
