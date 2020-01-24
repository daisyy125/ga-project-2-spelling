import React from 'react';


function Search(props) {
    return (
        <div>
            <form onSubmit={props.handleSubmit} >
                <input placeholder="Search Word" type="text" />
                <button type="submit">BeeFind</button>
            </form>
        </div>
    );
}

export default Search;
