import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./_global.scss";
import Random from "./components/random/Random";
import SingleQoute from "./components/qoutes/SingleQoute";
import AuthorQoutes from "./components/qoutes/AuthorQoutes";

const App = () => {
  const [qoute, setQoute] = useState({});

  const generateQoute = useCallback(async () => {
    const res = await fetch(
      `https://quote-garden.herokuapp.com/api/v3/quotes/random?limit=1`
    );
    const data = await res.json();

    setQoute(data.data[0]);
  }, []);

  useEffect(() => {
    generateQoute();
  }, [generateQoute]);

  return (
    <Router>
      <main>
        <Random generateQoute={generateQoute} />

        <Routes>
          <Route index element={<SingleQoute qoute={qoute} />} />
          <Route path="/:author" element={<AuthorQoutes />} />
        </Routes>
        <p className="text-footer">
          created by <span>Ralph</span> - devchallenges.io
        </p>
      </main>
    </Router>
  );
};

export default App;
