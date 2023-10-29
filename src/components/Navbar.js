import "../css/navbar.css";
function Navbar() {
  return (
    <div className="Navbar">
      <h1 className="title">MAYO PIZZA</h1>
      <div className="menus">
        <p onClick={console.log("Gi toplok")}>About</p>
        <p>Ingredients</p>
        <p>Contact</p>
      </div>
    </div>
  );
}

export default Navbar;
