import React from 'react';

function Results(props) {
    const { results } = props;
    console.log(props.searchWord)
    console.log(results)
    if (results.hwi && results.shortdef) {
        return (
            <div className='results'>
                <h2>{props.searchWord}</h2>
                {/* {props.searchWord === ' ' && <p>Enter a word below!</p>}
                {props.searchWord !== ' ' && <div><p>Pronunciation:{results.hwi.prs && results.hwi.prs[0].mw}</p><p><strong>Definition:</strong></p>
                    {results.shortdef && results.shortdef.map((result, index) => (<ul key={index}>{index + 1}. {result}</ul>))}</div>} */}
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
