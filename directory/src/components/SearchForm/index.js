import React from "react";
import "./style.css";

const styles = {
  buttonS: {
    marginLeft: '20px'
  }
}
// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  // console.log(props)
  return (
    <form className="search form-inline row">
      <div className="form-group col-12">
        <label htmlFor="employee" className='col-3'>Employee Name: </label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="employee"
          list="employees"
          type="text"
          className="form-control col-4"
          placeholder="Search by Employee name"
          id="employee"
        />
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success col-2" style={styles.buttonS}>
          Search 
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
