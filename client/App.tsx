import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Courses from "./pages/Courses";
import SIA from "./pages/SIA";
import Calendar from "./pages/Calendar";
import Contact from "./pages/Contact";
import CPOLevel3 from "./pages/CPOLevel3";
import DiplomaticProtection from "./pages/DiplomaticProtection";
import TacticalDriving from "./pages/TacticalDriving";
import TacticalFirearms from "./pages/TacticalFirearms";
import CounterTerrorism from "./pages/CounterTerrorism";
import SurveillanceIntelligence from "./pages/SurveillanceIntelligence";
import ProtectiveIntelligence from "./pages/ProtectiveIntelligence";
import HEAT from "./pages/HEAT";
import ProtectiveMedical from "./pages/ProtectiveMedical";
import ProtectiveOperations from "./pages/ProtectiveOperations";
import Pay from "./pages/Pay";
import AboutHighfield from "./pages/AboutHighfield";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="about" element={<About />} />
            <Route path="courses" element={<Courses />} />
            <Route path="courses/cpo-level-3" element={<CPOLevel3 />} />
            <Route path="courses/diplomatic-protection" element={<DiplomaticProtection />} />
            <Route path="courses/tactical-driving" element={<TacticalDriving />} />
            <Route path="courses/counter-terrorism" element={<CounterTerrorism />} />
            <Route path="courses/surveillance-intelligence" element={<SurveillanceIntelligence />} />
            <Route path="courses/protective-intelligence" element={<ProtectiveIntelligence />} />
            <Route path="courses/heat" element={<HEAT />} />
            <Route path="courses/protective-medical" element={<ProtectiveMedical />} />
            <Route path="courses/protective-operations" element={<ProtectiveOperations />} />
            <Route path="pay" element={<Pay />} />
            <Route path="about-highfield" element={<AboutHighfield />} />
            <Route path="sia" element={<SIA />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

const container = document.getElementById("root");
// Avoid creating multiple roots during HMR: reuse existing root if present on window
if (container) {
  const w = window as any;
  // If a root exists from a previous HMR run, unmount it first to avoid duplicate-create warnings.
  if (w.__react_root) {
    try {
      w.__react_root.unmount();
    } catch (e) {
      // ignore
    }
  }
  w.__react_root = createRoot(container);
  w.__react_root.render(<App />);
}
