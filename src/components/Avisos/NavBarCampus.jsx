import LogoFundacionPescar from "../../assets/LogoFundacionPescar.png"
import Profile from "../../assets/profilePicture.png";
export const NavCampus = () => {
    return(
    <div >
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src= {LogoFundacionPescar} alt="Logo Fundacion Pescar" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Testimonios</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <img src={Profile}href="#" alt="Foto del usuario" height={50}/>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
      
    

    </div>
)
}