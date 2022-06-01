import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import {useEffect, useState} from "react"
import '../App.css';
import Login from "./Login"
import SignUp from "./SignUp";
import Home from "./Home";
import Nav from "./Nav";
import Profile from "./Profile";


function App() {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // useEffect(() => {
  //   fetch('/authorized_user')
  //   .then(res => {
  //     if(res.ok) {
  //       res.json()
  //       .then(user => {
  //         setIsAuthenticated(true)
  //         setUser(user)})
  //     }
  //   })
  // },[])

  return (
    <Router>
    <div className="App">
      <Nav isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/>
      <Switch>

        <Route exact path="/">
          <Home user={user}/>
        </Route>

        <Route path="/Login">
          <Login setUser={setUser} setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} user={user}/>
        </Route>

        <Route path="/Signup">
          <SignUp />
        </Route>

        <Route path="/Profile">
          <Profile user={user} setUser={setUser} setIsAuthenticated={setIsAuthenticated}/>
        </Route>

      </Switch>
      <div id='footer'>
      </div>
    </div>
    </Router>
  );
}

export default App;
