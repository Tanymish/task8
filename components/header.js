import React, { useState } from 'react';
import '../styles/globals.css' ;

const Header = () => {
  return (
    <header>
      <a href="#" className="logo">Taanish</a>
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#feat">Features</a>
        <a href="#revi">Reviews</a>
        <a href="#update">Updates</a>
        <a href="#inbox">Inbox</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="buttn">
        <a href="#" className="h-btn">Let's Start</a>
      </div>
      <input type="checkbox" id="toggler" />
      <label htmlFor="toggler" className="fas fa-bars"></label>
    </header>
  );
}

export default Header;
