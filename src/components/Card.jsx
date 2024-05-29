import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      FREE
      <h1 className="header">₹0/month</h1>
      <hr></hr>
      <div className = "features">
      {props.data.features.map((feature, index) => (
        <p key={index}>
          <li>{feature}</li>
        </p>
      ))}
      <button className="button">BUTTON</button>
    </div>
    </div>
  );
};

export default Card;
