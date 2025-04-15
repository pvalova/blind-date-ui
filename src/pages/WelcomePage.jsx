import React from "react";
import "./WelcomePage.css";

export default function WelcomePage() {
  return (
    <div className="welcome-container bg-books">
      <div className="content">
        <img src="/logoheart.png" alt="logo" className="logo" />
        <h1 className="title">Blind date with <span className="accent">a book</span></h1>
        <h2 className="subtitle">Create an account</h2>

        <button className="google-btn">Sign up with Google</button>
        <p className="or">OR</p>

        <form className="signup-form">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="submit-btn">Create</button>
        </form>

        <p className="login-prompt">Already have an account? <a href="/login">Log in</a></p>
      </div>
    </div>
  );
}
