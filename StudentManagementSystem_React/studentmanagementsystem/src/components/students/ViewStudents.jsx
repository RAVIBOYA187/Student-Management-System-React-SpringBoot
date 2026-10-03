import React from "react";

import {
  FaSearch,
  FaEdit,
  FaTrash,
  FaEye
} from "react-icons/fa";

const ViewStudents = () => {

  const students = [
    {
      id: 101,
      name: "Dhoni",
      email: "ravi@gmail.com",
      course: "Java Full Stack",
      batch: "JAVA-FS-01",
      status: "Active"
    },
    {
      id: 102,
      name: "Virat Kohli",
      email: "kiran@gmail.com",
      course: "React JS",
      batch: "REACT-02",
      status: "Active"
    },
    {
      id: 103,
      name: "Surya Vamsi",
      email: "sneha@gmail.com",
      course: "Spring Boot",
      batch: "JAVA-FS-01",
      status: "Inactive"
    },
    {
      id: 104,
      name: "Gukesh",
      email: "rahul@gmail.com",
      course: "Python Full Stack",
      batch: "PYTHON-03",
      status: "Active"
    }
  ];

  return (
    <div className="module-container">

      <div className="module-toolbar">

        <div className="search-container">
          <FaSearch />

          <input
            type="text"
            className="search-input"
            placeholder="Search Student..."
          />
        </div>

        <div className="filter-group">

          <select className="filter-select">
            <option>All Courses</option>
            <option>Java Full Stack</option>
            <option>React JS</option>
            <option>Python Full Stack</option>
          </select>

          <select className="filter-select">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>

        </div>

      </div>

      {/* Table */}

      <div className="table-card">

        <div className="table-card-header">
          <h2>Students List</h2>
        </div>

        <div className="table-wrapper">

          <table className="data-table">

            <thead>

              <tr>
                <th>ID</th>
                <th>Student Name</th>
                <th>Email</th>
                <th>Course</th>
                <th>Batch</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>

            </thead>

            <tbody>

              {students.map((student) => (

                <tr key={student.id}>

                  <td>{student.id}</td>

                  <td>{student.name}</td>

                  <td>{student.email}</td>

                  <td>{student.course}</td>

                  <td>{student.batch}</td>

                  <td>

                    <span
                      className={`badge ${
                        student.status === "Active"
                          ? "badge-active"
                          : "badge-inactive"
                      }`}
                    >
                      {student.status}
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

        {/* Pagination */}

        <div className="pagination">

          <button className="page-btn active-page">
            1
          </button>

          <button className="page-btn">
            2
          </button>

          <button className="page-btn">
            3
          </button>

        </div>

      </div>

    </div>
  );
};

export default ViewStudents;