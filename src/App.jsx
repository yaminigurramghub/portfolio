import React, { useState } from "react";
import SoftwareEngineerPage from "./pages/SoftwareEngineerPage";
import "./index.css";

function App() {
  const [currentPage, setCurrentPage] = useState("landing");

  const handleSelectProfile = (page) => {
    setCurrentPage(page);
  };

  const handleBack = () => {
    setCurrentPage("landing");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <SoftwareEngineerPage></SoftwareEngineerPage>
    </div>
  );
}

export default App;
