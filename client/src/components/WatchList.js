import React from 'react'
import {useState,useEffect} from 'react'
import "../styles/WatchList.css"

function WatchList({user}) {
    const [watchList,setWatchList] = useState({})

    useEffect(() =>{

        if(!user){
            return <div>Login</div>
        }
        fetch(`http://localhost:3000/watchlist?userId=${user.id}`,{
            method:"GET",
            headers:{
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
        })
        .then(data => data.json()) 
        .then(data => setWatchList(data)) 
    },[])

    console.log(watchList)

    let renderWatchList = []
    if (watchList?.stocks){
        renderWatchList = watchList.stocks.map(stock => <div onClick={()=>handleDelete(stock)}>{stock}</div>)
    }

    function handleDelete(stock) {
        const userConfirmation = window.confirm("Removing Stock from Watch List")
        if(userConfirmation) {
            fetch(`http://localhost:3000/watchlist?userId=${user.id}&tickerName=${stock}`, 
            {
                method: 'DELETE'
            }).then(data => data.json()) 
            .then(data => setWatchList(data)) 
        }
    }

    return renderWatchList.length ? (
        <div>
            <h1 className='watchListForStock'>Watch List</h1>
        <div className='stockName'>{renderWatchList}</div>
        </div>
        
    ): 
    <div>
    <h1 className='watchList'>Watch List</h1>
    <img className='addAStock' src='no-stock-for-you.jpg'/>
    </div>
}

export default WatchList