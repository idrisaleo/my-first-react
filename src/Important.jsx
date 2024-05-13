import "./Important.css";

function Important() {
  return (
    <>
      <div className="important">
        <h2>Important Articles</h2>
        <img src="./src/assets/MyPics/browse.png" alt="" />
      </div>

      <div className="container">
        <div className="feb">
          <img src="./src/assets/myPics/eat.png" alt="" />
          <p className="feb4">February 4, 2023</p>
          <h3>Top Tips for Finding the Perfect Rental</h3>
          <p>
            Discover expert advice on how to find the ideal rents property that
            meets your needs and budget
          </p>
        </div>

        <div className="slant">
          <div className="journey">
            <div className="pic1">
              <img src="./src/assets/myPics/may7.png" alt="" />
            </div>

            <div className="item1">
              <p className="may7">May 7, 2023</p>
              <h3>Car Rental Hacks for a Smooth Journey</h3>
              <p>
                Learn insider tips for getting the best deals ad making the most
                of your rental car experience
              </p>
            </div>
          </div>

          <div className="guide">
            <div className="pic2">
              <img src="./src/assets/myPics/april25.png" alt="" />
            </div>

            <div className="item2">
              <p className="april25">April 25, 2023</p>
              <h3>Managing Your Rental Items: A Comprehensive Guide</h3>
              <p>
                Get valuable insights on how to effectively manage and maintain
                your rented items
              </p>
            </div>
          </div>

          <div className="renters">
            <div className="pic3">
              <img src="./src/assets/myPics/may7.png" alt="" />
            </div>

            <div className="item3">
              <p className="jan2">Jan 2, 2023</p>
              <h3>Navigating the Rental Market: Insights for New Renters </h3>
              <p>
                Explore key considerations and useful tips for individuals new
                to the rental market
              </p>
            </div>
          </div>

          <div className="owners">
            <div className="pic4">
              <img src="./src/assets/myPics/april7.png" alt="" />
            </div>

            <div className="item4">
              <p className="april7">April 7, 2023</p>
              <h3>Maximizing Returns: Strategies for Rental Property Owners</h3>
              <p>
                Learn strategies to optimize the return on investment for rental
                property
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Important;
