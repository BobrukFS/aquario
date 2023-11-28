import { useEffect } from "react";
import styles from "./avisos.module.css";
import { useState } from "react";
import useFetch from "../../../Hooks/useFetch";
import axios from "axios";
import { Aviso } from "./Aviso/Aviso";
import { API_URL } from "../../../utilities/constants";
export const Avisos = () => {
  const [inputs, setInputs] = useState({
    name: "",
    image: "",
    title: "",
  });

  const [tableData, setTableData] = useState([]);
  const [editClick, setEditClick] = useState(false);
  const [editIndex, setEditIndex] = useState("");
  const [avisoId, setAvisoId] = useState();

  const [avisos, setAvisos] = useState();
  const [submit, setSubmit] = useState(false);
  const [openModal, setOpenModal] = useState(true);
  const [inputEdit, setInputEdit] = useState();

  axios.get(`${API_URL}api/Avisos`).then((res) => {
    setAvisos(res.data);
  });


  useEffect(() => {
   console.log("a")
  }, [ openModal]);

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
      [e.target.image]: e.target.value,
      [e.target.title]: e.target.title,
    });
  };

  const handleSubmit = (e, id) => {
    e.preventDefault();

    if (!inputs.name.trim()) {
      return;
    }
    if (editClick) {
      axios
        .put(`http://localhost:3000/avisos/${avisoId}`, {
          name: inputs.name,
          image: inputs.image,
          title: inputs.title,
        })
        .then(() => {
          axios.get("http://localhost:3000/avisos").then((res) => {
            setAvisos(res.data);
            Swal.fire("Editado", "El aviso ha sido editado.", "success");
          });
        })
        .catch((error) => {
          console.error("Error al editar aviso:", error);
          Swal.fire("Error", "Hubo un problema al editar el aviso", "error");
        })
        .finally(() => {
          setEditClick(false);
          setInputs({ name: "", image: "", title: "" });
          setOpenModal(false);
        });
    } else {
      /*const newAviso = {
        Title: inputs.title,
        Content: inputs.name,
        Image: inputs.image,
        
      };*/

      const formData = new FormData();
      formData.append("Content", inputs.name);
      formData.append("Image", inputs.image);
      formData.append("Title", inputs.title);
      console.log(inputs)

      setInputs({
        name: "",
        image: "",
        title: "",
      });

      axios.post(`${API_URL}api/Avisos`, formData, {headers: {
        'Content-Type': 'multipart/form-data',
      }}).then((res) => {
        // Handle response if needed
        /*axios.get(`${API_URL}api/Avisos`).then((res) => {
          const data = res.data;
          setAvisos(data);
          console.log(res);
        });*/
      });
    }
  };

  return (
    <div className={`${styles.ancho} px-sm-5 p-2 py-sm-3`}>
      <div className="my-2">
        <h2>Avisos</h2>
        <button
          className={`w-auto p-sm-2 p-1 px-2 border-0 rounded-2 d-flex align-items-center gap-2 bg-primary`}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <p className="text-white font-xs">Crear un nuevo aviso</p>
          <i className="fa-solid fa-plus text-white"></i>
        </button>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content d-flex align-items-start flex-column p-4">
            <button
              type="button"
              className="btn-close align-self-end"
              onClick={() => {
                setInputs({
                  name: "",
                  image: "",
                  title: "",
                });
              }}
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>

            <form
              onSubmit={handleSubmit}
              action=""
              className="d-flex flex-column align-items-start w-100"
            >
              <div className="modal-header px-0 d-flex flex-column align-items-start w-100">
                <p className="fs-5 fw-bold">Titulo</p>
                <input
                  name="title"
                  type="text"
                  value={inputs.title}
                  onChange={handleChange}
                  className={`form-control p-2 m-0 w-100`}
                  id="message-text"
                  placeholder="Escribe el titulo de tu aviso"
                  maxLength={30}
                  required
                ></input>
              </div>

              <div className="modal-body w-100">
                <div>
                  <p className="fs-5 fw-bold">Descripcion</p>
                  <textarea
                    name="name"
                    type="text"
                    value={inputs.name}
                    onChange={handleChange}
                    className={`${styles.textarea} form-control w-100`}
                    id="message-text"
                    placeholder="¿Qué quieres comunicar?"
                    required
                  ></textarea>
                </div>
                <div className="my-5">
                  <input
                    type="file"
                    value={inputs.image}
                    id="formFileMultiple"
                    name="image"
                    className="form-control"
                    onChange={handleChange}
                    single
                  />
                </div>
              </div>
              <div className="modal-footer align-self-end">
                <button
                  onClick={(e) => handleSubmit(e)}
                  className={`btn btn-primary ${
                    (editClick &&
                      inputs.name === inputEdit.name &&
                      inputs.image === inputEdit.image &&
                      inputs.title === inputEdit.title) ||
                    (!editClick &&
                      (!inputs.name.trim() || !inputs.title.trim()))
                      ? "bg-secondary border-secondary"
                      : ""
                  }`}
                  data-bs-dismiss="modal"
                  disabled={
                    (editClick &&
                      inputs.name === inputEdit.name &&
                      inputs.image === inputEdit.image &&
                      inputs.title === inputEdit.title) ||
                    (!editClick &&
                      (!inputs.name.trim() || !inputs.title.trim()))
                  }
                >
                  {editClick ? "Guardar" : "Enviar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column align-items-start w-100">
        {avisos &&
          avisos.map((e) => {
            return (
              <Aviso
                setAvisos={setAvisos}
                id={e.id}
                title={e.title}
                desc={e.content}
                img={e.imageUrl}
                setOpenModal={setOpenModal}
                handleSubmit={handleSubmit}
                setEditClick={setEditClick}
                inputs={inputs}
                setInputs={setInputs}
                setAvisoId={setAvisoId}
                setInputEdit={setInputEdit}
              ></Aviso>
            );
          })}
      </div>
    </div>
  );
};
