import React, { useState } from "react";
import "./login.css";

import {
  FaUserGraduate,
  FaUserShield,
  FaChalkboardTeacher,
  FaUsers,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import axios from "axios";

const Login = () => {
  const [role, setRole] = useState("STUDENT");
  const [showPassword, setShowPassword] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const [student, setStudent] = useState({
    studentName: "",
    email: "",
    password: "",
    mobile: "",
    gender: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;

    setStudent({
      ...student,
      [name]: value,
    });
  }

  function handleLogin(e) {
    e.preventDefault();

    console.log("Login Clicked");
  }

  function handleRegister(e) {
    e.preventDefault();

    console.log(student);

    let passedData=JSON.stringify(student);
    console.log(passedData);
    

    axios.post("http://localhost:8080/savestudent",student)
      .then((val)=>{
        console.log(val.data)
        
      }).catch((err) => {
    console.log(err.response?.data);
  });

  }

  return (
    <div className="login-container">

      {/* LEFT PANEL */}

      {/* <div className="left-panel">

        <div className="brand">
          <h1>🎓 EduTrack</h1>

          <p>
            Modern Student Management Platform for Students,
            Trainers, HR and Administration.
          </p>
        </div>

        <div className="dashboard-card">

          <div className="stats-row">

            <div className="stat-box">
              <h2>1245</h2>
              <span>Students</span>
            </div>

            <div className="stat-box">
              <h2>32</h2>
              <span>Trainers</span>
            </div>

          </div>

          <div className="batch-box">
            <h2>18</h2>
            <span>Running Batches</span>
          </div>

          <div className="activity-box">

            <h3>Recent Activities</h3>

            <div className="activity-item">
              ✓ Student enrolled in Java Batch
            </div>

            <div className="activity-item">
              ✓ HR created SQL Batch
            </div>

            <div className="activity-item">
              ✓ Trainer assigned to React Batch
            </div>

          </div>

        </div>

      </div> */}

      {/* RIGHT PANEL */}

      <div className="right-panel">

        <div className="login-card">

          <h2>
            {showRegister
              ? "🎓 Student Registration"
              : "Welcome Back 👋"}
          </h2>

          <p>
            {showRegister
              ? "Create your account"
              : "Sign in to continue"}
          </p>

          {!showRegister && (
            <div className="role-selector">

              <div
                className={
                  role === "STUDENT"
                    ? "role-card active"
                    : "role-card"
                }
                onClick={() => setRole("STUDENT")}
              >
                <FaUserGraduate />
                <span>Student</span>
              </div>

              <div
                className={
                  role === "TRAINER"
                    ? "role-card active"
                    : "role-card"
                }
                onClick={() => setRole("TRAINER")}
              >
                <FaChalkboardTeacher />
                <span>Trainer</span>
              </div>

              <div
                className={
                  role === "ADMIN"
                    ? "role-card active"
                    : "role-card"
                }
                onClick={() => setRole("ADMIN")}
              >
                <FaUserShield />
                <span>Admin</span>
              </div>

              <div
                className={
                  role === "HR"
                    ? "role-card active"
                    : "role-card"
                }
                onClick={() => setRole("HR")}
              >
                <FaUsers />
                <span>HR</span>
              </div>

            </div>
          )}

          {!showRegister ? (

            /* LOGIN FORM */

            <form onSubmit={handleLogin}>

              <div className="input-group">
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  onChange={handleInputChange}
                />
              </div>

              <div className="input-group">

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  name="password"
                  onChange={handleInputChange}
                />

                <span
                  className="password-icon"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword
                    ? <FaEyeSlash />
                    : <FaEye />}
                </span>

              </div>

              <div className="options">

                <label>
                  <input type="checkbox" />
                  Remember Me
                </label>

                <a href="/">Forgot Password?</a>

              </div>

              <button type="submit">
                Login
              </button>

              <div className="switch-form">

                <p>
                  Don't have an account?
                </p>

                <button
                  type="button"
                  className="link-btn"
                  onClick={() =>
                    setShowRegister(true)
                  }
                >
                  Register Here
                </button>

              </div>

            </form>

          ) : (

            /* REGISTER FORM */

            <form onSubmit={handleRegister}>

              <div className="input-group">
                <input
                  type="text"
                  name="studentName"
                  value={student.studentName}
                  onChange={handleInputChange}
                  placeholder="Student Name"
                />
              </div>

              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  value={student.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                />
              </div>

              <div className="input-group">
                <input
                  type="password"
                  name="password"
                  value={student.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                />
              </div>

              <div className="input-group">
                <input
                  type="number"
                  name="mobile"
                  value={student.mobile}
                  onChange={handleInputChange}
                  placeholder="Mobile Number"
                />
              </div>

              <div className="input-group">

                <select
                  name="gender"
                  value={student.gender}
                  onChange={handleInputChange}
                >
                  <option value="">
                    Select Gender
                  </option>

                  <option value="Male">
                    Male
                  </option>

                  <option value="Female">
                    Female
                  </option>

                  <option value="Other">
                    Other
                  </option>

                </select>

              </div>

              <button type="submit">
                Register
              </button>

              <div className="switch-form">

                <p>
                  Already have an account?
                </p>

                <button
                  type="button"
                  className="link-btn"
                  onClick={() =>
                    setShowRegister(false)
                  }
                >
                  Login Here
                </button>

              </div>

            </form>

          )}

        </div>

      </div>

    </div>
  );
};

export default Login;