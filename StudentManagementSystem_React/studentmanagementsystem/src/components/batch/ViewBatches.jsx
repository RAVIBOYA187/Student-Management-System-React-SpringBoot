import React from "react";
import {
  FaSearch,
  FaEdit,
  FaTrash,
  FaEye
} from "react-icons/fa";

const ViewBatches = () => {

  const batches = [
    {
      id: 101,
      batchName: "JAVA-FS-01",
      course: "Java Full Stack",
      trainer: "Kiran Kumar",
      strength: 35,
      status: "Running"
    },
    {
      id: 102,
      batchName: "REACT-02",
      course: "React JS",
      trainer: "Rajesh",
      strength: 28,
      status: "Completed"
    }
  ];

  return (
    <div className="module-container">

      <div className="module-toolbar">

        <div className="search-container">
          <FaSearch />
          <input
            className="search-input"
            placeholder="Search Batch..."
          />
        </div>

        <div className="filter-group">
          <select className="filter-select">
            <option hidden>All Specializations</option>
            <option>Java</option>
            <option>React</option>
          </select>

          <select className="filter-select">
            <option hidden>All Status</option>
            <option>Running</option>
            <option>Completed</option>
          </select>
        </div>

      </div>

      <div className="table-card">

        <div className="table-wrapper">

          <table className="data-table">

            <thead>
              <tr>
                <th>ID</th>
                <th>Batch Name</th>
                <th>Course</th>
                <th>Trainer</th>
                <th>Strength</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {batches.map((batch) => (

                <tr key={batch.id}>

                  <td>{batch.id}</td>
                  <td>{batch.batchName}</td>
                  <td>{batch.course}</td>
                  <td>{batch.trainer}</td>
                  <td>{batch.strength}</td>

                  <td>
                    <span
                      className={`badge ${
                        batch.status === "Running"
                          ? "badge-active"
                          : "badge-pending"
                      }`}
                    >
                      {batch.status}
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

export default ViewBatches;