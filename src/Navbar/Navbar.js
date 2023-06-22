import { Link,BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "../Users/Login/Login";
import Register from "../Users/Register/Register";
import DashBoard from "../Users/DashBoard/DashBoard";
function Navbar(){
    return(
        <>
        <BrowserRouter>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">E-comeerce-Project(React)</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link" to ='/login'>Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin">Admin</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">DashBoard</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input size="70"className="form-control me-2" type="text" placeholder="Search" />
        <button className="btn btn-primary" type="button">Search</button>
      </form>
    </div>
  </div>
</nav>
<Routes>

     {/* <Route path="/admin" element={<Admin></Admin>} /> */}
    <Route path="/login" element={<Login></Login>} />
    <Route path="/register" element={<Register></Register>} />
    
    <Route path="/dashboard" element={<DashBoard></DashBoard>} />
</Routes>
</BrowserRouter>
        </>
    )

}
export default Navbar;