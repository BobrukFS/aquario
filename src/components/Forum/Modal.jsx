import styles from './Modal.module.css';
import { useEffect, useState, useRef, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Modal = ({ show, onCloseButtonClick }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [form, setForm] = useState({});
  const [selectedOption, setSelectedOption] = useState('Programación');

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
      method: 'post',
      url: 'https://localhost:7154/api/ForumThread',
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
      window.addEventListener('mousedown', handleMouseDown);
    }

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, [show]);

  if (!show) {
    return null;
  }

  return (
   <div className={styles.modalContainer}>
    <div ref={modalRef} className={styles.modalContainer}>
    <form onSubmit={handleSubmit} action="">
        <label htmlFor="">Título</label>
        <input onChange={handleChange} className="mt-3" type="text" name="title" id="title" value={form.title || ""} />
        <label className="mt-3" htmlFor="">Contenido</label>
        <textarea onChange={handleChange} className="mt-3" type="text" name="content" placeholder='Contenido..' value={form.content || ""} />
        <label className="mt-3" htmlFor="">Tags</label>
        <select value={selectedOption}  onChange={(e) => setSelectedOption(e.target.value)} name="tags" id="tags">
            <option value="Programacion">Programación</option>
            <option value="Ayuda">Ayuda</option>
            <option value="Material">Material</option>
            <option value="Avisos">Avisos</option>
            <option value="Eventos">Eventos</option>
        </select>
        <div className={`${styles.formButton} mt-3`} >
        <button  className={styles.button} type='submit'>Publicar</button>
        <button className={styles.buttonCancel} type='button' onClick={onCloseButtonClick}>Cancelar</button>
        </div>
    </form>
    </div>
    </div>
  )
}
