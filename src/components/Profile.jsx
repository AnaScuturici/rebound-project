import photo from "./profile-pic.jpeg";

function Profile() {
    return (
      <div className="home-page">
       <header>
       <img alt="profile-pic" src={photo} height={"100px"} width={"100x"}></img>
       <h1>Welcome!</h1>
       <p>About me</p>
       <button>Book a session with me!</button>
       </header>
      </div>
    );
  }
  
  export default Profile;
  