import React from 'react';


function Search(props) {
    return (
        <div>
            <form onSubmit={props.handleSubmit} >
                <input placeholder="Search Word" type="text" onChange={props.handleChange} value={props.searchWord}/>
                <button type="submit">BeeFind</button>
            </form>
        </div>
    );
}

export default Search;
