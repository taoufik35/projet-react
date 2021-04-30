import {Link} from "react-router-dom";

function Nav(){
    return(
       <nav className="navbar navbar-dark bg-dark ">
           <ul className="nav ">
                <li className="nav-item">
                    <Link className="nav-link text-white " aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" aria-current="page" to="/search">Search</Link>
                </li>
            </ul>
       </nav>
    )
}

export default Nav;