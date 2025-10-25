import React from "react";
import OperationsDashboard from "./components/OperationsDashboard";

const TempPage1: React.FC = () => {
  return <OperationsDashboard onBack={() => (window.location.href = "http://localhost:3000")} />;
};

export default TempPage1;
