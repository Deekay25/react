import React from "react";

import "./ExpensesFilter.css";

function  ExpensesFilter(props) {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value)
  }
  const filteredDate = () => {
    
  }
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label className="expenses-filter label">Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler} onFilter={filteredDate}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
