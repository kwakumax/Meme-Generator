import React from "react";

export default function Footer(){
  return(
    <div className="footer">
      <button className="twitter-button">
        <img src="./images/twitter.png"  className="twitter-image" style={{width:25,height:25,opacity:0.3}}/>
      </button>

      <button className="facebook-button">
        <img src="./images/facebook.png"  className="facebook-image" style={{width:25,height:25,opacity:0.3}}/>
      </button>

      <button className="instagram-button">
        <img src="./images/instagram.png"  className="instagram-image" style={{width:25,height:25,opacity:0.3}}/>
      </button>

      <button className="github-button">
        <img src="./images/github.png"  className="github-image" style={{width:25,height:25,opacity:0.3}}/>
      </button>
    </div>

    
  )


}