import React from "react";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CropIntelligence from "./pages/CropIntelligence";
import MarketForecast from "./pages/MarketForecast";
import RiskSimulator from "./pages/RiskSimulator";
import PestDisease from "./pages/PestDisease";
import SoilHealth from "./pages/SoilHealth";
import Weather from "./pages/Weather";
import MarketIntelligence from "./pages/MarketIntelligence";
import Alerts from "./pages/Alerts";
import NotFound from "./pages/NotFound";

const App: React.FC = () => {
  return (
    <Theme appearance="inherit" radius="large" scaling="100%">
      <Router>
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/crop-intelligence" element={<CropIntelligence />} />
            <Route path="/market-forecast" element={<MarketForecast />} />
            <Route path="/risk-simulator" element={<RiskSimulator />} />
            <Route path="/pest-disease" element={<PestDisease />} />
            <Route path="/soil-health" element={<SoilHealth />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/market-intelligence" element={<MarketIntelligence />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            newestOnTop
            closeOnClick
            pauseOnHover
          />
        </div>
      </Router>
    </Theme>
  );
};

export default App;
