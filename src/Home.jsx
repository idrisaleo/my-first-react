import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="container">
        <div className="idak">
          <img src="./src/assets/myPics/logo 1.png" alt="idak logo" />
        </div>

        <div className="nav">
          <p>Home</p>
          <p>Rentals</p>
          <p>Categories</p>
          <p>About Us</p>
          <p>Contact</p>
          <p>Blog</p>
        </div>

        <div className="signin-posting">
          <div className="signin">
            <img
              src="./src/assets/myPics/user.png"
              alt=""
              className="sign-icon"
            />
            <p className="si">Sign in</p>
          </div>

          <div className="posting">
            <p>
              <span className="plus">+</span>Post Listing
            </p>
          </div>
        </div>
      </div>

      <div className="fam">
        <div className="dis-container">
          <div className="dis1">
            <h1>
              Discover Your <span className="rental">Perfect Rental</span>
            </h1>
          </div>

          <div className="dis2">
            <h3>Rent Cars, Houses, and Items in Just a Few Clicks</h3>
          </div>
        </div>

        <div className="places">
          <p className="pl">Places</p>
          <p className="ri">Rides</p>
          <p className="th">Things</p>
        </div>
      </div>

      <div className="search">
        <div className="mirror">
          <img
            className="glass"
            src="./src/assets/myPics/search.png"
            alt="search icon"
          />
          <input className="more" type="text" placeholder="Search for Cars, Houses, and more.." />
        
        </div>

        <div className="locator">
          <img className="map" src="./src/assets/myPics/map-pin.png" alt="" />
          <input className="sl" type="text" placeholder="Select Location" />
        </div>

        <div>
          <img
            className="chevron"
            src="./src/assets/myPics/chevron-down.png"
            alt=""
          />
        </div>

        <div className="group">
          <img src="./src/assets/myPics/group.png" alt="group png" width="30" />
        </div>
      </div>

      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');
      </style>
    </>
  );
}

export default Home;
