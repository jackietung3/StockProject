import React from 'react'
import "../styles/Stock.css"
import {useState} from "react"

function Stock({stock, setStock, user}) {
    const [buttonText,setButtonText] = useState(true)

    if(stock.quotes){
        
    fetch(`http://localhost:3000/ticker?symbol_name=${stock.quotes[0].symbol}`,{
        method:"GET",
        headers:{"Content-Type": "application/json"}
        })
        .then(data => data.json())
        .then(data => setStock(data))
    }
    
    function handleClick(){
        fetch(`http://localhost:3000/watchlist?userId=${user.id}`,{
        method:"PATCH",
        headers:{
            'Content-Type': 'application/json',
            'Accepts': 'application/json'
        },
        body: JSON.stringify({
            tickerName: stock.price.symbol,
        })
    })
    
}

    // const data = [
    //     ["day", "low", "open", "close", "high"],
    //     ["1", 20, 28, 38, 45],
    //     ["2", 31, 38, 55, 66],
    //     ["3", 50, 55, 77, 80],
    //     ["4", 50, 77, 66, 77],
    //     ["5", 15, 66, 22, 68],
    // ];

    return !stock.quotes ? (
        <div>
            <h1>{stock.price.symbol} {stock.price.shortName}</h1>
            <button onClick={handleClick} hidden={user ? false:true} > {buttonText ? "+ Add to Watch List" : "Added to Watch List"} </button>
            <h2>{stock.price.regularMarketPrice.raw}</h2>
            <h3>{stock.assetProfile.longBusinessSummary}</h3>
        </div>
    ) : null
}

export default Stock