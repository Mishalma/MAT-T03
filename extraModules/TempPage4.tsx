import React from "react";
import HousekeepingDashboard from "./components/HousekeepingDashboard";
import CSSDDashboard from "./components/CSSDDashboard";
import LaundryDashboard from "./components/LaundryDashboard";

interface TempPage4Props {
  housekeepingTasks: any[];
  wasteCollections: any[];
  cssdRequests: any[];
  laundryRequests: any[];
  onAddTask: (t: any) => void;
  onAddCollection: (c: any) => void;
  onAddCssdRequest: (r: any) => void;
}

const TempPage4: React.FC<TempPage4Props> = ({
  housekeepingTasks,
  wasteCollections,
  cssdRequests,
  laundryRequests,
  onAddTask,
  onAddCollection,
  onAddCssdRequest,
}) => {
  return (
    <div className="p-8">
      <button
        onClick={() => (window.location.href = "http://localhost:3000")}
        className="text-gray-300 hover:text-white mb-4"
      >
        &larr; Back
      </button>
      <HousekeepingDashboard
        tasks={housekeepingTasks}
        collections={wasteCollections}
        onAddTask={onAddTask}
        onAddCollection={onAddCollection}
      />
      <CSSDDashboard requests={cssdRequests} onAddRequest={onAddCssdRequest} />
      <LaundryDashboard
        requests={laundryRequests}
        onAddRequest={() => {
          /* Add logic */
        }}
      />
    </div>
  );
};

export default TempPage4;
