import React from 'react';

function Results(props) {
    const { results } = props;
    console.log(props.searchWord)
    if (results.hwi && results.shortdef) {
        return (
            <div>
                <h2>{props.searchWord}</h2>
                <p><strong>Pronuciation:</strong><em>{results.hwi.prs && results.hwi.prs[0].mw}</em></p>
                <p><strong>Definition:</strong></p>
                {results.shortdef && results.shortdef.map((result, index) => (<ul key={index}>{index + 1}. {result}</ul>))}
            </div>
        );
            
    } else {
        return null
    }
    

}

export default Results;
