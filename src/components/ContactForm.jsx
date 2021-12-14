import "./ContactForm.css";
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';
import { ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function ContactForm({ date }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,  
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };

  const onSubmit = async (data) => {
    const { name, email, message } = data;

    try {
      const templateParams = {
        name,
        email, 
        message
      };

      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      reset();
      toastifySuccess();
    } catch(e) {
      console.log(e);
    }
  };

  const notify = () => {
    if(date !== new Date())
    toast(`See you ${date}!`)};

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="name"></label>
        <input
          type="text"
          name="name"
          {...register("name", {
            required: { value: true, message: "Please enter your name" },
            maxLength: {
              value: 30,
              message: "Please use 30 characters or less"
            }
          })}
          placeholder="Your name"
          tabIndex={"1"} />
        {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
        <br></br>
        <label htmlFor="email"></label>
        <input
          type="email"
          name="email"
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
          })}
          placeholder="Your email address"
          tabIndex={"2"} />
        {errors.email && (<span className='errorMessage'>Please enter a valid email address</span>
        )}
        <br></br>
        <label htmlFor="name"></label>
        <textarea
          name="message"
          cols="40"
          rows="7"
          {...register("message", {
            required: true
          })}
          placeholder="Let me know what's on your mind..."
          tabIndex={"3"}></textarea>
        {errors.message && <span className='errorMessage'>Please enter a message</span>}
        <br></br>
        <button type="submit" onClick={() => notify()}>Send</button>
      </form>
      <ToastContainer />
    </>
  );
}

export default ContactForm;
