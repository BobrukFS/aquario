import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/LogoFundacionPescar.png";
import Profile_Icon from "../../assets/PescarIcon.png";

export const Header = () => {
  return(
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="logo" />  
          </a>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end " id="navbarNavAltMarkup">
            <div className={`${styles.color} "navbar-nav "`}> 
              <Link className={`${styles.links}`} to= "/avisos"> <p>Mi Centro Pescar</p></Link>
              <Link className={`${styles.links}`} to= "/foroGeneral"> <p>Foro General</p></Link>
              <Link to="/perfil"> <img className={styles.icon_profile} src={Profile_Icon} alt="img perfil" /> </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}