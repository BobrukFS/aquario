import React from "react";
import { CardPerfil } from "./CardPerfil/CardPerfil";
import styles from "./Perfil.module.css";
import { Header } from "../Header/Header";
import { CardPublicaciones } from "./CardPublicaciones/CardPublicaciones";
import useFetch from "../../Hooks/useFetch";
import {Link} from "react-router-dom";
import { API_URL } from "../../utilities/constants";
import { jwtDecode } from "jwt-decode";
import axios from 'axios'
import { useState } from "react";
import { useEffect } from "react";

export const Perfil = () => {
  const token = localStorage.getItem("token");
  const decodedJwt = jwtDecode(token);
  const loggedUserId =
  decodedJwt[
    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
  ];

  const [data, setData] =  useState("")



  const obtenerDatos = async () =>{
    await axios
    .get(`${API_URL}api/Auth/${loggedUserId}`)
    .then((x) => console.log(x.data))
    .catch((err) => console.log(err));
  }


  
  useEffect(() => {
    obtenerDatos();
  }, []);


  return (
    <>
      <Header></Header>
      <div className={`container-fluid ${styles.perfil} d-flex justify-content-center  py-5`}>
        <div className={`d-flex row  align-items-start justify-content-center p-0 gap-5 bg-white ${styles.container}`} >
          <div className="col-12  m-0  d-flex flex-wrap align-items-start justify-content-center gap-5  ">
            <div className={`container-fluid d-flex flex-column p-0 m-0 ${styles.sectionPerfil}`}>
              <h2 className="fs-5 fw-bold">Mi Perfil</h2>
              <CardPerfil tipo="datos"></CardPerfil>
            </div>

            <div className={`container-fluid d-flex flex-column p-0 m-0 ${styles.sectionPerfil}`}>
              <h2 className="fs-5 fw-bold">Mi Centro Pescar</h2>
              <CardPerfil tipo="centro"></CardPerfil>
            </div>
          </div>

     
        </div>
      </div>
    </>
  );
};
