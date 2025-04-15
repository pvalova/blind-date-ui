import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/MysteryRevealPage.css';

export default function MysteryRevealPage() {
  return (
    <>
      <Navbar />
      <div className="reveal-page">
        <h1 className="reveal-title">Your mystery book is here!</h1>

        <div className="reveal-card">
          <img
            src="/icons/book-question.png"
            alt="Mystery book"
            className="reveal-icon"
          />
          <div className="book-info">
            <h2>Author Name</h2>
            <p>Book name</p>
          </div>

          <button className="reveal-button">I want to read this book!</button>
        </div>
      </div>
    </>
  );
}
