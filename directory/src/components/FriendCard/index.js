import React from "react";
import "./style.css";

const styles = {
  iconS: {
    fontSize: '24px'
  }
}

function FriendCard(props) {
  return (
    <tr>
      <td><img className='avatar' alt={props.name} src={props.image} /></td>
      <td>{props.name}<i class='fas fa-chevron-circle-up' style={styles.iconS}></i></td>
      <td>{props.occupation}</td>
      <td>{props.location}</td>
    </tr>
    // <div className="card">
    //   <div className="img-container">
    //     <img alt={props.name} src={props.image} />
    //   </div>
    //   <div className="content">
    //     <ul>
    //       <li>
    //         <strong>Name:</strong> {props.name}
    //       </li>
    //       <li>
    //         <strong>Occupation:</strong> {props.occupation}
    //       </li>
    //       <li>
    //         <strong>Location:</strong> {props.location}
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
}

export default FriendCard;
