import React from "react";
import "./style.css";

const styles = {
  iconS: {
    fontSize: '20px',
    color: 'lightgreen'
  },
  iconD: {
    fontSize: '20px',
    color: 'coral'
  },
  headD: {
    color: 'gold'
  },
  imgD: {
    fontSize: '20px'
  },
  headS: {
    backgroundColor: 'rgba(26, 26, 131, 1)'
  }
}

function ListHead(props) {
  return (
    <tr style={styles.headS}>
      <th style={styles.headD}><i className='fas fa-futbol' style={styles.imgD}></i> Player</th>
      <th style={styles.headD}>Name <i className='fas fa-chevron-circle-up zoomOut' style={styles.iconS} onClick={() => props.sortByName()} href=''></i> <i className='fas fa-chevron-circle-down zoomIn' style={styles.iconD} onClick={() => props.sortByNameD()} href=''></i></th>
      <th style={styles.headD}>Position <i className='fas fa-chevron-circle-up zoomOut' style={styles.iconS} onClick={() => props.sortByPosition()} href=''></i> <i className='fas fa-chevron-circle-down zoomIn' style={styles.iconD} onClick={() => props.sortByPositionD()} href=''></i></th>
      <th style={styles.headD}>Shirt # <i className='fas fa-chevron-circle-up zoomOut' style={styles.iconS} onClick={() => props.sortByShirt()} href=''></i> <i className='fas fa-chevron-circle-down zoomIn' style={styles.iconD} onClick={() => props.sortByShirtD()} href=''></i></th>
      <th style={styles.headD}>Country <i className='fas fa-chevron-circle-up zoomOut' style={styles.iconS} onClick={() => props.sortByCountry()} href=''></i> <i className='fas fa-chevron-circle-down zoomIn' style={styles.iconD} onClick={() => props.sortByCountryD()} href=''></i></th>
      <th style={styles.headD}>Age <i className='fas fa-chevron-circle-up zoomOut' style={styles.iconS} onClick={() => props.sortByAge()} href=''></i> <i className='fas fa-chevron-circle-down zoomIn' style={styles.iconD} onClick={() => props.sortByAgeD()} href=''></i></th>
    </tr>
  );
}

export default ListHead;
