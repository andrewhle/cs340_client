import React from "react";
import FilterCourse from "./FilterCourse";

function SearchCourse() {
  const [isShow, setShow] = React.useReducer(state => !state, false);
  //Whenever we set a new value in the form, it will be store in value
  const [value, setValue] = React.useState({
    course_id: "",
    course_name: "",
    course_credit: "",
  });

  const [data, setData] = React.useState([]);

  const handleClick = async event => {
    //call api
    event.preventDefault();
    const urlParams = new URLSearchParams(value);
    try {
      const response = await fetch(
        `https://gravityfalluniversity.herokuapp.com/course?${urlParams.toString()}`,
        {
          method: "GET",
        }
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error({
        Success: false,
        Error: `Failed to request from client`,
      });
    }
    setShow();
  };

  //Whenever there change detect from the form, React will load a new value
  function handleChange(event) {
    setValue(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }
  return (
    <div className="block-2">
      <h4>Search Course</h4>
      <form onSubmit={handleClick}>
        <input
          type="text"
          name="course_id"
          placeholder="Enter Course Id"
          onChange={handleChange}
          value={value.course_id}
        ></input>
        <input
          type="text"
          name="course_name"
          placeholder="Enter Course Name"
          onChange={handleChange}
          value={value.course_name}
        ></input>
        <input
          type="number"
          name="course_credit"
          placeholder="Enter Course Credit"
          onChange={handleChange}
          value={value.course_credit}
        ></input>
        <button type="submit">Search</button>
      </form>
      {isShow ? <FilterCourse data={data} onClose={setShow} /> : null}
    </div>
  );
}

export default SearchCourse;
