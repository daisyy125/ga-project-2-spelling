import React from 'react';

function Results(props) {
    const { results } = props;

    if (results.meta && results.hwi && results.shortdef) {
        return (
          <div className='results'>
            <h2>{results.meta.id}</h2>
            <p><strong>Pronunciation:</strong><em>   {results.hwi.prs && results.hwi.prs[0].mw}</em></p>
            <p><strong>Definition:</strong></p>
            {results.shortdef && results.shortdef.map((result, index) => (<ul key={index}>{index + 1}. {result}</ul>))}
          </div>
        );
            
    } else {
        return null
    }
    

}

export default Results;
