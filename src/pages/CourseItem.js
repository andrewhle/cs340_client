import React from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';

import EditForm from './EditForm';

const CourseItem = ({ course, handleDelete, handleEdit }) => {
  const [isShow, setShow] = React.useReducer(state => !state, false);
  return (
    <>
      <tr>
        <td>{course.course_id}</td>
        <td>{course.course_name}</td>
        <td>{course.course_credit}</td>
        <td>
          <MdEdit onClick={setShow} />
        </td>
        <td>
          <MdDelete onClick={() => handleDelete(course.course_id)} />
        </td>
      </tr>
      {isShow ? (
        <tr>
          <EditForm course={course} onClose={setShow} handleEdit={handleEdit} />
        </tr>
      ) : null}
    </>
  );
};

export default CourseItem;
