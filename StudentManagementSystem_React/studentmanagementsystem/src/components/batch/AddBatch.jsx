import React from "react";

const AddBatch = () => {
  return (
    <div className="form-card">
      <h2>Create Batch</h2>

      <form className="custom-form">

        <div className="input-group">
          <label>Batch Name</label>
          <input type="text" placeholder="Java FS-2026" />
        </div>

        <div className="input-group">
          <label>Course</label>
          <select>
            <option>Java Full Stack</option>
            <option>MERN Stack</option>
            <option>Python Full Stack</option>
          </select>
        </div>

        <div className="input-group">
          <label>Trainer</label>
          <input type="text" placeholder="Assigned Trainer" />
        </div>

        <div className="input-group">
          <label>Maximum Strength</label>
          <input type="number" placeholder="30" />
        </div>

        <div className="input-group">
          <label>Start Date</label>
          <input type="date" />
        </div>

        <div className="input-group">
          <label>End Date</label>
          <input type="date" />
        </div>

        <div className="input-group full-width">
          <label>Description</label>
          <textarea placeholder="Batch Details"></textarea>
        </div>

        <div className="form-actions">
          <button className="cancel-btn">Cancel</button>
          <button className="submit-btn">Create Batch</button>
        </div>

      </form>
    </div>
  );
};

export default AddBatch;