import React from 'react';
import Feed from './Feed.js';



const Login=()=>
 {
    const[userName,setUsername]=React.useState("");
    const[passWord,setPassword]=React.useState("");
    const[login,setLogin]=React.useState("false");

    const handleUsername=(e)=>
    {
        setUsername(e.target.value);

    }
    const handlePassword=(e1)=>
    {
        setPassword(e1.target.value)
    }
    const handleClick=(userName,passWord)=>
    {
        
        
        const UN="halima@gmail.com";
        const PW="Halima";
            if(userName!== UN && passWord!== PW )
            {
                alert("Please fill all field,enter correct mailid and password!!!")
            }
            else{
                
                
                setLogin("true");
                
            }
    }
    const Log=()=>
    {

        return(<div className="Container-fluid">
        <div className="row">
            <div className="col-4" style={{background:"black"}}> </div>
            <div className="col-4 btn btn-light" style={{background:"black"}}>
                <div>
                <h3><i>INSTAGRAM</i></h3>
                <input type="text" className="form-control" placeholder="UserName" value={userName} onChange={handleUsername}></input><br></br>
                <input type="password" className="form-control" placeholder="PassWord" value={passWord} onChange={handlePassword}></input><br></br>
                <button onClick={()=>handleClick(userName,passWord)} className="alert alert-primary btn-primary btn-sm btn-block" value={login}>LOGIN</button><br></br>
                </div>
                <div>
                    <h6>Dont't have an account? <a href="http://localhost:3000/Signup">Sign up</a></h6>
                </div>
            </div>
            <div className="col-4" style={{background:"black"}} ></div>
           
        </div>
     </div>)
    }
   
    return(<div style={{['padding-top']:" 100px"}}><br></br><br></br><br></br>
        {
           login==="true"?<Feed />:(Log())
        }
       </div>
        
       
      
   )
}

export default Login;