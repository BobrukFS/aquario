import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

export const Navbar = ({setSeccion}) => {

    const cambiarColor = (props) => {

        return props.isActive ? { color: "white",  borderBottom: '2px solid white' } : { color: 'white' }
    }

    return(
        <div className={`${styles.bar} w-100`}>
            <nav className="nav navbar-expand-lg bg-body-tertiary py-2">
                <div className="container-fluid">
                    <ul className="nav justify-content-evenly d-flex flex-wrap align-items-center">

                    <li className="nav-item ">
                      <button className={`${styles.link_style} bg-transparent  text-white`} onClick={() => setSeccion("avisos")}>Avisos</button> 
                    </li> 

                    <li className="nav-item">
                        <button  className={`${styles.link_style} bg-transparent  text-white` }  onClick={() => setSeccion("calendario")}>Calendario</button> 
                    </li> 
                    
                    <li className="nav-item">
                        <button className={`${styles.link_style} bg-transparent  text-white`} onClick={() => setSeccion("participantes")}>Participantes</button> 
                    </li>
                    
                    </ul>
                </div>
            </nav>
        </div>
    )

}