import "./Usercard.css"

function Usercard(props) {
  return (
    <div className="usercard">
        <img src={props.avatar} alt="avatar" /><br />
        <span className="name">{props.name}</span>
    </div>
  );
}

export default Usercard;