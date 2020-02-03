import React from 'react';

function Results(props) {
  const { results } = props;

  if (results.meta && results.hwi && results.shortdef) {
    return (
      <div className="results">
        <h2>{results.meta.id}</h2>
        <p>
          <strong>Pronunciation:</strong>
          <em> {results.hwi.prs && results.hwi.prs[0].mw}</em>
        </p>
        <p>
          <strong>Definition:</strong>
        </p>
        <ol>
          {results.shortdef.map((result, index) => (
            <li className="definition" key={index}>
              {result}
            </li>
          ))}
        </ol>
      </div>
    );
  } else {
    return null;
  }
}

export default Results;
