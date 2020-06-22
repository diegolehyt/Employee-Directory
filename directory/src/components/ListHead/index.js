import React from "react";
import "./style.css";

const styles = {
  iconS: {
    fontSize: '24px',
    color: 'lightgreen'
  }
}

function ListHead(props) {
  return (
    <tr>
      <th>Img</th>
      <th>Name <i className='fas fa-chevron-circle-up' style={styles.iconS} onClick={() => props.sortByName()} href=''></i></th>
      <th>Position <i className='fas fa-chevron-circle-up' style={styles.iconS} onClick={() => props.sortByPosition()} href=''></i></th>
      <th>Shirt # <i className='fas fa-chevron-circle-up' style={styles.iconS} onClick={() => props.sortByShirt()} href=''></i></th>
      <th>Country <i className='fas fa-chevron-circle-up' style={styles.iconS} onClick={() => props.sortByCountry()} href=''></i></th>
      <th>Age <i className='fas fa-chevron-circle-up' style={styles.iconS} onClick={() => props.sortByAge()} href=''></i></th>
    </tr>
  );
}

export default ListHead;
