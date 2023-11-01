import React, { useState } from "react";
import { CardPublicaciones } from "../CardPublicaciones/CardPublicaciones";
import useFetch from "../../../Hooks/useFetch";
import { Header } from "../../Header/Header";
import styles from "../Publicaciones/Publicaciones.module.css";
export const Publicaciones = () => {
    const { data, loading } = useFetch("http://localhost:3000/publicaciones");
    const {isLogged, setIsLogged} = useState(true);
  return (
    <>
    <Header></Header>
    <div className="p-3">
        <h2>Mis publicaciones</h2>
      <div className="d-flex flex-wrap gap-5 ">
        {data &&
          data.map((e, index) => {
            return (
            <div className={`${styles.contenedorPublis} `}>
              <CardPublicaciones
                key={index}
                tematica={e.tematica}
                contenido={e.contenido}
                titulo={e.titulo}
                reacciones={e.reacciones}
                comentarios={e.comentarios}
                fecha={e.fecha}
              ></CardPublicaciones>
           </div> );
          })}
      </div>
    </div>
    </> );
};
