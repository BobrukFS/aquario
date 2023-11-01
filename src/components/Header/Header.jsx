import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = () => {
  const abrirMenu = () => {
    const btn = document.getElementsByClassName("btn1");
    const nav = document.getElementsByClassName("header__nav");
    if (btn[0].classList.contains(`${styles.not_active}`)) {
      btn[0].classList.replace(`${styles.not_active}`, `${styles.active}`);
      nav[0].classList.toggle(`${styles.desplegado}`);
    } else if (btn[0].classList.contains(`${styles.active}`)) {
      btn[0].classList.replace(`${styles.active}`, `${styles.not_active}`);
      nav[0].classList.toggle(`${styles.desplegado}`);
    }
  };

  const abrirMenuDropdown = () =>{
      const img = document.getElementsByClassName(".img_perfil");

      if(img[0].classList.contains("d-none")){
        img[0].classList.replace("d-none", "d-flex")
      }
      img[0].classList.replace("d-flex", "d-none")
  }

  return (
    <>
      <div
        className={` px-4  ${styles.header} container-fluid  d-flex w-100 align-items-center justify-content-between p-2   top-0 start-0 px-lg-5`}
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
            <Link
              className={`${styles.link}  mb-4 mb-md-0 mx-md-3 `}
              to="/campus"
            >
              Campus pescar
            </Link>
            <Link
              className={`${styles.link}  mb-4 mb-md-0 mx-md-3 `}
              to="/foro"
            >
              Foro general
            </Link>
          </div>
          <div className="d-flex flex-column flex-md-row align-items-center gap-2">
            <img
              src="src/assets/Ellipse.jpg"
              className="img_perfil rounded-circle"
              alt=""
              onClick={abrirMenuDropdown}/>
            <ul className="m-0 p-0 d-none flex-column align-items-center">
              <p>Ver mi perfil</p>
              <p>Configuracion</p>
              <p>Cerrar sesion</p>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
