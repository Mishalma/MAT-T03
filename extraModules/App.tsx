import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import TempPage1 from "./TempPage1";
import TempPage2 from "./TempPage2";
import TempPage3 from "./TempPage3";
import TempPage4 from "./TempPage4";
import TempPage5 from "./TempPage5";
import TempPage6 from "./TempPage6";

import {
  feedbackData,
  labResultsData,
  dischargeData,
  transcriptionData,
  licenseData,
  complianceTaskData,
  avContentData,
  housekeepingTaskData,
  wasteCollectionData,
  complaintsData,
  itSupportTicketData,
  mortuaryCaseData,
  transplantCaseData,
  cssdRequestData,
  laundryRequestData,
  employeeData,
  trainingSessionData,
  performanceReviewData,
  narcoticsInventoryData,
  narcoticsLogData,
} from "./data";
import {
  Complaint,
  CSSDRequest,
  Employee,
  HousekeepingTask,
  ITSupportTicket,
  LaundryRequest,
  MortuaryCase,
  Narcotic,
  PerformanceReview,
  TransplantCase,
  TrainingSession,
  WasteCollection,
  AVContent,
  NarcoticLog,
  License,
  PerformanceReview as PerformanceReviewType,
  Feedback,
} from "./types";

const App: React.FC = () => {
  const [activeCategoryKey, setActiveCategoryKey] = useState<string | null>(null);

  // This is a simplified state management for demonstration.
  // In a real app, this would be handled by a more robust state management solution.
  const [complaints, setComplaints] = useState(complaintsData);
  const [itTickets, setItTickets] = useState(itSupportTicketData);
  const [mortuaryCases, setMortuaryCases] = useState(mortuaryCaseData);
  const [transplantCases, setTransplantCases] = useState(transplantCaseData);
  const [cssdRequests, setCssdRequests] = useState(cssdRequestData);
  const [laundryRequests, setLaundryRequests] = useState(laundryRequestData);
  const [employees, setEmployees] = useState(employeeData);
  const [trainingSessions, setTrainingSessions] = useState(trainingSessionData);
  const [performanceReviews, setPerformanceReviews] = useState(performanceReviewData);
  const [narcotics, setNarcotics] = useState(narcoticsInventoryData);
  const [narcoticsLogs, setNarcoticsLogs] = useState(narcoticsLogData);
  const [housekeepingTasks, setHousekeepingTasks] = useState(housekeepingTaskData);
  const [wasteCollections, setWasteCollections] = useState(wasteCollectionData);
  const [licenses, setLicenses] = useState(licenseData);
  const [complianceTasks, setComplianceTasks] = useState(complianceTaskData);
  const [avContent, setAvContent] = useState(avContentData);

  return (
    <Router>
      <div className="bg-white min-h-screen">
        <Routes>
          <Route path="/" element={<LandingPage onSelectCategory={(category) => {}} />} />
          <Route path="/operations" element={<TempPage1 onBack={() => {}} />} />
          <Route path="/quality" element={<TempPage2 />} />
          <Route
            path="/admin"
            element={
              <TempPage3
                onBack={() => {}}
                employees={employees}
                trainingSessions={trainingSessions}
                itTickets={itTickets}
                complaints={complaints}
                onAddEmployee={(e) =>
                  setEmployees((prev) => [...prev, { ...e, id: `EMP-${Date.now()}`, status: "Active" }])
                }
                onScheduleTraining={(s) => setTrainingSessions((prev) => [...prev, { ...s, id: `TS-${Date.now()}` }])}
                onAddTicket={(t) => setItTickets((prev) => [...prev, t])}
                onAddComplaint={(c) => setComplaints((prev) => [...prev, c])}
              />
            }
          />
          <Route
            path="/support"
            element={
              <TempPage4
                onBack={() => {}}
                housekeepingTasks={housekeepingTasks}
                wasteCollections={wasteCollections}
                cssdRequests={cssdRequests}
                laundryRequests={laundryRequests}
                onAddTask={(t) => setHousekeepingTasks((prev) => [...prev, t])}
                onAddCollection={(c) => setWasteCollections((prev) => [...prev, c])}
                onAddCssdRequest={(r) =>
                  setCssdRequests((prev) => [
                    ...prev,
                    { ...r, id: `CSSD-${Date.now()}`, requestDate: new Date().toLocaleDateString(), status: "Pending" },
                  ])
                }
              />
            }
          />
          <Route
            path="/specialized"
            element={
              <TempPage5
                onBack={() => {}}
                mortuaryCases={mortuaryCases}
                transplantCases={transplantCases}
                narcotics={narcotics}
                narcoticsLogs={narcoticsLogs}
                onAddNarcotic={(n) => setNarcotics((prev) => [...prev, { ...n, id: `N-${Date.now()}` }])}
                onLogTransaction={(l) => setNarcoticsLogs((prev) => [...prev, { ...l, id: `LOG-${Date.now()}` }])}
              />
            }
          />
          <Route
            path="/compliance"
            element={
              <TempPage6
                onBack={() => {}}
                licenses={licenses}
                complianceTasks={complianceTasks}
                avContent={avContent}
                performanceReviews={performanceReviews}
                onAddAvContent={(c) =>
                  setAvContent((prev) => [
                    ...prev,
                    { ...c, id: `AV-${Date.now()}`, uploadDate: new Date().toLocaleDateString(), status: "Processing" },
                  ])
                }
                onStartReview={(r) =>
                  setPerformanceReviews((prev) => [
                    ...prev,
                    { ...r, id: `PR-${Date.now()}`, status: "Pending", summary: "" },
                  ])
                }
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
