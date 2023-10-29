import "../css/pizza.css";
function Pizza(props) {
  return (
    <div className="menu">
      <img src={props.image} alt="" />
      <div className="description">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <br />
        <p>price: ${props.price}</p>
      </div>
    </div>
  );
}

export default Pizza;
