


import React, { useState } from "react";
import "./dashboard.css"

import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUserTie,
  FaBook,
  FaBriefcase,
  FaClipboardCheck,
  FaBell,
  FaMoon,
  FaSun,
  FaUserCircle,
  FaPlusCircle,
  FaChartLine,
} from "react-icons/fa";

const Dashboard = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dashboard-page dark-mode" : "dashboard-page"}>
      {/* Header */}

      <div className="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome back, Admin 👋</p>
        </div>

        <div className="dashboard-actions">

          {/* Dark Mode */}

          <button
            className="header-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Notifications */}

          <div className="dropdown-wrapper">

            <button
              className="header-btn"
              onClick={() =>
                setShowNotifications(!showNotifications)
              }
            >
              <FaBell />
            </button>

            {showNotifications && (
              <div className="dropdown-menu">

                <h4>Notifications</h4>

                <div className="dropdown-item">
                  New Student Registered
                </div>

                <div className="dropdown-item">
                  JAVA-FS-20 Batch Created
                </div>

                <div className="dropdown-item">
                  TCS HR Added
                </div>

              </div>
            )}
          </div>

          {/* Profile */}

          <div className="dropdown-wrapper">

            <button
              className="header-btn"
              onClick={() =>
                setShowProfile(!showProfile)
              }
            >
              <FaUserCircle />
            </button>

            {showProfile && (
              <div className="dropdown-menu">

                <h4>Admin</h4>

                <div className="dropdown-item">
                  Profile
                </div>

                <div className="dropdown-item">
                  Settings
                </div>

                <div className="dropdown-item">
                  Change Password
                </div>

                <div className="dropdown-item">
                  Logout
                </div>

              </div>
            )}

          </div>

        </div>
      </div>

      {/* Statistics */}

      <div className="stats-grid">

        <div className="stat-card">
          <FaUserGraduate className="stat-icon" />
          <h3>Total Students</h3>
          <p>250</p>
        </div>

        <div className="stat-card">
          <FaClipboardCheck className="stat-icon" />
          <h3>Active Students</h3>
          <p>220</p>
        </div>

        <div className="stat-card">
          <FaChalkboardTeacher className="stat-icon" />
          <h3>Trainers</h3>
          <p>15</p>
        </div>

        <div className="stat-card">
          <FaUserTie className="stat-icon" />
          <h3>HRs</h3>
          <p>8</p>
        </div>

        <div className="stat-card">
          <FaBook className="stat-icon" />
          <h3>Batches</h3>
          <p>12</p>
        </div>

        <div className="stat-card">
          <FaBriefcase className="stat-icon" />
          <h3>Placement Rate</h3>
          <p>67%</p>
        </div>

      </div>

      {/* Quick Actions */}

      <div className="dashboard-card">

        <h2>Quick Actions</h2>

        <div className="quick-actions">

          <button>
            <FaPlusCircle />
            Add Student
          </button>

          <button>
            <FaPlusCircle />
            Add Trainer
          </button>

          <button>
            <FaPlusCircle />
            Add HR
          </button>

          <button>
            <FaPlusCircle />
            Create Batch
          </button>


        </div>

      </div>

      {/* Analytics */}

      <div className="analytics-grid">

        <div className="dashboard-card">

          <h2>
            <FaChartLine />
            Placement Analytics
          </h2>

          <div className="analytics-stats">

            <div>
              <h4>Eligible</h4>
              <p>180</p>
            </div>

            <div>
              <h4>Placed</h4>
              <p>120</p>
            </div>

            <div>
              <h4>Rate</h4>
              <p>67%</p>
            </div>

          </div>

        </div>

        <div className="dashboard-card">

          <h2>
            <FaChartLine />
            Attendance Summary
          </h2>

          <div className="analytics-stats">

            <div>
              <h4>Present</h4>
              <p>210</p>
            </div>

            <div>
              <h4>Absent</h4>
              <p>40</p>
            </div>

            <div>
              <h4>Attendance</h4>
              <p>84%</p>
            </div>

          </div>

        </div>

      </div>

      {/* Charts */}

      <div className="dashboard-card">

        <h2>Student Growth Analytics</h2>

        <div className="chart-placeholder">
          Chart.js / Recharts Graph Here
        </div>

      </div>

      <div className="dashboard-card">

        <h2>Attendance Trends</h2>

        <div className="chart-placeholder">
          Weekly Attendance Graph Here
        </div>

      </div>

      {/* Course Distribution */}

      <div className="dashboard-card">

        <h2>Course Wise Student Count</h2>

        <table className="dashboard-table">

          <thead>
            <tr>
              <th>Course</th>
              <th>Students</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Java Full Stack</td>
              <td>120</td>
            </tr>

            <tr>
              <td>React JS</td>
              <td>60</td>
            </tr>

            <tr>
              <td>Python Full Stack</td>
              <td>70</td>
            </tr>

          </tbody>

        </table>

      </div>

      {/* Top Students + Companies */}

      <div className="analytics-grid">

        <div className="dashboard-card">

          <h2>Top Performing Students</h2>

          <table className="dashboard-table">

            <thead>
              <tr>
                <th>Name</th>
                <th>Course</th>
                <th>Score</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Rohit Sharma</td>
                <td>Java Full Stack</td>
                <td>98%</td>
              </tr>

              <tr>
                <td>Virat Kohli</td>
                <td>React JS</td>
                <td>95%</td>
              </tr>

            </tbody>

          </table>

        </div>

        <div className="dashboard-card">

          <h2>Hiring Companies</h2>

          <table className="dashboard-table">

            <thead>
              <tr>
                <th>Company</th>
                <th>Openings</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>TCS</td>
                <td>25</td>
              </tr>

              <tr>
                <td>Infosys</td>
                <td>15</td>
              </tr>

              <tr>
                <td>Accenture</td>
                <td>10</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

      {/* Upcoming Batches */}

      <div className="dashboard-card">

        <h2>Upcoming Batches</h2>

        <table className="dashboard-table">

          <thead>
            <tr>
              <th>Batch</th>
              <th>Course</th>
              <th>Start Date</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>JAVA-FS-20</td>
              <td>Java Full Stack</td>
              <td>15 Jun 2026</td>
            </tr>

            <tr>
              <td>MERN-15</td>
              <td>MERN Stack</td>
              <td>18 Jun 2026</td>
            </tr>

          </tbody>

        </table>

      </div>

      {/* Recent Activities */}

      <div className="dashboard-card">

        <h2>Recent Activities</h2>

        <table className="dashboard-table">

          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Activity</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>101</td>
              <td>SKY</td>
              <td>Student Added</td>
              <td>Today</td>
            </tr>

            <tr>
              <td>102</td>
              <td>Ishan Kishan</td>
              <td>Trainer Updated</td>
              <td>Today</td>
            </tr>

            <tr>
              <td>103</td>
              <td>Jemimah</td>
              <td>HR Added</td>
              <td>Yesterday</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Dashboard;