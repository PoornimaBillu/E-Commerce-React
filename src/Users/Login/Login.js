import { useState } from "react";

function Login(){
    const[uname,setUname]=useState()

    const updateUname=(event)=>{
        setUname(event.target.value)

    }

    const updatePwd =(event) =>{
       setUname(event.target.value)
    } 
    const updateLoginBtn =(event) => {
        event.preventDefault()
        console.log("uname",uname)
        console.log("setUname",setUname.data)
        setUname(uname)
    } 
    return(
        
        <div className="container mt-3">
  
  <form>
    <div className="row">
      <div className="col">
        <input onChange={updateUname} type="text" className="form-control" placeholder="Enter email" name="username" />
      </div>
      <div className="col">
        <input onChange={updatePwd} type="password" className="form-control" placeholder="Enter password" name="password" />
      </div>
      <div className="col">
      <button onClick={updateLoginBtn} className="btn btn-primary">LogIn</button>
    </div>
    </div>
  </form>
</div>
        
        
    )


}
export default Login;