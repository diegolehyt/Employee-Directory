import React from "react";
import "./style.css";

const styles = {
  buttonS: {
    marginLeft: '20px',
    marginTop: '0px',
    fontWeight: 'bold'
  },
  searchS: {
    color: 'gold',
    fontWeight: 'bold',
    fontSize: '20px'
  },
  formS: {
    marginLeft: '80px'
  }

}
// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  // console.log(props)
  return (
    <form className="search form-inline row" style={styles.formS}>
      <div className="form-group col-12">
        <label htmlFor="employee" className='col-4' style={styles.searchS}>Search By Player Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="employee"
          list="employees"
          type="text"
          className="form-control col-4"
          placeholder="ex. Arturo Vidal or Arturo or Vidal"
          id="employee"
        />
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-outline-warning col-2" style={styles.buttonS}>
          Search 
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
