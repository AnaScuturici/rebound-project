function ContactForm() {
    return (
      <div className="contact-form">
       <label for="name">Name</label>
       <input type="text" name="name" tabIndex={"1"}/>
       <label for="name">Email</label>
       <input type="email" name="email" tabIndex={"2"}/>
       <label for="name">Message</label>
       <input type="text" name="message" tabIndex={"3"}/>
       <button type="submit">Send</button>
      </div>
    );
  }
  
  export default ContactForm;
  