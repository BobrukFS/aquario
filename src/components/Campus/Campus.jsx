import React from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../Header/Header";
import { Navbar } from "../Navbar/Navbar";
import {Avisos} from "./Avisos/Avisos";
import {Participantes} from "../Participantes/Participantes";
import styles from "./campus.module.css";
import { useState } from "react";

const Campus = () => {
 const [seccion, setSeccion] = useState("avisos");

  return (
    <div className={`${styles.ancho}`}>
      <Header />
      <Navbar setSeccion={setSeccion}/>
      {seccion == "participantes" ? <Participantes /> : seccion == "calendario" ? "calendario" : <Avisos></Avisos>}
    </div>
  );
};

export default Campus;