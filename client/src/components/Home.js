import "../styles/Home.css";
import React from "react";
import {useState} from "react"
import TrendingStocks from "./TrendingStocks"
import Search from "./Search";
import Stock from "./Stock";

function Home({user}){
    const [stock, setStock] = useState({})

    return (

            <div className="home-container">
                <Search setStock={setStock} stock={stock}/>
                {Object.keys(stock).length ? <Stock user={user} stock={stock} setStock={setStock}/> : <div>
                    <TrendingStocks/>
                </div>}
            </div>

    )
}

export default Home;
