import React from "react";
import {
  FaSearch,
  FaEdit,
  FaTrash,
  FaEye
} from "react-icons/fa";

const ViewTrainers = () => {

  const trainers = [
    {
      id: 1,
      name: "Kiran Kumar",
      email: "kiran@gmail.com",
      specialization: "Java Full Stack",
      experience: "5 Years",
      status: "Active"
    },
    {
      id: 2,
      name: "Rajesh",
      email: "rajesh@gmail.com",
      specialization: "React JS",
      experience: "3 Years",
      status: "Inactive"
    }
  ];

  return (
    <div className="module-container">


      <div className="module-toolbar">

        <div className="search-container">
          <FaSearch />
          <input
            className="search-input"
            placeholder="Search Trainer..."
          />
        </div>

        <div className="filter-group">
          <select className="filter-select">
            <option>All Specializations</option>
            <option>Java</option>
            <option>React</option>
          </select>

          <select className="filter-select">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

      </div>

      <div className="table-card">

        <div className="table-wrapper">

          <table className="data-table">

            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Specialization</th>
                <th>Experience</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {trainers.map((trainer) => (

                <tr key={trainer.id}>

                  <td>{trainer.id}</td>
                  <td>{trainer.name}</td>
                  <td>{trainer.email}</td>
                  <td>{trainer.specialization}</td>
                  <td>{trainer.experience}</td>

                  <td>
                    <span
                      className={`badge ${
                        trainer.status === "Active"
                          ? "badge-active"
                          : "badge-inactive"
                      }`}
                    >
                      {trainer.status}
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

export default ViewTrainers;