import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Privacy from "./Privacy";
import TermsOfUse from "./TermsOfUse";
import Login from "./Tab.jsx";
import TabConfig from "./TabConfig";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/privacy" element={<Privacy />} />
        <Route path="/termsofuse" element={<TermsOfUse />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/tab" element={<Login />} />
        <Route path="/config" element={<TabConfig />} />
      </Routes>
    </Router>
  );
}
