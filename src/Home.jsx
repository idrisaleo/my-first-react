import React from "react";
import "./Home.css";
import searchImg from "./../src/assets/myPics/search.png";
import mapImg from "./../src/assets/myPics/map-pin.png";
import chevImg from "./../src/assets/myPics/chevron-down.png";
import grpImg from "./../src/assets/myPics/group.png";
import idakImg from "./../src/assets/myPics/logo 1.png";


function Home() {

  return (
    <>
      <div className="container">
        <div className="idak">
          <img src={idakImg} alt="" />
        </div>

        <div className="nav">
          <span>Home</span>
          <span>Rentals</span>
          <span>Categories</span>
          <span>About Us</span>
          <span>Contact</span>
          <span>Blog</span>
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
        <span className="mirror">
          <img src={searchImg} alt="" />
          <input
            className="more"
            type="text"
            placeholder="Search for cars, houses, and more.."
          />
        </span>

        <div className="locator">
          <div className="all-but-group">
            <div className="location__section">
              <img src={mapImg} alt="" />
            </div>

            <div className="sl">
              <input type="text" placeholder="Select Location" />
            </div>

            <div className="chev">
              <img src={chevImg} alt="" />
            </div>
          </div>

          <div className="group">
            <img src={grpImg} alt="" />
          </div>
        </div>
      </div>

      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');
        </style>
      </style>
    </>
  );
}

export default Home;
