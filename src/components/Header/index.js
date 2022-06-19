import { searchIcon } from "../../assets";
import "./style.css"
const Header = (props) => {
  return (
    <header className="header flex justify-sb">
      <div className="logo">
        <img src="music.png" alt="W" />
      </div>
      <div>
        <img src={searchIcon} alt="Search" />
      </div>
    </header>
  );
};

export default Header;