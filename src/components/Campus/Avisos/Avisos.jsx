import styles from "./avisos.module.css";
import { Header } from "../../Header/Header";
import { Navbar } from "../../Navbar/Navbar";

import { Aviso } from "./Aviso";
import useFetch from "../../../Hooks/useFetch";

export const Avisos = () => {
  const { data, loading } = useFetch("http://localhost:3000/avisos");

  return (
    <div>
     
     {data && data.map((e, index)=>{
      return(
        <Aviso key={index} titulo={e.titulo} fecha={e.fecha} hora={e.hora} creador={e.creador} contenido={e.contenido} ></Aviso>
      )
     })
     }

      
    </div>
  );
};
