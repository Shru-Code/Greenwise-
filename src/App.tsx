import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Index from "./pages/Index";
import RepairabilityCheckerPage from "./pages/RepairabilityCheckerPage";
import { Toaster } from "@/components/ui/toaster";
import './App.css';

const App = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/repairability" element={<RepairabilityCheckerPage />} />
      </Routes>
    </Router>
    <Toaster />
  </AuthProvider>
);

export default App;
