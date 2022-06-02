import React from 'react'
import {useEffect,useState} from 'react'
import '../styles/TrendingStock.css'

function TrendingStocks() {
    const [trendingStocks, setTrendingStocks] = useState({})
    
    useEffect(() => {
        fetch("http://localhost:3000/stocks",{
        method:"GET",
        headers:{"Content-Type": "application/json"}
        })
        .then(data => data.json())
        .then(data => setTrendingStocks(data))
    },[])

    let mappedStocks =[]
    if (Object.keys(trendingStocks).length){
        mappedStocks = trendingStocks.finance.result[0].quotes.map((stock)=> {
        const imgURL = `https://g.foolcdn.com/art/companylogos/mark/${stock.symbol}.png`
            return (
            <div>
                <h1>{stock.symbol} ${stock.regularMarketPrice} </h1>
                <img className='stockImg' src={imgURL} alt="Missing Stock Image 🥺 "/>
            </div>
        )
        })
    }
    //not rendering mappedStocks so that line 24 and 31 can render
    
    return mappedStocks.length ? (
    <div>
        <p>Trending Stocks for Today</p> 
        {mappedStocks}
    </div>
    ):null
}

export default TrendingStocks