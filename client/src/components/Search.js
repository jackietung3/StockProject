import React from 'react'
import {useState} from "react"
import "../styles/Search.css"

function Search({setStock,stock}) {
    const [searchValue, setSearchValue] = useState("")

    function handleSearch (e){
        e.preventDefault()
        fetch(`http://localhost:3000/stock?ticker_name=${searchValue}`,{
        method:"GET",
        headers:{"Content-Type": "application/json"}
        })
        .then(data => data.json())
        .then(data => setStock(data)) 
    }

    
    return (
        <div className="search-bar">
            <form onSubmit={handleSearch}>
                <input type="search" id="search" placeholder="Search Stock" onChange={e => setSearchValue(e.target.value)} ></input>
                <button hidden>Enter</button>
            </form>
        </div>
    )
}

export default Search