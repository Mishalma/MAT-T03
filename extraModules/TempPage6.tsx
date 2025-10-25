import React from "react";
import ComplianceDashboard from "./components/ComplianceDashboard";
import AVDashboard from "./components/AVDashboard";
import PerformanceDashboard from "./components/PerformanceDashboard";

interface TempPage6Props {
  licenses: any[];
  complianceTasks: any[];
  avContent: any[];
  performanceReviews: any[];
  onAddAvContent: (c: any) => void;
  onStartReview: (r: any) => void;
}

const TempPage6: React.FC<TempPage6Props> = ({
  licenses,
  complianceTasks,
  avContent,
  performanceReviews,
  onAddAvContent,
  onStartReview,
}) => {
  return (
    <div className="p-8">
      <button
        onClick={() => (window.location.href = "http://localhost:3000")}
        className="text-gray-300 hover:text-white mb-4"
      >
        &larr; Back
      </button>
      <ComplianceDashboard licenses={licenses} tasks={complianceTasks} />
      <AVDashboard content={avContent} onAddContent={onAddAvContent} />
      <PerformanceDashboard reviews={performanceReviews} onStartReview={onStartReview} />
    </div>
  );
};

export default TempPage6;
