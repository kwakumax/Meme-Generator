import React from "react";


export default function Main(){
  return(
    <div className="main">
      <div className="main-text">
        <h2>Amankwah Amoako</h2> 
        <h3>FrontEnd Developer</h3>
        <h4>amoako.website</h4>
      </div>
      <div className="link-button">
        <button className="email-button"><img src="./images/gmail.png"  className="email-image"/><span className="email-text">Email</span></button>
        <button className="linkedin-button"><img className="email-image" src="./images/linkedin.png"/>LinkedIn</button>
      </div>

      <div className="about-section">
        <h2>About</h2>
          <p>
            I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and I am always looking for new things to learn.
          </p>
      </div>

      <div className="interest-section">
        <h2>Interest</h2>
        <p>
          Food enthusiats. Music lover. Christianity. Reader. Entrepreneur. Gym rat.
        </p>
      </div>

    </div>
  )
}