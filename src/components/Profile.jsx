import photo from "./profile-pic.jpeg";
import "./Profile.css";

function Profile() {
    return (
      <div className="profile-page">
       <header>
       <img className="profile-pic" alt="profile-pic" src={photo} ></img>
       <h1>Welcome!</h1>
       <p>About me</p>
       <button className="book-btn">Book a session with me!</button>
       </header>
      </div>
    );
  }
  
  export default Profile;
  