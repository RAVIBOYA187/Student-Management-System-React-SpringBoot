import React, { useState } from "react";
import AddTrainer from "./AddTrainer";
import ViewTrainers from "./ViewTrainers";

const TrainerModule = () => {

  const [tab, setTab] = useState("view");

  return (
    <>
      <div className="module-header">

        <h1>Trainer Management</h1>
        <p className="module-subtitle">
        Manage trainer records
      </p>

        <div className="module-nav">

          {/* <button
            onClick={() => setTab("view")}
          >
            View Trainers
          </button> */}

          <button
            onClick={() => setTab("add")}
          >
            Add Trainer
          </button>

        </div>

      </div>

      {tab === "view" && <ViewTrainers />}
      {tab === "add" && <AddTrainer />}

    </>
  );
};

export default TrainerModule;