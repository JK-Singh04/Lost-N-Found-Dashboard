import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo3.png'; // Import your logo image
import backgroundImage from './bgimage.jpg'; // Import your background image

function LandingPage() {
  return (
    <div className="landing-page bg-cover bg-center min-h-screen flex flex-col justify-between" style={{backgroundImage: `url(${backgroundImage})`}}>
      <section className="hero-section text-center pt-20 pb-15">
        <div className="hero-content">
          <h3 className="text-6xl font-bold text-white ">Welcome to the</h3>
          <h3 className="text-6xl font-bold text-amber-500 ">Lost N Found Store</h3>
          <br/>
          <p className="text-xl font-semibold text-white">Report lost items or found items,</p>
          <p className="text-xl font-semibold text-white">find lost items, and connect with others.</p>

        </div>
      </section>
      <section className="login-signup-section text-center py-10">
        <div className="login-signup-content">
          <h3 className="text-3xl text-white font-bold mb-6">Getting Started</h3>
          <div className="buttons">
            <Link to="/sign-in" className="login-btn  bg-green-700 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-opacity-80">Login</Link>
            <Link to="/sign-up" className="signup-btn bg-blue-700 text-white py-2 px-6 rounded-full text-lg font-semibold ml-4 hover:bg-opacity-80">Sign Up</Link>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default LandingPage;
