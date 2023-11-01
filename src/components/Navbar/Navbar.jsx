import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

export const Navbar = () => {
    return(
        <div className= {styles.bar}>
            <nav className="nav navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <ul className="nav justify-content-center nav-underline">

                    <li className="nav-item">
                        <Link className={`${styles.links}`} to="/campus/avisos"> <p className={`${styles.link_style}`}>Avisos</p> </Link>
                    </li> 

                    <li className="nav-item">
                        <Link className={`${styles.links}`} to="/calendario"> <p className={`${styles.link_style}`}>Calendario</p> </Link>
                    </li> 
                    
                    <li className="nav-item">
                        <Link className={`${styles.links}`} to= "/participantes"> <p className={`${styles.link_style}`}>Participantes</p> </Link>
                    </li>
                    
                    </ul>
                </div>
            </nav>
        </div>
    )

}