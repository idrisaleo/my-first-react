import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="container">
        <div className="f1">
          <div className="idak">
            <img src="./src/assets/myPics/logo 1.png" alt="" />
          </div>

          <div>
            <p>
              Sri Lanka's first & largest platform designed to create an online
              marketplace exclusively for RENT
            </p>
          </div>

          <div className="icons">
            <img src="./src/assets/mypics/instagram.png" alt="" />
            <img src="./src/assets/mypics/x.png" alt="" />
            <img src="./src/assets/mypics/youtube.png" alt="" />
            <img src="./src/assets/mypics/facebook.png" alt="" />
            <img src="./src/assets/mypics/linkedin.png" alt="" />
          </div>
        </div>

        <div className="f2">
          <p className="navi">Navigation</p>
          <p className="rest">About Us</p>
          <p className="rest">Blog</p>
          <p className="rest">Terms of Use</p>
          <p className="rest">Privacy Policy</p>
        </div>

        <div className="f3">
          <p className="fl">Featured Locations</p>
          <p>Kandy</p>
          <p>Anuradhapura</p>
          <p>Badulla</p>
          <p>Colombo</p>
          <p>Kaluthara</p>
        </div>

        <div className="f4">
          <p className="help">Help</p>
          <p>FAQ</p>
          <p>Contact Us</p>
        </div>

        <div className="f5">
          <p className="sub">Subscribe to Our Newsletter</p>
          <p>Stay updated with the latest listings and rental tips.</p>
          <input type="email" placeholder="email address" />
          <button>Subscribe</button>
        </div>
      </div>
    </>
  );
}

export default Footer;
