import React from "react";
const Search =({handleSearch})=>{
    return(
        <input className="Search" 
        type="text"         
        placeholder="Search Users" onChange={(e)=>handleSearch(e.target.value)}></input>
    )
}
export default Search;