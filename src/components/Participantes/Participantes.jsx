import React, { useState, useEffect } from "react";
import { Header } from "../Header/Header";
import { Navbar } from "../Navbar/Navbar";
import { Usuario } from "./Usuario/Usuario";
import styles from "./Participantes.module.css";
import axios from "axios";
import { API_URL } from "../../utilities/constants";

export const Participantes = () => {
  const [alumnos, setAlumnos] = useState([]);
  const [filtro, setFiltro] = useState("todos");
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    axios
      .get(`${API_URL}api/Auth`)
      .then((x) => setAlumnos(x.data.filter((x) => x.profilePictureUrl)));
  }, []);

  useEffect(() => {
    // Actualizar alumnos cuando cambie el filtro o la búsqueda
    if (filtro === "todos") {
      // Filtrar por búsqueda si hay texto
      const alumnosFiltrados = busqueda
        ? alumnos.filter((alumno) => {
            const palabrasBusqueda = busqueda.toLowerCase().split(" ");
            return palabrasBusqueda.every(
              (palabra) =>
                alumno.firstName.toLowerCase().includes(palabra) ||
                alumno.lastName.toLowerCase().includes(palabra)
            );
          })
        : alumnos;
      setAlumnos(alumnosFiltrados);
    } else {
      // Filtrar alumnos según el tipo seleccionado (coordinador o alumno)

      const alumnosFiltrados = alumnos.filter((alumno) => {
        return alumno.isAlumno
          ? "Alumnos"
          : "Coordinadoras" === filtro &&
              (busqueda
                ? busqueda
                    .toLowerCase()
                    .split(" ")
                    .every(
                      (palabra) =>
                        alumno.firstName.toLowerCase().includes(palabra) ||
                        alumno.lastName.toLowerCase().includes(palabra)
                    )
                : true);
      });
      setAlumnos(alumnosFiltrados);
    }
  }, [filtro, busqueda]);

  const handleSelectChange = (e) => {
    setFiltro(e.target.value);
  };

  const handleInputChange = (e) => {
    setBusqueda(e.target.value);
  };

  return (
    <div className={`${styles.fondo2} d-flex flex-column align-items-center`}>
      <section
        className={`p-3 p-sm-5 ${styles.fondo} d-flex flex-column justify-content-center`}
      >
        <div className="d-flex flex-column align-items-between">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <h2 className="m-0">Participantes</h2>
              <p className="text-secondary font-info">
                Total: {alumnos && alumnos.length}
              </p>
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
          <div
            className={`${styles.input} align-self-sm-end bg-white d-flex my-3 mb-4`}
          >
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
            <p className="col-4 p-0 text-secondary text-center">Rol</p>
          </div>

          <div className="d-flex w-100 flex-column align-items-center bg-white rounded-3 my-2">
            {alumnos &&
              alumnos.map((e, index) => (
                <Usuario
                  key={index}
                  nombre={e.firstName}
                  apellido={e.lastName}
                  role={e.isAlumno ? "Alumno" : "Coordinador/a"}
                  imagen={e.profilePictureUrl}
                  linkedinUrl={e.linkedinUrl}
                />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};
