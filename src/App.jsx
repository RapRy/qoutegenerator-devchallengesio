import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./_global.scss";
import Random from "./components/random/Random";
import SingleQoute from "./components/qoutes/SingleQoute";
import AuthorQoutes from "./components/qoutes/AuthorQoutes";
import SingleLoader from "./components/loaders/SingleLoader";

const App = () => {
  const [qoute, setQoute] = useState({});
  const [load, setLoad] = useState(false);

  const generateQoute = useCallback(async () => {
    const res = await fetch(`https://api.quotable.io/random`);
    const data = await res.json();
    setLoad(false);
    setQoute(data);
  }, []);

  useEffect(() => {
    setLoad(true);
    generateQoute();
  }, [generateQoute]);

  return (
    <Router>
      <main>
        <Random generateQoute={generateQoute} setLoad={setLoad} />

        <Routes>
          <Route
            index
            element={
              load ? (
                <SingleLoader isShowAuthor={true} />
              ) : (
                <SingleQoute qoute={qoute} isShowAuthor={true} />
              )
            }
          />
          <Route
            path="/:author"
            element={<AuthorQoutes load={load} setLoad={setLoad} />}
          />
        </Routes>
        <p className="text-footer">
          created by <span>Ralph</span> - devchallenges.io
        </p>
      </main>
    </Router>
  );
};

export default App;
