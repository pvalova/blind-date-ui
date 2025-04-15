import React from 'react';
import '../styles/Navbar.css';
import { Link } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';


export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/logoheart.png" alt="logo" className="nav-logo" />
        <span className="nav-title">
          Blind date with <span className="accent">a book</span>
        </span>
      </div>
      <div className="navbar-right">
        <a href="/mystery">Mystery</a>
        <a href="/swap">Swap</a>
        <a href="/books">Books</a>

        <Link to="/profile" className="profile-icon">
        <FaUserCircle size={28} />
        </Link>
      </div>
    </nav>
  );
}
