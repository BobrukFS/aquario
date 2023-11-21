import styles from "./Forum.module.css";
import ventana from "../../assets/window.png";
import speechBubble from "../../assets/speechbubble.png";
import arrow from "../../assets/arrow.png";
import { ForumPost } from "./ForumPost";
import { useState } from "react";
import { Modal } from "./Modal";
import { useAuth } from "../../provider/authProvider";
import { Navigate } from "react-router-dom";
import useFetchForo from "../../Hooks/useFetchForo";
import { Navbar } from "../Navbar/Navbar";
import Header from "../Header/Header";
import { API_URL } from "../../utilities/constants";

export const Forum = () => {
  const [showModal, setShowModal] = useState(false);
  const { data, loading, error } = useFetchForo(`${API_URL}/api/ForumThread`);

  const { token } = useAuth();

  // Check if the user is authenticated
  if (!token) {
    // If not authenticated, redirect to the login page
    return <Navigate to="/" />;
  }

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <button onClick={openModal} className={styles.button}>
              Nueva publicación
            </button>
            <ul className="mt-5">
              <li className={styles.liContainer}>
                <img src={speechBubble} alt="Speech Bubble" />
                Todas las publicaciones
              </li>
              <li className={styles.liContainer}>
                <img src={ventana} alt="Window" />
                Temas
              </li>
            </ul>
            <ul className="mt-5">
              <li className={styles.liContainer}>
                <div className={`${styles.rect} ${styles.blue}`}></div>
                <span>Programación</span>
              </li>
              <li className={styles.liContainer}>
                <div className={`${styles.rect} ${styles.darkGreen}`}></div>
                <span>Ayuda</span>
              </li>
              <li className={styles.liContainer}>
                <div className={`${styles.rect} ${styles.orange}`}></div>
                <span>Material</span>
              </li>
              <li className={styles.liContainer}>
                <div className={`${styles.rect} ${styles.lightGreen}`}></div>
                <span>Avisos</span>
              </li>
              <li className={styles.liContainer}>
                <div className={`${styles.rect} ${styles.grey}`}></div>
                <span>Eventos</span>
              </li>
            </ul>
          </div>
          <div className="col-md-8">
            <div className={styles.recentButton}>
              Recientes <img src={arrow} alt="" />
            </div>
            {loading && loading}
            {data &&
              data.map((x, i) => (
                <ForumPost
                  key={i}
                  title={x.title}
                  id={x.threadId}
                  tag={x.tag}
                  comments={x.reply.length}
                />
              ))}
          </div>
        </div>
        <Modal show={showModal} onCloseButtonClick={closeModal} />
      </div>
    </>
  );
};
