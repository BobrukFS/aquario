import React from "react";
import { DataSection } from "./DataSection/DataSection";
import styles from "./CardPerfil.module.css";
import useFetch from "../../../Hooks/useFetch";
import { useEffect } from "react";
import { API_URL } from "../../../utilities/constants";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useState } from "react";

export const CardPerfil = ({ tipo }) => {
  const token = localStorage.getItem("token");
  const decodedJwt = jwtDecode(token);
  const loggedUserId =
    decodedJwt[
      "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
    ];

  const [data, setData] = useState("");

  const obtenerDatos = async () => {
    await axios
      .get(`${API_URL}api/Auth/${loggedUserId}`)
      .then((x) => setData(x.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  /*
   if(loading){
    return <div>Cardando datos...</div>
   }
  */

  return (
    <>
      {data && tipo == "datos" ? (
        <div
          className={`container-fluid p-3 px-2 rounded-3 ${styles.perfilCard}`}
        >
          <div className="d-flex justify-content-start gap-2 flex-xxl-column align-items-xxl-center">
            <img
              src={data.profilePictureUrl}
              className={`rounded-circle  ${styles.imgCard}`}
            ></img>
            <p className="text-white fw-bold mb-xxl-2">{data.firstName}</p>
          </div>

          <div
            className={`data-container ${styles.dataContainer} rounded-3 p-2 d-flex flex-column gap-2 `}
          >
            <DataSection titulo="Nombre" value={data.firstName}></DataSection>
            <DataSection
              titulo="Mail"
              value={data.email}
              editable={true}
            ></DataSection>
            <DataSection
              titulo="Linkedin"
              value={data.linkedinUrl}
              editable={true}
            ></DataSection>
          </div>
        </div>
      ) : data ? (
        <div
          className={`container-fluid p-3 px-2 rounded-3 ${styles.perfilCard}`}
        >
          <div className="d-flex justify-content-start w-100 gap-2 align-items-start flex-xxl-column align-items-xxl-center">
            <img
              src="src/assets/Ellipse3.png"
              className={`rounded-circle  ${styles.imgCard} `}
            ></img>
            <div className="d-flex justify-content-center flex-column align-items-xxl-center">
              <p className="text-white fw-bold">{data.centroPescar}</p>
              <p className={`${styles.dataTematica}  mb-xxl-2`}>
                {data.tematica}
              </p>
            </div>
          </div>
        </div>
      ) : ""}
    </>
  );
};
