import React from "react";
import DataSection from "./DataSection/DataSection";


const CardPerfil = ({ nombre, mail, linkedin, telefono }) => {
  return (
    <>
      <div className="container-fluid perfil-card">
        <div className="data-container">
          <DataSection></DataSection>
        </div>
      </div>
    </>
  );
};

export default CardPerfil;
