import React from 'react';
import {BrowserRouter as Router,Link} from "react-router-dom"; 
import {Switch,Route} from 'react-router';
import Signup from './Signup.js';
import Login from './Login.js';
import Home from './Home.js';
import Feed from './Feed.js';

const App=()=>
{
    return(
    <Router>
        <div>
            <nav style={{background:"pink"}}>
            <div className="Container">
                <div className="row">
                    <div className="col-9"><img src="https://img.icons8.com/metro/2x/instagram.png" alt="icon"></img>
                    <h2 style={{display: "inline-block"}}>Welcome to instagram</h2>
                    </div>
                    <div className="col-3"style={{background:"pink", ['padding-top']:"2px",['padding-left']:"42px",['padding-right']:"0px"}} align="center" >
                        <button class="btn btn-primary btn-lg btn-radius" style={{background:"black"}}><Link to="/Home">HOME</Link></button>
                        <button class="btn btn-primary btn-lg btn-radius" style={{background:"black"}}><Link to="/Signup">SIGNUP</Link></button>
                        <button class="btn btn-primary btn-lg btn-radius" style={{background:"black"}}><Link to="/Login">LOGIN</Link></button>
                        <button class="btn btn-primary btn-lg btn-radius" style={{background:"black"}}><Link to="/Feed">FEED</Link></button>
                        <button class="btn btn-primary btn-lg btn-radius" style={{background:"black", ['padding-top']:"5px"}}><Link to="/"><img src="https://img.icons8.com/officexs/2x/polyline.png" alt="img"></img></Link></button>
                    </div>
                </div>
           
            </div> </nav><br></br>
            
            
        <Switch>
            <Route path="/Home"><Home /></Route>
            <Route path="/Signup"><Signup/></Route>
            <Route path="/Login"><Login/></Route>
            <Route path="/Feed"><Feed/></Route>
            <Route path="/"></Route>
        </Switch>
        </div>
    </Router>
    )
}
export default App;