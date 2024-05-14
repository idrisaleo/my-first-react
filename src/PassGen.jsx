import "./PassGen.css";
import { FaToggleOff } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import backImage from "../src/assets/myPics/flower.jpg";
import toggle from "../src/assets/myPics/toggleBG.png";

const PassGen = () => {
  return (
    <>
      <div className="backImg">
        <div className="container">
          <div className="passAD">
            <div>
              <h2>Password Generator</h2>
            </div>

            <div className="AD">
              <div className="advance">
                <p>Advance</p>
                <img className="toggle" src={toggle} alt="" />
              </div>

              <div className="dark">
                <p>Dark</p>
                <p>
                  <img className="toggle" src={toggle} alt="" />
                </p>
              </div>
            </div>
          </div>

          <div className="lenNum">
            <div className="length">
              <label htmlFor="length">Length</label>
              <input
                type="range"
                id="length"
                name="password-length"
                min="5"
                max="20"
              />

              
            </div>
            <div className="num-for-password">
                <input type="number" />
              </div>
          </div>

          <div className="numbers">
            <input type="checkbox" />
            <label htmlFor="">Numbers (0-9)</label>
          </div>

          <div className="small-letters">
            <input type="checkbox" />
            <label htmlFor="">Small Letters (a-z)</label>
          </div>

          <div className="capital-letters">
            <input type="checkbox" />
            <label htmlFor="">Capital Letters (A-Z)</label>
          </div>

          <div className="special-characters">
            <input type="checkbox" />
            <label htmlFor="">Special Characters ()</label>
          </div>

          <div>
            <h3>Generate</h3>
          </div>

          <div>
            <h3>Click on generate button</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default PassGen;
