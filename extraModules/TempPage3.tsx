import React from "react";
import HRDashboard from "./components/HRDashboard";
import ITDashboard from "./components/ITDashboard";
import ComplaintsDashboard from "./components/ComplaintsDashboard";

interface TempPage3Props {
  employees: any[];
  trainingSessions: any[];
  itTickets: any[];
  complaints: any[];
  onAddEmployee: (e: any) => void;
  onScheduleTraining: (s: any) => void;
  onAddTicket: (t: any) => void;
  onAddComplaint: (c: any) => void;
}

const TempPage3: React.FC<TempPage3Props> = ({
  employees,
  trainingSessions,
  itTickets,
  complaints,
  onAddEmployee,
  onScheduleTraining,
  onAddTicket,
  onAddComplaint,
}) => {
  return (
    <div className="p-8">
      <button
        onClick={() => (window.location.href = "http://localhost:3000")}
        className="text-gray-300 hover:text-white mb-4"
      >
        &larr; Back
      </button>
      <HRDashboard
        employees={employees}
        sessions={trainingSessions}
        onAddEmployee={onAddEmployee}
        onScheduleTraining={onScheduleTraining}
      />
      <ITDashboard tickets={itTickets} onAddTicket={onAddTicket} />
      <ComplaintsDashboard complaints={complaints} onAddComplaint={onAddComplaint} />
    </div>
  );
};

export default TempPage3;
