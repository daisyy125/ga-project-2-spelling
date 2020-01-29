import React from 'react';


function Search(props) {
    return (
            <form onSubmit={props.handleSubmit} className='formParent' >
                <input className='formItem' placeholder="Search Word" type="text" onChange={props.handleChange} value={props.searchWord}/>
                <button type="submit" className='formItem'>BeeFind</button>
            </form>
    );
}

export default Search;
