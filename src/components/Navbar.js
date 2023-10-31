import "../css/navbar.css";
import About from "./About";

function Navbar() {
  return (
    <div className="Navbar">
      <h1 className="title">MAYO PIZZA</h1>
      <div className="menus">
        <p>About</p>
        <p>Ingredients</p>
        <p>Contact</p>
      </div>
    </div>
  );
}

export default Navbar;
