import React from 'react';
import { useState, useEffect } from 'react';
import AddCourse from '../components/AddCourse';
import SearchCourse from '../components/SearchCourse';
import CourseItem from './CourseItem';

function Course() {
  const [course, setCourse] = useState([]);

  const loadCourse = function () {
    fetch(`https://gravityfalluniversity.herokuapp.com/course`)
      .then(res => res.json())
      .then(data => setCourse(data));
  };

  const handleAddCourse = course => {
    //read up about concat() in JS
    //concar merge 2 array together and return a new array contain both array
    setCourse(prevState => prevState.concat(course));
  };

  const handleDelete = id => {
    // call delete api
    // if the request is successful, set course array that doesn't contain deleted course
    setCourse(prevState => prevState.filter(course => course.course_id !== id));
  };

  const handleEdit = newCourse => {
    // if the request is successful, replace the old course in array with new course.
    setCourse(prevState => {
      const oldCourse = [...prevState];

      const courseIdx = oldCourse.findIndex(
        course => course.course_id === newCourse.course_id
      );

      oldCourse[courseIdx] = newCourse;

      return oldCourse;
    });
  };

  useEffect(() => loadCourse(), []);

  return (
    <div>
      <h2>Course Page</h2>
      <table>
        <thead>
          <tr>
            <th>Course id</th>
            <th>Course Name</th>
            <th>Course Credit</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {course.map(course => (
            <CourseItem
              key={course.course_id}
              course={course}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))}
        </tbody>
      </table>

      <div className='block-container'>
        <AddCourse handleAddCourse={handleAddCourse} />
        <SearchCourse />
      </div>
    </div>
  );
}

export default Course;
