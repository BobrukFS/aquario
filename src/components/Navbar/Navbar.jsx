import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

export const Navbar = () => {
    return(
        <div className= {styles.bar}>
            <nav className="nav navbar-expand-lg bg-body-tertiary">
           <div className="container-fluid">
 <ul className="nav justify-content-center nav-underline">

  <li className="nav-item">
  <Link to="/avisos"> <a className= "nav-link active" aria-current="page" href="#">Avisos</a> </Link>
  </li> 

  <li className="nav-item">
  <Link to="/calendario"> <a className="nav-link" href="#">Calendario</a> </Link>
  </li> 
  
  <li className="nav-item">
  <Link to= "/participantes"> <a className="nav-link" href="#">Participantes</a> </Link>
  </li>
   
</ul>
</div>
</nav>

        </div>
    )

}