import styles from "./Forum.module.css";
import ventana from "../../assets/window.png";
import speechBubble from "../../assets/speechbubble.png";
import arrow from "../../assets/arrow.png";
import { ForumPost } from "./ForumPost";
import { useEffect, useState } from "react";
import { Modal } from "./Modal";
import { useAuth } from "../../provider/authProvider";
import { Navigate } from "react-router-dom";
import useFetchForo from "../../Hooks/useFetchForo";
import { Navbar } from "../Navbar/Navbar";
import Header from "../Header/Header";
import { API_URL } from "../../utilities/constants";
import axios from "axios";

export const Forum = () => {
  const [showModal, setShowModal] = useState(false);
  const { data, loading, error, setData } = useFetchForo(
    `${API_URL}api/ForumThread`
  );

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

  const handleFilterTag = async (tag) => {
    await axios
      .get(`${API_URL}api/ForumThread`)
      .then((x) => setData(() => x.data));

    setData((prevData) => {
      return prevData.filter((x) => x.tag === tag);
    });
  };

  const resetPosts = async () => {
    await axios
      .get(`${API_URL}api/ForumThread`)
      .then((x) => setData(() => x.data));
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
              <li onClick={resetPosts} className={styles.liContainer}>
              <img src={ventana} alt="Window" />
                Todos los temas
              </li>
          
            </ul>
            <ul className="ms-1">
              <li
                onClick={() => handleFilterTag("Programación")}
                className={styles.liContainer}
              >
                <div className={`${styles.rect} ${styles.blue}`}></div>
                <span className="font-info ">Programación</span>
              </li>
              <li
                onClick={() => handleFilterTag("Ayuda")}
                className={styles.liContainer}
              >
                <div className={`${styles.rect} ${styles.darkGreen}`}></div>
                <span className="font-info ">Ayuda</span>
              </li>
              <li
                onClick={() => handleFilterTag("Material")}
                className={styles.liContainer}
              >
                <div className={`${styles.rect} ${styles.orange}`}></div>
                <span className="font-info ">Material</span>
              </li>
              <li
                onClick={() => handleFilterTag("Avisos")}
                className={styles.liContainer}
              >
                <div className={`${styles.rect} ${styles.lightGreen}`}></div>
                <span className="font-info ">Avisos</span>
              </li>
              <li
                onClick={() => handleFilterTag("Eventos")}
                className={styles.liContainer}
              >
                <div className={`${styles.rect} ${styles.grey}`}></div>
                <span className="font-info ">Eventos</span>
              </li>
            </ul>
          </div>
          <div className="col-md-8">
           {/* <div className={styles.recentButton}>
              Recientes <img src={arrow} alt="" />
  </div>*/}
            {loading && loading}
            {data &&
              data.map((x, i) => (
                <ForumPost
                  key={i}
                  title={x.title}
                  id={x.threadId}
                  tag={x.tag}
                  comments={x.reply.length}
                  userId={x.userId}
                  timeCreated={x.timeCreated}
                />
              ))}
          </div>
        </div>
        <Modal show={showModal} onCloseButtonClick={closeModal} />
      </div>
    </>
  );
};
