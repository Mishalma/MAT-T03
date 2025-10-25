import React from "react";
import { Link } from "react-router-dom";
import { serviceCategories } from "../navigation";
import { ServiceCategory } from "../types";

interface LandingPageProps {
  onSelectCategory: (key: string) => void;
}

const CategoryCard: React.FC<{ categoryKey: string; category: ServiceCategory; onClick: () => void }> = ({
  categoryKey,
  category,
  onClick,
}) => (
  <Link to={`/${categoryKey}`}>
    <div className="group bg-gray-200 hover:bg-gray-300/50 border border-gray-300 rounded-lg p-6 cursor-pointer transition-all duration-300 ease-in-out transform hover:-translate-y-1">
      <div className="flex items-start justify-between">
        <div className="flex-shrink-0 p-3 bg-gray-300/50 rounded-lg">
          <category.icon className="h-8 w-8 text-blue-500 group-hover:text-blue-600 transition-colors" />
        </div>
        <div className="text-2xl text-gray-400 group-hover:text-black transition-all group-hover:translate-x-1">
          &rarr;
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-black">{category.name}</h3>
        <p className="mt-1 text-sm text-gray-600">{category.description}</p>
      </div>
    </div>
  </Link>
);

const LandingPage: React.FC<LandingPageProps> = ({ onSelectCategory }) => {
  return (
    <div className="min-h-screen bg-white text-black p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-black">Hospital Management System</h1>
        <p className="mt-2 text-lg text-gray-600">Select a service category to begin.</p>
      </header>
      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {Object.entries(serviceCategories).map(([key, category]) => (
            <CategoryCard key={key} categoryKey={key} category={category} onClick={() => {}} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
