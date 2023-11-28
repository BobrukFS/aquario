import React from "react";

import styles from "./aviso.module.css";
import axios from "axios";
import { useState } from "react";


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
}) => {
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
          .delete(`http://localhost:3000/avisos/${id}`)
          .then(() => {
            axios.get("http://localhost:3000/avisos").then((res) => {
              setAvisos(res.data);
              Swal.fire("Eliminado", "El aviso ha sido eliminado.", "success");
            });
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
          <img src="src/assets/ellipse.png" style={{ height: 50 }} alt="" />
          <p className="text-secondary font-xs">Manolo</p>
        </div>
        <div className="d-flex flex-column gap-2">
          <div className="d-flex gap-3 justify-content-end">
            <button
              className="border-0 bg-white"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={handleEdit}
            >
              <i className="fa-solid fa-pen color-p"></i>
            </button>
            <button className="border-0 bg-white" onClick={deleteAviso}>
              <i class="fa-solid fa-trash color-p"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="card-body d-flex flex-column  align-items-start">
        <h5 className="card-title text-start fw-bold">{title}</h5>
        <p className="card-text text-start fw-light">{desc}</p>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div >
          {img && img.toLowerCase().match(/\.(jpg|jpeg|png|gif)$/) && (
            <button
              className="btn btn-link d-flex align-items-center gap-2 font-info"
              onClick={openImage}
            >
              <FaImage /> Imagen
            </button>
          )}
          {img && img.toLowerCase().match(/\.(mp3|mp4)$/) && (
            <button
              className="btn btn-link d-flex align-items-center gap-2 font-info"
              onClick={openVideo}
            >
              <FaVideo /> Video
            </button>
          )}
          {img && img.toLowerCase().match(/\.(pdf|word)$/) && (
            <button
              className="btn btn-link d-flex align-items-center gap-2 font-info"
              onClick={openFile}
            >
              <FaFile /> Archivo
            </button>
          )}
        </div>
        <p className="text-secondary fw-normal font-info">Hace dos dias</p>
      </div>
    </div>
  );
};
