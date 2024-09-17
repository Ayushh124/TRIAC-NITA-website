import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'; // Create this CSS file for styling
import ParticlesComponent from '../components/particle-background/config/ParticlesComponent';
import ParticlesBg from '../components/particle-background/ParticlesBg';

const NotFound = () => {
  return (
    <div className="notfound-section relative bg-transparent w-screen h-screen flex justify-center items-center z-[9999]">
        <div className=' z-[-1000] absolute top-0 left-0'>
            <ParticlesBg/>
        </div>
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <h2 className="notfound-subtitle">Page Not Found</h2>
        <p className="notfound-text">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="home-button">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
