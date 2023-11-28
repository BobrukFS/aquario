import React, { useState, useEffect } from "react";
import { Header } from "../Header/Header";
import { Navbar } from "../Navbar/Navbar";
import { Usuario } from "./Usuario/Usuario";
import styles from "./Participantes.module.css";
import useFetch from "../../Hooks/useFetch";

export const Participantes = () => {
  const { data } = useFetch("http://localhost:3000/alumnos");

  const [alumnos, setAlumnos] = useState(data);
  const [filtro, setFiltro] = useState("todos");
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    // Actualizar alumnos cuando cambie el filtro o la búsqueda
    if (filtro === "todos") {
      // Filtrar por búsqueda si hay texto
      const alumnosFiltrados = busqueda
        ? data.filter((alumno) => {
            const palabrasBusqueda = busqueda.toLowerCase().split(" ");
            return palabrasBusqueda.every(
              (palabra) =>
                alumno.nombre.toLowerCase().includes(palabra) ||
                alumno.apellido.toLowerCase().includes(palabra)
            );
          })
        : data;
      setAlumnos(alumnosFiltrados);
    } else {
      // Filtrar alumnos según el tipo seleccionado (coordinador o alumno)
      
      const alumnosFiltrados = data.filter((alumno) => {
        return (
          alumno.rol === filtro &&
          (busqueda
            ? busqueda
                .toLowerCase()
                .split(" ")
                .every(
                  (palabra) =>
                    alumno.nombre.toLowerCase().includes(palabra) ||
                    alumno.apellido.toLowerCase().includes(palabra)
                )
            : true)
        );
      });
      setAlumnos(alumnosFiltrados);
    }
  }, [data, filtro, busqueda]);

  const handleSelectChange = (e) => {
    setFiltro(e.target.value);
  };

  const handleInputChange = (e) => {
    setBusqueda(e.target.value);
  };

  return (
    <div className={`${styles.fondo2} d-flex flex-column align-items-center`}>
    
      <section className={`p-3 p-sm-5 ${styles.fondo} d-flex flex-column justify-content-center`}>
        <div className="d-flex flex-column align-items-between">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <h2 className="m-0">Participantes</h2>
            <p className="text-secondary font-info">Total: {data && data.length}</p>
          </div>
          <select
            name=""
            id=""
            className={`${styles.select}  text-white text-center border-0 p-1 rounded-2 font-info`}
            onChange={handleSelectChange}
          >
            <option value="todos">Todos</option>
            <option value="Coordinadora">Coordinadoras</option>
            <option value="Alumno">Alumnos</option>
          </select>
        </div>
        <div className={`${styles.input} align-self-sm-end bg-white d-flex my-3 mb-4`}>
          <input
            type="text"
            className={`${styles.search} py-1 border-0 font-xs w-100 px-2 fw-light`}
            placeholder="Busca a alguien en especifico aqui"
            onChange={handleInputChange}
            value={busqueda}
          />
          <button className={`${styles.button} px-2 py-1`}>
            <i className="text-white fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        </div>
       

       

        <div className="p-1 d-flex flex-column align-items-center container-fluid">
          <div className="row d-flex justify-content-center w-100">
            <div className="col-4 p-0" style={{ width: 50 }}></div>
            <p className="col-4 p-0 text-secondary text-center">Nombre</p>
            <p className="col-4 p-0 text-secondary">Rol</p>
          </div>

          <div className="d-flex w-100 flex-column align-items-center bg-white rounded-3 my-2">
            {alumnos &&
              alumnos.map((e, index) => (
                <Usuario
                  key={index}
                  nombre={e.nombre}
                  apellido={e.apellido}
                  role={e.rol}
                  imagen={e.imagen}
                />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};
