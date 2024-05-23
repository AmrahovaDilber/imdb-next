import React from "react";
import Card from "./Card";

function Results({ results }) {
  return (
    <div className="sm:grid sm:gird-cols-2 log:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}

export default Results;
