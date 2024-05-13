import "./Location.css";

function Location() {
  return (
    <>
      <div className="featured-location">
        <h1>Featured Locations</h1>
        <img src="./src/assets/myPics/browse.png" alt="" />
      </div>

      <div className="imgs">
        <img class="kandy" src="./src/assets/myPics/kandy.png" alt="" />
        <img class="anu" src="./src/assets/myPics/anu.png" alt="" />
        <img class="badulla" src="./src/assets/myPics/badulla.png" alt="" />
        <img class="ga" src="./src/assets/myPics/ga.png" alt="" />
        <img class="jaffna" src="./src/assets/myPics/jaffna.png" alt="" />
        <img class="colombo" src="./src/assets/myPics/colombo.png" alt="" />
      </div>
    </>
  );
}

export default Location;
