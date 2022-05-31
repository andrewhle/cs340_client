import React from 'react';

const EditForm = ({ course, onClose, handleEdit }) => {
  const [value, setValue] = React.useState(course);

  const handleChange = event => {
    setValue(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = event => {
    // call edit api, if the request is successful, execute handleEdit

    handleEdit(value);
    onClose();

    event.preventDefault();
  };
  return (
    <>
      <div
        style={{
          inset: 0,
          width: '100%',
          height: '100%',
          position: 'fixed',
          background: 'black',
          opacity: '0.8',
          cursor: 'pointer',
        }}
        onClick={onClose}
      ></div>
      <div
        style={{
          minWidth: '500px',
          position: 'fixed',
          inset: 0,
          margin: 'auto',
          height: 'fit-content',
          width: 'fit-content',
          background: 'white',
        }}
      >
        <button
          style={{
            borderRadius: '50%',
            width: 40,
            height: 40,
            position: 'absolute',
            right: 20,
          }}
          onClick={onClose}
        >
          X
        </button>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <div style={{ display: 'flex', gap: 16 }}>
            <div>
              <label
                style={{
                  color: 'blueviolet',
                  marginBottom: '16px',
                  display: 'inline-block',
                }}
                htmlFor='course_id'
              >
                Course Id
              </label>
              <input
                style={{ border: '1px solid gray', borderRadius: 10 }}
                onChange={handleChange}
                name='course_id'
                type='text'
                value={value.course_id}
              />
            </div>
            <div>
              <label
                style={{
                  color: 'blueviolet',
                  marginBottom: '16px',
                  display: 'inline-block',
                }}
                htmlFor='course_name'
              >
                Course Name
              </label>
              <input
                style={{ border: '1px solid gray', borderRadius: 10 }}
                onChange={handleChange}
                name='course_name'
                type='text'
                value={value.course_name}
              />
            </div>
            <div>
              <label
                style={{
                  color: 'blueviolet',
                  marginBottom: '16px',
                  display: 'inline-block',
                }}
                htmlFor='course_credit'
              >
                Course Credit
              </label>
              <input
                style={{ border: '1px solid gray', borderRadius: 10 }}
                onChange={handleChange}
                name='course_credit'
                type='text'
                value={value.course_credit}
              />
            </div>
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  );
};

export default EditForm;
