import React from "react";

const SearchDepartment = () => {
  return (
    <div className="block-2">
      <h4>Search Department</h4>
      <form>
        <input type="text" placeholder="Enter Department Id"></input>
        <input type="text" placeholder="Enter Employee Id"></input>
        <input type="text" placeholder="Enter Major Id"></input>
        <input type="text" placeholder="Enter Department Name"></input>
        <input type="number" placeholder="Enter Department Credit"></input>
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchDepartment;
