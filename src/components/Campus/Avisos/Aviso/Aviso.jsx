import React, { useEffect } from "react";
import styles from "./aviso.module.css";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import moment from "moment/moment";
import { API_URL } from "../../../../utilities/constants";
import { jwtDecode } from "jwt-decode";

export const Aviso = ({
  title,
  desc,
  img,
  id,
  setAvisos,
  setEditClick,
  setInputs,
  setAvisoId,
  setInputEdit,
  userName,
  timeCreated,
}) => {
  const [profilePicture, setProfilePicture] = useState("");
  const openImage = () => {
    window.open(`${img}`, "_blank");
  };

  const openVideo = () => {
    window.open(`${img}`, "_blank");
    // Aquí puedes usar un reproductor de video en lugar de abrir en una nueva ventana
  };

  const openFile = () => {
    window.open(`${img}`, "_blank");
    // Aquí puedes usar un visor de PDF o un visor de documentos en lugar de abrir en una nueva ventana
  };

  useEffect(() => {
    const jwtToken = localStorage.getItem("token");
    const decodedJwt = jwtDecode(jwtToken);
    const loggedUserId =
      decodedJwt[
        "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
      ];

    axios
      .get(`${API_URL}api/Auth/${loggedUserId}`)
      .then((x) => setProfilePicture(x.data.profilePictureUrl));
  }, []);

  const deleteAviso = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${API_URL}api/Avisos/${id}`)
          .then((x) => {
            Swal.fire("Eliminado", "El aviso ha sido eliminado.", "success");
          })
          .catch((error) => {
            console.error("Error al eliminar aviso:", error);
            Swal.fire(
              "Error",
              "Hubo un problema al eliminar el aviso",
              "error"
            );
          });
      }
    });
  };

  const handleEdit = () => {
    setInputs({
      name: desc,
      image: img,
      title: title,
    });

    setInputEdit({
      name: desc,
      image: img,
      title: title,
    });

    setEditClick(true);
    setAvisoId(id);
  };

  return (
    <div
      className={`${styles.ancho} ${styles.boxshadow} border-0 card text-center  my-4 p-2`}
    >
      <div className="card-header bg-white d-flex justify-content-between border-0 align-items-start">
        <div className="d-flex align-items-center gap-2">
          <img
            className={styles.profilePicture}
            src={profilePicture}
            style={{ height: 50 }}
            alt=""
          />
          <p className="text-secondary font-xs">{userName}</p>
        </div>
        <div className="d-flex flex-column gap-2">
          <div className="d-flex gap-3 justify-content-end">
            <button className="border-0 bg-white" onClick={deleteAviso}>
              <i class="fa-solid fa-trash color-p"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="card-body d-flex flex-row  align-items-start">
        <img src={img} alt="" className={styles.avisoImage} />
        <div className="d-flex flex-column ms-3">
          <h5 className="card-title text-start fw-bold">{title}</h5>
          <p className="card-text text-start fw-light">{desc}</p>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <p className="text-secondary fw-normal font-info">
          {moment(timeCreated).startOf("hour").fromNow()}
        </p>
      </div>
    </div>
  );
};
