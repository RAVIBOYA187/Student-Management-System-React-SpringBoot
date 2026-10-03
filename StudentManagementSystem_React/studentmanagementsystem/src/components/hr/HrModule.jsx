import React, { useState } from "react";
import AddHr from "./AddHr";
import ViewHrs from "./ViewHrs";

const HrModule = () => {

  const [tab, setTab] = useState("view");

  return (
    <>
      <div className="module-header">

        <h1>HR Management</h1>
        <p className="module-subtitle">
          Manage HR and company details
        </p>

        <div className="module-nav">

          {/* <button
            onClick={() => setTab("view")}
          >
            View HRs
          </button> */}

          <button
            onClick={() => setTab("add")}
          >
            Add HR
          </button>

        </div>

      </div>

      {tab === "view" && <ViewHrs />}
      {tab === "add" && <AddHr />}

    </>
  );
};

export default HrModule;