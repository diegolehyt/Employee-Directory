import React from "react";
import "./style.css";

// const styles = {
//   iconS: {
//     fontSize: '24px'
//   }
// }

function FriendCard(props) {
  return (
    <tr>
      <td><img className='avatar img-thumbnail' alt={props.name} src={props.image} /></td>
      <td>{props.name}</td>
      <td>{props.position}</td>
      <td>{props.shirtNumber}</td>
      <td>{props.country}</td>
      <td>{props.age}</td>
    </tr>
  );
}

export default FriendCard;
