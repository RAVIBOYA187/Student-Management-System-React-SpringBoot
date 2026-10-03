import React from "react";

const AddHr = () => {
  return (
    <div className="form-card">
      <h2>Add HR</h2>

      <form className="custom-form">

        <div className="input-group">
          <label>HR Name</label>
          <input type="text" placeholder="Enter HR Name" />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="Email" />
        </div>

        <div className="input-group">
          <label>Phone Number</label>
          <input type="text" placeholder="Phone Number" />
        </div>

        <div className="input-group">
          <label>Company Name</label>
          <input type="text" placeholder="Company Name" />
        </div>

        <div className="input-group">
          <label>Designation</label>
          <input type="text" placeholder="HR Manager" />
        </div>

        <div className="input-group">
          <label>Location</label>
          <input type="text" placeholder="Hyderabad" />
        </div>

        <div className="input-group full-width">
          <label>Company Address</label>
          <textarea placeholder="Enter Company Address"></textarea>
        </div>

        <div className="form-actions">
          <button className="cancel-btn">Cancel</button>
          <button className="submit-btn">Save HR</button>
        </div>

      </form>
    </div>
  );
};

export default AddHr;