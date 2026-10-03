import React, { useState } from "react";
import AddStudent from "./AddStudent";
import ViewStudents from "./ViewStudents";

const StudentModule = () => {

  const [tab, setTab] = useState("view");

  return (
    <>

      <div className="module-header">

        <h1>Student Management</h1>
        <p className="module-subtitle">
        Manage student records, enrollment and performance
      </p>

        <div className="module-nav">

          {/* <button
            onClick={() => setTab("view")}
          >
            View Students
          </button> */}

          <button
            onClick={() => setTab("add")}
          >
            Add Student
          </button>

        </div>

      </div>

      {tab === "view" && <ViewStudents />}

      {tab === "add" && <AddStudent />}

    </>
  );
};

export default StudentModule;