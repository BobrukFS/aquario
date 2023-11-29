import styles from "./Modal.module.css";
import { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../utilities/constants";

export const Modal = ({ show, onCloseButtonClick }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [form, setForm] = useState({});
  const [selectedOption, setSelectedOption] = useState("Programación");

  const modalRef = useRef(null);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm((x) => ({ ...x, [name]: value }));
  };

  const handleSubmit = (event) => {
    const { title, content } = form;
    event.preventDefault();

    axios({
      method: "post",
      url: `${API_URL}api/ForumThread`,
      data: {
        title,
        content,
        tag: selectedOption,
      },
    })
      .then((resp) => {
        setData(resp);
        navigate(`/foro/${resp.data.threadId}`);
      })
      .catch(console.log);
  };

  const handleMouseDown = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onCloseButtonClick();
    }
  };

  useEffect(() => {
    if (show) {
      window.addEventListener("mousedown", handleMouseDown);
    }

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <div>
      <div ref={modalRef} className={`${styles.modalContainer}`}>
        <form
          className={`${styles.formModal} p-4 d-flex flex-wrap flex-column justify-content-between`}
          onSubmit={handleSubmit}
          action=""
        >
          <div>
            <label htmlFor="" className="fs-5 w-100">
              Título
            </label>
            <input
              onChange={handleChange}
              className="w-100 m-0"
              type="text"
              name="title"
              id="title"
              value={form.title || ""}
            />
            <label className="mt-3" htmlFor="">
              Contenido
            </label>
            <textarea
              onChange={handleChange}
              className="w-100 p-2 border rounded-2 font-info"
              style={{ resize: "none", height: 150 }}
              type="text"
              name="content"
              placeholder="Contenido.."
              value={form.content || ""}
            />

            <div className="d-flex flex-column align-items-center">
              <label className="mt-3 align-self-center mb-2" htmlFor="">
                Tags
              </label>
              <select
                className="p-1 font-xs"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                name="tags"
                id="tags"
              >
                <option value="Programación">Programación</option>
                <option value="Ayuda">Ayuda</option>
                <option value="Material">Material</option>
                <option value="Avisos">Avisos</option>
                <option value="Eventos">Eventos</option>
              </select>
            </div>
          </div>
          <div className={`${styles.formButton} d-flex gap-4`}>
            <button
              className={`${styles.buttonCancel} bg-secondary text-white`}
              type="button"
              onClick={onCloseButtonClick}
            >
              Cancelar
            </button>
            <button className={styles.button} type="submit">
              Publicar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
