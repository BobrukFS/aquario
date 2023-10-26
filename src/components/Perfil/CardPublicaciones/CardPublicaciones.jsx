import React from "react";
import styles from "./CardPublicaciones.module.css";

export const CardPublicaciones = ({titulo, fecha, contenido, comentarios, reacciones, tematica}) => {
  

  function getPrimetas30Palabras(string){
    const palabras = string.split(" ");
    const primeras30Palabras = palabras.slice(0, 40);
    return primeras30Palabras.join(" ");
  }
  return (
    <>
      <div className={`${styles.card}`}>
        <p className={`text-secondary ${styles.fecha} mb-1`}>
          Fecha de publicacion: {fecha}
        </p>
        <div
          className={`${styles.fondo} rounded-3 p-3 d-flex flex-column gap-2`}
        >
          <div>
            <p className="text-white fw-bold">
              {titulo}
            </p>
            <p className={`text-white ${styles.fecha} mb-1`}>{tematica}</p>
          </div>

          <p className="text-white">
            {getPrimetas30Palabras(contenido)}  <a className="text-secondary mx-1">Ver mas</a>
          </p>
        </div>
        <div className="d-flex justify-content-between my-2 gap-2">
          <div className="d-flex gap-2">
            <p className={`text-secondary ${styles.fecha} mb-1`}>Comentario</p>
            <p className={`text-secondary ${styles.fecha} mb-1`}>{comentarios}</p>
          </div>
          <div className="d-flex gap-2">
            <p className={`text-secondary ${styles.fecha} mb-1`}>Reacciones</p>
            <p className={`text-secondary ${styles.fecha} mb-1`}>{reacciones}</p>
          </div>
        </div>
      </div>
    </>
  );
};
