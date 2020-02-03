import React from 'react';
// Hou comment: take note of how I formatted the code for improved readability
function Search(props) {
  return (
    <form onSubmit={props.handleSubmit} className="formParent">
      <input
        className="formItem"
        placeholder="Search Word"
        type="text"
        onChange={props.handleChange}
        value={props.searchWord}
      />
      <button type="submit" className="formItem">
        BeeFind
      </button>
    </form>
  );
}

export default Search;
