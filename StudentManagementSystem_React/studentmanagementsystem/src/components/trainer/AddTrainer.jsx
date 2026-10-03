import React from "react";

const AddTrainer = () => {
  return (
    <div className="form-card">
      <h2>Add Trainer</h2>

      <form className="custom-form">

        <div className="input-group">
          <label>Trainer Name</label>
          <input type="text" placeholder="Trainer Name" />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="Email" />
        </div>

        <div className="input-group">
          <label>Phone</label>
          <input type="text" placeholder="Phone Number" />
        </div>

        <div className="input-group">
          <label>Specialization</label>
          <select>
            <option>Java</option>
            <option>Spring Boot</option>
            <option>React JS</option>
            <option>Python</option>
          </select>
        </div>

        <div className="input-group">
          <label>Experience</label>
          <input type="number" placeholder="Years of Experience" />
        </div>

        <div className="input-group">
          <label>Assigned Batch</label>
          <input type="text" placeholder="Batch Name" />
        </div>

        <div className="input-group full-width">
          <label>Skills</label>
          <textarea placeholder="Java, Spring Boot, React..."></textarea>
        </div>

        <div className="form-actions">
          <button className="cancel-btn">Cancel</button>
          <button className="submit-btn">Save Trainer</button>
        </div>

      </form>
    </div>
  );
};

export default AddTrainer;