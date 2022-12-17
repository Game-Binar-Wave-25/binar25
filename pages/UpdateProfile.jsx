import React from "react";

const ProfileUpdate = () => {
    return (
        <div className="profile-update">
        <div className="container">
          <header>
            <h1 id="up-title">Edit Your Profile</h1>
            <p id="description">Please edit your profile here..</p>
          </header>
          <form>
          <div className="form-group">
            <label id="name-label" htmlFor="name">Name<input id="name" name="name" type="text" className="form-control" placeholder="Enter your name" />
            </label>
          </div>
          <div className="form-group">
            <label id="email-label">Email<input id="email" type="email" name="email" className="form-control" placeholder="Enter your email"  /></label>
          </div>
          <div className="form-group">
            <label id="number-label">Age (optional)<input id="number" name="age" type="number" className="form-control" min="10" max="99" placeholder="Age" /></label>
          </div>
          <div className="form-group">
            <label id="number-label">Phone Number <input id="number" name="age" type="number" className="form-control" min="10" max="99" placeholder="PhoneNumber" /></label>
          </div>
      
    <div className="form-group">
    <label>Your Bio<textarea id="comments" className="input-textarea" name="comment" placeholder="Describe you here..."></textarea>
    </label>
    </div>
    <div className="form-group">
    <input type="submit" id="submit" value="Submit" className="submit-button" />
    </div>
    </form>
    </div>
    </div>
    )
}

export default ProfileUpdate