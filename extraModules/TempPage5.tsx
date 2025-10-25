import React from "react";
import MortuaryDashboard from "./components/MortuaryDashboard";
import TransplantDashboard from "./components/TransplantDashboard";
import NarcoticsDashboard from "./components/NarcoticsDashboard";

interface TempPage5Props {
  mortuaryCases: any[];
  transplantCases: any[];
  narcotics: any[];
  narcoticsLogs: any[];
  onAddNarcotic: (n: any) => void;
  onLogTransaction: (l: any) => void;
}

const TempPage5: React.FC<TempPage5Props> = ({
  mortuaryCases,
  transplantCases,
  narcotics,
  narcoticsLogs,
  onAddNarcotic,
  onLogTransaction,
}) => {
  return (
    <div className="p-8">
      <button
        onClick={() => (window.location.href = "http://localhost:3000")}
        className="text-gray-300 hover:text-white mb-4"
      >
        &larr; Back
      </button>
      <MortuaryDashboard
        cases={mortuaryCases}
        onAddCase={() => {
          /* Add logic */
        }}
      />
      <TransplantDashboard
        cases={transplantCases}
        onAddCase={() => {
          /* Add logic */
        }}
      />
      <NarcoticsDashboard
        inventory={narcotics}
        logs={narcoticsLogs}
        onAddNarcotic={onAddNarcotic}
        onLogTransaction={onLogTransaction}
      />
    </div>
  );
};

export default TempPage5;
