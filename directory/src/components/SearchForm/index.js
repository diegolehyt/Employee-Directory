import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  // console.log(props)
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="employee">Employee Name: </label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="employee"
          list="employees"
          type="text"
          className="form-control"
          placeholder="Search by Employee name"
          id="employee"
        />

        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search 
        </button>
      </div>
    </form>
  );
}

export default SearchForm;