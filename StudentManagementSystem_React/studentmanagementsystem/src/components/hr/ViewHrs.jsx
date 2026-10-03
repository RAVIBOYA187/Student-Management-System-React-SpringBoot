import React from "react";
import {
  FaSearch,
  FaEdit,
  FaTrash,
  FaEye
} from "react-icons/fa";

const ViewHrs = () => {

  const hrs = [
    {
      id: 1,
      name: "Harmanpret Kaur",
      company: "TCS",
      email: "sneha@tcs.com",
      location: "Hyderabad",
      status: "Active"
    },
    {
      id: 2,
      name: "Smrithi Mandhana",
      company: "Infosys",
      email: "vikram@infosys.com",
      location: "Bangalore",
      status: "Active"
    }
  ];

  return (
    <div className="module-container">

      <div className="module-toolbar">

        <div className="search-container">
          <FaSearch />
          <input
            className="search-input"
            placeholder="Search HR..."
          />
        </div>

        <div className="filter-group">
          <select className="filter-select">
            <option hidden>All Locations</option>
            <option>Hyderabad</option>
            <option>Bangalore</option>
          </select>

          <select className="filter-select">
            <option hidden>All Status</option>
            <option>Active</option>
            <option>In-Active</option>
          </select>
        </div>

      </div>

      <div className="table-card">

        <div className="table-wrapper">

          <table className="data-table">

            <thead>
              <tr>
                <th>ID</th>
                <th>HR Name</th>
                <th>Company</th>
                <th>Email</th>
                <th>Location</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {hrs.map((hr) => (

                <tr key={hr.id}>

                  <td>{hr.id}</td>
                  <td>{hr.name}</td>
                  <td>{hr.company}</td>
                  <td>{hr.email}</td>
                  <td>{hr.location}</td>

                  <td>
                    <span className="badge badge-active">
                      {hr.status}
                    </span>
                  </td>

                  <td>
                    <div className="row-actions">

                      <button className="icon-btn view-icon">
                        <FaEye />
                      </button>

                      <button className="icon-btn edit-icon">
                        <FaEdit />
                      </button>

                      <button className="icon-btn delete-icon">
                        <FaTrash />
                      </button>

                    </div>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default ViewHrs;