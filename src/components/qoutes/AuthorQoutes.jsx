import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router";

import SingleQoute from "./SingleQoute";
import SingleLoader from "../loaders/SingleLoader";
import "./_author-qoutes.scss";

const loadItems = [1, 2, 3, 4, 5, 6, 7];

const AuthorQoutes = ({ load, setLoad }) => {
  const { author } = useParams();
  const [qoutes, setQoutes] = useState([]);

  const getQoutes = useCallback(async () => {
    const res = await fetch(`https://api.quotable.io/quotes?author=${author}`);

    const data = await res.json();
    setLoad(false);
    setQoutes(data.results);
  }, [author, setLoad]);

  useEffect(() => {
    setLoad(true);
    getQoutes();
  }, [getQoutes, setLoad]);

  return (
    qoutes && (
      <div className="container-author">
        {load ? (
          <div className="loader"></div>
        ) : (
          <h1>{qoutes.length > 0 ? qoutes[0].author : ""}</h1>
        )}
        <div>
          {load
            ? loadItems.map((item) => <SingleLoader isShowAuthor={false} />)
            : qoutes.map((qoute) => (
                <SingleQoute
                  key={qoute._id}
                  qoute={qoute}
                  isShowAuthor={false}
                />
              ))}
        </div>
      </div>
    )
  );
};

export default AuthorQoutes;
