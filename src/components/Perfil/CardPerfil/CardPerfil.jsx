import React from "react";
import {DataSection} from "./DataSection/DataSection";
import styles from "./CardPerfil.module.css";
import useFetch from "../../../Hooks/useFetch";

export const CardPerfil = ({tipo}) => {
   // const {nombre, mail, linkedin, ingreso, coordinadoras} = useFetch("http://localhost:3000/usuarios/1")
   const {data, loading} = useFetch("http://localhost:3000/usuarios/1");
   if(loading){
    return <div>Cardando datos...</div>
   }
   const {nombre, mail, linkedin, ingreso, coordinadoras, centro, tematica} = data;

  return (
    <>
    {
        (tipo === "datos") ? (
        <div className={`container-fluid p-3 px-2 rounded-3 ${styles.perfilCard}`}>
        <div className="d-flex justify-content-start gap-2 flex-xxl-column align-items-xxl-center">
            <img src="src/assets/Ellipse.jpg" className={`rounded-circle  ${styles.imgCard}`}></img>
            <p className="text-white fw-bold mb-xxl-2">{nombre}</p>
        </div>
    
        <div className={`data-container ${styles.dataContainer} rounded-3 p-2 d-flex flex-column gap-2 `}>
          <DataSection titulo="Nombre" value={nombre}></DataSection>
          <DataSection titulo="Mail" value={mail} editable={true}></DataSection>
          <DataSection titulo="Linkedin" value={linkedin} editable={true}></DataSection>
        </div>
      </div>
        ) :  (

            <div className={`container-fluid p-3 px-2 rounded-3 ${styles.perfilCard}`}>
            <div className="d-flex justify-content-start w-100 gap-2 align-items-start flex-xxl-column align-items-xxl-center">
                <img src="src/assets/Ellipse3.png" className={`rounded-circle  ${styles.imgCard} `}></img>
                <div className="d-flex justify-content-center flex-column align-items-xxl-center">
                    <p className="text-white fw-bold">{centro}</p>
                    <p className={`${styles.dataTematica}  mb-xxl-2` }>{tematica}</p>
                </div>
              
            </div>
        
            <div className={`data-container ${styles.dataContainer} rounded-3 p-2 d-flex flex-column gap-2 `}>
              <DataSection titulo="Fecha de ingreso" value={ingreso} ></DataSection>
              <DataSection titulo="Coordinadoras" value={coordinadoras} ></DataSection>
          
            </div>
          </div>


        )
    }

    </>
  );
};


