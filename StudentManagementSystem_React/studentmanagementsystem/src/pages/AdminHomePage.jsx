import React, { useState } from "react";
import "../styles/admin.css";
import "../styles/form.css";
import "../styles/module.css";
import StudentModule from "../components/students/StudentModule";
import TrainerModule from "../components/trainer/TrainerModule";
import HrModule from "../components/hr/HrModule";
import BatchModule from "../components/batch/BatchModule";


import {
  FaBars,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUserTie,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

import Dashboard from "../components/Dashboard";

import "../styles/admin.css";

const AdminHomePage = () => {

  const [menu, setMenu] =
    useState("dashboard");

  return (
    <div className="layout">

      <aside className="sidebar">

        <h2>RAVI</h2>

        <ul>

          <li
            onClick={() =>
              setMenu("dashboard")
            }
          >
            <FaChartLine />
            Dashboard
          </li>

          <li onClick={() => setMenu("students")}>
            <FaUserGraduate />
            <span>Students</span>
            </li>

            <li onClick={() => setMenu("trainers")}>
            <FaChalkboardTeacher />
            <span>Trainers</span>
            </li>

            <li onClick={() => setMenu("hrs")}>
            <FaUserTie />
            <span>HRs</span>
            </li>

            <li onClick={() => setMenu("batches")}>
            <FaUsers />
            <span>Batches</span>
            </li>

        </ul>

      </aside>

      <main className="content">

        {menu === "dashboard" && <Dashboard />}

        {menu === "students" && <StudentModule />}

        {menu === "trainers" && <TrainerModule />}

        {menu === "hrs" && <HrModule />}

        {menu === "batches" && <BatchModule />}




      </main>

    </div>
  );
};

export default AdminHomePage;