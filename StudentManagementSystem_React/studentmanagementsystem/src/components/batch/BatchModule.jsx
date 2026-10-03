import React, { useState } from "react";
import AddBatch from "./AddBatch";
import ViewBatches from "./ViewBatches";

const BatchModule = () => {

  const [tab, setTab] = useState("view");

  return (
    <>
      <div className="module-header">

        <h1>Batch Management</h1>
        <p className="module-subtitle">
          Manage all training batches
        </p>

        <div className="module-nav">

          {/* <button
            onClick={() => setTab("view")}
          >
            View Batches
          </button> */}

          <button
            onClick={() => setTab("add")}
          >
            Create Batch
          </button>

        </div>

      </div>

      {tab === "view" && <ViewBatches />}
      {tab === "add" && <AddBatch />}

    </>
  );
};

export default BatchModule;