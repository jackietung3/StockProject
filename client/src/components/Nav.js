import React from "react"
import {Link} from "react-router-dom"
import "../styles/Nav.css";

function Nav({setIsAuthenticated, isAuthenticated, setUser, user}){

    function handleClick() {
        fetch('/logout', {method: 'DELETE'})
        .then(() => {
            setUser(null)
            setIsAuthenticated(false)
        })
    }
    console.log(user)

return (
    <div >
        <nav>
            <Link to="/" className="nav-link" >
                <span> Home  </span>
            </Link>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>

            <Link to="/WatchList" className="nav-link" >
                <span> Watch List  </span>
            </Link>
            
            {user ?
            <div id='logged-in'> 
                <span id='welcome'><Link to= '/Profile' className="nav-link" id="profile-link">Welcome, {user.first_name}</Link></span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>

                <Link to="/" className="nav-link" id="logout" onClick={handleClick} >
                    <span>Log Out</span>
                </Link> 

            </div>
            :
            <div id='logged-out'>
                <Link to='/Login' className="nav-link" id="login">
                    <span>Log In</span>
                </Link>
                <p id='or'>&nbsp;&nbsp;&nbsp;or&nbsp;&nbsp;&nbsp;</p>
                <Link to='/Signup' className="nav-link" id="signup">
                    <span>Sign Up</span>
                </Link>
            </div>
            }
        </nav>
    </div>
);
}
export default Nav;