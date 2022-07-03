import "./MenuBar.css";
import {scrollToTop} from "./utils.js"

function MenuBar() {
  
  
  const logo = <button href="#" onClick={scrollToTop()} id="logo"><div className="menu-text logo prevent-select">
        PE
        <br></br>
        AK
      </div>
      </button>
  return <div className="sticky">
      {logo}
      <div className="nav-bar">
        <a href="#about">About</a>
        <a href="#project">Project</a>
        <a href="#contact">Contact</a>
      </div>
  </div>;
}

export default MenuBar;
