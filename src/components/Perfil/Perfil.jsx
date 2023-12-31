import React from "react";
import { CardPerfil } from "./CardPerfil/CardPerfil";
import styles from "./Perfil.module.css";
import { Header } from "../Header/Header";
import { CardPublicaciones } from "./CardPublicaciones/CardPublicaciones";
import useFetch from "../../Hooks/useFetch";
import { Link } from "react-router-dom";

export const Perfil = () => {
  return (
    <>
      <Header></Header>
      <div
        className={`container-fluid ${styles.perfil} d-flex justify-content-center  py-5`}
      >
        <div
          className={`d-flex row  align-items-start justify-content-center p-0 gap-5 bg-white ${styles.container}`}
        >
          <div className="col-12 col-xxl-6 m-0  d-flex flex-wrap align-items-start justify-content-center gap-5  ">
            <div
              className={`container-fluid d-flex flex-column p-0 m-0 ${styles.sectionPerfil}`}
            >
              <h2 className="fs-5 fw-bold">Mi Perfil</h2>
              <CardPerfil tipo="datos"></CardPerfil>
            </div>

            <div
              className={`container-fluid d-flex flex-column p-0 m-0 ${styles.sectionPerfil}`}
            >
              <h2 className="fs-5 fw-bold">Mi Centro Pescar</h2>
              <CardPerfil tipo="centro"></CardPerfil>
            </div>
          </div>

          <div
            className={`col-xxl-6 container-fluid d-flex flex-column  gap-1 m-0 ${styles.sectionPerfil}`}
          >
            <h2 className="fs-5 fw-bold">Ultimas Publicaciones</h2>
            <div className="d-flex flex-column align-items-start gap-4 gap-md-5">
              <Link
                to="/perfil/publicaciones"
                className="font-xs text-primary border-bottom border-primary"
              >
                Ver todas
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
