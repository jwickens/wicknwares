import React, { useState, useEffect } from "react";
import ResponsiveApp from "./components/ResponsiveApp";
import { BrowserRouter as Router } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <ResponsiveApp />
    </Router>
  );
};

export default App;
