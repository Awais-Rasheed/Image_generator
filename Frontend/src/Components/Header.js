import React from 'react';
import './Header.css';
import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {
  const { logout } = useAuth0();

  return (
    <div className='header'>

      <div className='title'>
        <h1 className='header-heading'>Video Generator</h1>
      </div>

      <div className="">
        <button className='logout-btn' onClick={() => logout({ logoutParams: { returnTo: "http://localhost:3000/" } })}>Log Out</button>
      </div>

    </div>
  );
}
