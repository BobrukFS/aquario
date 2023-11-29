import React, { useState } from "react";
import { CardPublicaciones } from "../CardPublicaciones/CardPublicaciones";
import useFetch from "../../../Hooks/useFetch";
import { Header } from "../../Header/Header";
import styles from "../Publicaciones/Publicaciones.module.css";
export const Publicaciones = () => {
  const { isLogged, setIsLogged } = useState(true);
  return (
    <>
      <Header></Header>
    </>
  );
};
