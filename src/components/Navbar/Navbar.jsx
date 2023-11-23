import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

export const Navbar = () => {

    const cambiarColor = (props) => {
        console.log(props)
        return props.isActive ? { borderBottom: '2px solid black' } : { color: 'white' }
    }

    return(
        <div className= {styles.bar}>
            <nav className="nav navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <ul className="nav justify-content-center">

                    <li className="nav-item">
                        <NavLink className={`${styles.links}`} style={cambiarColor} to="/campus" > <p className={`${styles.link_style}`}>Avisos</p> </NavLink>
                    </li> 

                    <li className="nav-item">
                        <NavLink className={`${styles.links}`} style={cambiarColor}  to="/calendario" > <p  className={`${styles.link_style}`}>Calendario</p> </NavLink>
                    </li> 
                    
                    <li className="nav-item">
                        <NavLink className={`${styles.links}`} style={cambiarColor} to= "/participantes" > <p className={`${styles.link_style}`}>Participantes</p> </NavLink>
                    </li>
                    
                    </ul>
                </div>
            </nav>
        </div>
    )

}