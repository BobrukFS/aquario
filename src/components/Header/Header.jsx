import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import axios from "axios";
import { API_URL } from "../../utilities/constants";
import { jwtDecode } from "jwt-decode";

export const Header = () => {
  const token = localStorage.getItem("token");
  const decodedJwt = jwtDecode(token);

  const loggedUserId =
    decodedJwt[
      "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
    ];
  const [profilePicture, setProfilePicture] = useState("");

  const htmlElement = document.querySelector('html');
  const abrirMenu = () => {
    const btn = document.getElementsByClassName("btn1");
    const nav = document.getElementsByClassName("header__nav");
    if (btn[0].classList.contains(`${styles.not_active}`)) {
      btn[0].classList.replace(`${styles.not_active}`, `${styles.active}`);
      nav[0].classList.toggle(`${styles.desplegado}`);
      htmlElement.style.overflow = 'hidden';
    } else if (btn[0].classList.contains(`${styles.active}`)) {
      btn[0].classList.replace(`${styles.active}`, `${styles.not_active}`);
      nav[0].classList.toggle(`${styles.desplegado}`);
      htmlElement.style.overflow = 'auto';
    }
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const abrirMenuDropdown = () => {
    const img = document.getElementsByClassName("img_perfil");
    if(menuOpen){
      setMenuOpen(false);
    }else{
      setMenuOpen(true);
    }
 
    
  };

  const logout = () =>{
    console.log("chau")
  }

  const cambiarColor = (props) => {
    console.log(props);
    return props.isActive && window.innerWidth >= 768
      ? { borderBottom: "2px solid orange", color: "black" }
      : props.isActive ? { borderBottom: "2px solid white", color: "white" } : {};
  };

  return (
    <>
      <div
        className={` px-4  ${styles.header} bg-white container-fluid  d-flex w-100 align-items-center justify-content-between p-2   top-0 start-0 px-lg-5`}
      >
        <Link to="/" className="link-logo">
          <img width={200} src="src/assets/LogoFundacionPescar.png" alt="" />
        </Link>
        <div className={`${styles.box} z-2 d-md-none`}>
          <div
            className={`${styles.btn1} btn1 ${styles.not_active} z-2  not_active  d-block d-lg-none bg-white border  position-relative`}
            onClick={abrirMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <nav
          className={`${styles.header__nav} header__nav z-2 d-flex flex-column  flex-md-row  justify-content-center gap-5 justify-content-md-between align-items-center h-100 w-100 position-lg-relative top-0 start-0`}
        >
          <div className="d-flex flex-column align-items-center flex-md-row mx-4">
            <NavLink
              className="mb-4 mb-md-0 mx-md-3 text-sm-dark"
              style={cambiarColor}
              to="/foro"
            >
              Foro general
            </NavLink>

            <NavLink
              className="mb-4 mb-md-0 mx-md-3 text-sm-dark"
              style={cambiarColor}
              to="/campus"
            >
              Campus pescar
            </NavLink>
          </div>
          <div className="d-flex flex-column flex-md-row align-items-center gap-2 position-relative">
            
            {innerWidth < 768 ? <Link to="/perfil"><img
              src="src/assets/Ellipse.jpg"
              style = {{height:55}}
              className="img_perfil rounded-circle"
              alt=""
            />     </Link>: <img
              src="src/assets/Ellipse.jpg"
              style = {{height:55}}
              className="img_perfil rounded-circle"
              alt=""
              onClick={abrirMenuDropdown}    
            />}
            {menuOpen && (window.innerWidth >= 768) && (
              <ul className={`${styles.menu} menu m-0 p-2 rounded-3 flex-column align-items-center`}>
                <Link to="/perfil" className="text-white text-center"><p>Ver mi perfil</p></Link>
    
                <Link to="/" onClick={logout} className="text-center text-white"><p>Cerrar sesion</p></Link>
              </ul>
            )}

            {
              window.innerWidth < 768 && (
              
  
                <Link to="/" onClick={logout} className="text-center text-white"><p>Cerrar sesion</p></Link>

              )
            }
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
