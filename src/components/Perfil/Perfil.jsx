import React from "react";
import {CardPerfil} from "./CardPerfil/CardPerfil";
import styles from "./Perfil.module.css";
import { Header } from "../Header/Header";

export const Perfil = () => {
  return (
    <>
      <Header></Header>
      <div className={`${styles.perfil} d-flex justify-content-center`}>
        <div className={`d-flex container-fluid flex-column align-items-center p-3 gap-5 bg-white ${styles.perfilContainer}`}>
        <div className={`container-fluid d-flex flex-column gap-1 ${styles.sectionPerfil}`}>
          <h2 className="fs-5 fw-bold">Mi Perfil</h2>
          <CardPerfil tipo="datos"></CardPerfil>
        </div>

        <div className={`container-fluid d-flex flex-column gap-1 ${styles.sectionPerfil}`}>
          <h2 className="fs-5 fw-bold">Mi Centro Pescar</h2>
          <CardPerfil tipo="centro"></CardPerfil>
        </div>
        </div>
        
      </div>
    </>
  );
};


