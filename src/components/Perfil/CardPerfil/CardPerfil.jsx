import React, { useEffect, useState } from "react";
import { DataSection } from "./DataSection/DataSection";
import styles from "./CardPerfil.module.css";
import useFetch from "../../../Hooks/useFetch";
import { jwtDecode } from "jwt-decode";
import { API_URL } from "../../../utilities/constants";
import axios from "axios";

export const CardPerfil = ({ tipo }) => {
  const token = localStorage.getItem("token");
  const decodedJwt = jwtDecode(token);
  const [userData, setUserData] = useState({});

  const loggedUserId =
    decodedJwt[
      "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
    ];
  // const {nombre, mail, linkedin, ingreso, coordinadoras} = useFetch("http://localhost:3000/usuarios/1")
  useEffect(() => {
    axios
      .get(`${API_URL}api/Auth/${loggedUserId}`)
      .then((x) => setUserData(x.data));
  }, []);

  return (
    <>
      {tipo === "datos" ? (
        <div
          className={`container-fluid p-3 px-2 rounded-3 ${styles.perfilCard}`}
        >
          <div className="d-flex justify-content-start gap-2 flex-xxl-column align-items-xxl-center">
            <img
              src={userData.profilePictureUrl}
              className={`rounded-circle  ${styles.imgCard}`}
            ></img>
            <p className="text-white fw-bold mb-xxl-2">
              {userData && userData.firstName + " " + userData.lastName}
            </p>
          </div>

          <div
            className={`data-container ${styles.dataContainer} rounded-3 p-2 d-flex flex-column gap-2 `}
          >
            <DataSection
              titulo="Nombre"
              value={userData && userData.firstName}
            ></DataSection>
            <DataSection
              titulo="Mail"
              value={userData && userData.userName}
              editable={true}
            ></DataSection>
            <DataSection
              titulo="Linkedin"
              value={userData && userData.linkedinUrl}
              editable={true}
            ></DataSection>
          </div>
        </div>
      ) : (
        <div
          className={`container-fluid p-3 px-2 rounded-3 ${styles.perfilCard}`}
        >
          <div className="d-flex justify-content-start w-100 gap-2 align-items-start flex-xxl-column align-items-xxl-center">
            <img
              src="src/assets/Ellipse3.png"
              className={`rounded-circle  ${styles.imgCard} `}
            ></img>
            <div className="d-flex justify-content-center flex-column align-items-xxl-center">
              <p className="text-white fw-bold">
                {userData && userData.centroPescar}
              </p>
              <p className={`${styles.dataTematica}  mb-xxl-2`}>
                {userData && userData.tematica}
              </p>
            </div>
          </div>

          <div
            className={`data-container ${styles.dataContainer} rounded-3 p-2 d-flex flex-column gap-2 `}
          ></div>
        </div>
      )}
    </>
  );
};
