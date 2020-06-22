import React from "react";
import "./style.css";

const styles = {
  iconS: {
    fontSize: '24px',
    color: 'lightgreen'
  },
  iconD: {
    fontSize: '24px',
    color: 'coral'
  }
}

function ListHead(props) {
  return (
    <tr>
      <th>Img</th>
      <th>Name <i className='fas fa-chevron-circle-up' style={styles.iconS} onClick={() => props.sortByName()} href=''></i> <i className='fas fa-chevron-circle-down' style={styles.iconD} onClick={() => props.sortByNameD()} href=''></i></th>
      <th>Position <i className='fas fa-chevron-circle-up' style={styles.iconS} onClick={() => props.sortByPosition()} href=''></i> <i className='fas fa-chevron-circle-down' style={styles.iconD} onClick={() => props.sortByPositionD()} href=''></i></th>
      <th>Shirt # <i className='fas fa-chevron-circle-up' style={styles.iconS} onClick={() => props.sortByShirt()} href=''></i> <i className='fas fa-chevron-circle-down' style={styles.iconD} onClick={() => props.sortByShirtD()} href=''></i></th>
      <th>Country <i className='fas fa-chevron-circle-up' style={styles.iconS} onClick={() => props.sortByCountry()} href=''></i> <i className='fas fa-chevron-circle-down' style={styles.iconD} onClick={() => props.sortByCountryD()} href=''></i></th>
      <th>Age <i className='fas fa-chevron-circle-up' style={styles.iconS} onClick={() => props.sortByAge()} href=''></i> <i className='fas fa-chevron-circle-down' style={styles.iconD} onClick={() => props.sortByAgeD()} href=''></i></th>
    </tr>
  );
}

export default ListHead;
