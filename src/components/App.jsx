import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Privacy from "./Privacy";
import TermsOfUse from "./TermsOfUse";
import Tab from "./Tab";
import TabConfig from "./TabConfig";
import "./App.css";
import "./login.css";
import Login from "./login.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/privacy" element={<Privacy />} />
        <Route path="/termsofuse" element={<TermsOfUse />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/tab" element={<Tab />} />
        <Route path="/config" element={<TabConfig />} />
      </Routes>
    </Router>
  );
}
