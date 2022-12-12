import "./Header.css";
import HeaderImage from "./images.png";

function Header() {
  return (
    <div className="header">
      <div className="leftHeader">
        <img className="leftHeaderImage" src={HeaderImage} alt="" />
      </div>
      <div className="rightHeader">
        <div className="rightTop">
          <div className="rightTopLeft">
            <div className="email">
              <p>
              <span className="emailS">halstein@example.com</span></p>
            </div>
            <div className="phone">
              <p>
              <span className="phoneS">+99 4 11 72 1270</span>
              
              </p>
              
            </div>

            <div className="date">
              <p>
              <span>Mon-Fri 9am-5pm</span></p>
            </div>
          </div>
          <div className="rightTopRight">
            <select className="select">
              <option className="option">English</option>
              <option>Hindi</option>
              <option>Pnjabi</option>
            </select>
          </div>
        </div>
        <div className="rightBottom">
          <div className="rightBottomLeft">
            <p>HOME</p>
            <p>PAGES</p>
            <p>PORTFOLIO</p>
            <p>SHOP </p>

          </div>
          <div className="rightBottomRight"><p>INFO</p></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
