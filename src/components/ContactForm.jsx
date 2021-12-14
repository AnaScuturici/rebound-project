import "./ContactForm.css";

function ContactForm({date}) {
    return (
      <div className="contact-form">
        <p>We will meet on: {date}</p>
       <label htmlFor="name">Name</label>
       <input type="text" name="name" tabIndex={"1"}/>
       <br></br>
       <label htmlFor="name">Email</label>
       <input type="email" name="email" tabIndex={"2"}/>
       <br></br>
       <label htmlFor="name">Message</label>
       <textarea name="message" cols="40" rows="5" tabIndex={"3"}></textarea>
       <br></br>
       <button type="submit">Send</button>
      </div>
    );
  }
  
  export default ContactForm;
  