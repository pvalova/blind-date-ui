import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/MysteryPage.css';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const bookThemes = [
    {
      title: "Rainy Afternoon Escape",
      description: "A book that feels like warm tea during a thunderstorm.",
      icon: "/mysteryElement.png",
    },
    {
      title: "Break My Heart, Please",
      description: "A love story that will wreck you in the best way.",
      icon: "/mysteryElement.png",
    },
    {
      title: "Secrets in the Attic and Other Stories",
      description: "A story full of hidden truths, dusty letters, and late-night discoveries.",
      icon: "/mysteryElement.png",
    },
    // Add more later
  ];
  
export default function MysteryPage() {
  return (
    <>
      <Navbar />
      <div className="mystery-page">
        <h1 className="mystery-heading">
          Pick a book that fits your current mood
        </h1>

        <div className="searchbar-wrapper">
          <input
            className="searchbar"
            type="text"
            placeholder="Hinted search text"
          />
          <Link to="/mystery" className="search-icon">
            <FiSearch size={24} />
          </Link>

         
        </div>
        <div className="carousel-wrapper">
  <button className="arrow left">←</button>

  <div className="carousel">
    {bookThemes.map((theme, index) => (
      <div className="card" key={index}>
        <h2>{theme.title}</h2>
        <p>{theme.description}</p>
        <img src={theme.icon} alt="theme icon" className="card-icon" />
        <button className="card-button">Get Mystery Book</button>
      </div>
    ))}
  </div>

  <button className="arrow right">→</button>
</div>

</div>
    </>
  );
}
