import React from 'react'
import './LandingPage.css'
import { useAuth0 } from "@auth0/auth0-react";

export default function LandingPage() {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <div className='landing-page'>
        <div className="landing-navbar">
          <div className='video_logo'>
            <img src="/img/shape.svg" className="Landing_logo" alt="Logo" width="100px" height="100px" />
            <h1 className='gradient-text video-logo-heading'>Video Generator</h1>
          </div>
          <div className='nav-links'>
            <ul>
              <li className="nav-items"><button className='btn btn-primary' onClick={() => loginWithRedirect()}>Sign In</button></li>

            </ul>
          </div>
        </div>

        <div className="banner">
          <h1 className="banner-text">TURN YOUR <span className="gradient-text">IMAGINATIONS</span><br /> INTO VIDEOS</h1>
          <button className="start-btn" onClick={() => loginWithRedirect()}>Get Started</button>
        </div>
      </div>
    </>
  )
}
