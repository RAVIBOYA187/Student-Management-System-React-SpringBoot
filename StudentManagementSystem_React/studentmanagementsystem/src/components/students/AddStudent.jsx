import React from "react";
// import "../../styles/form.css";

const AddStudent = () => {
  return (
    <div className="form-card">

      <h2>Add Student</h2>

      <form className="custom-form">

        <div className="input-group">
          <label>
            Student Name
          </label>

          <input
            type="text"
            placeholder="Enter Name"
          />
        </div>

        <div className="input-group">
          <label>Email</label>

          <input
            type="email"
            placeholder="Enter Email"
          />
        </div>

        <div className="input-group">
          <label>Phone Number</label>

          <input
            type="text"
            placeholder="Enter Phone"
          />
        </div>

        <div className="input-group">
          <label>Course</label>

          <select>
            <option>Java Full Stack</option>
            <option>React JS</option>
            <option>Python</option>
          </select>
        </div>

        <div className="input-group full-width">
          <label>Address</label>

          <textarea
            placeholder="Enter Address"
          />
        </div>

        <div className="form-actions">

          <button
            type="button"
            className="cancel-btn"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="submit-btn"
          >
            Save Student
          </button>

        </div>

      </form>

    </div>
  );
};

export default AddStudent;