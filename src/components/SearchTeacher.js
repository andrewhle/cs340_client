import React from "react";

function SearchTeacher() {
  return (
    <div className="block-2">
      <h4>Search Teacher</h4>
      <form>
        <input type="number" placeholder="Enter Teacher Id"></input>
        <input type="number" placeholder="Enter Department Id"></input>
        <input type="text" placeholder="Enter First Name"></input>
        <input type="text" placeholder="Enter Last Name"></input>
        <input type="text" placeholder="Enter Date Of Birth"></input>
        <input type="text" placeholder="Enter Phone Number"></input>
        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchTeacher;
