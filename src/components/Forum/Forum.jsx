import styles from './Forum.module.css';
import ventana from '../../assets/window.png';
import speechBubble from '../../assets/speechbubble.png';
import { ForumPost } from './ForumPost'

export const Forum = () => {
  return (
    <div className="container">
        <div className="row">
        <div className="col-4">
            <button className={styles.button}>Nueva publicación</button>
        <ul>
            <li className={styles.liContainer}><img src={speechBubble} alt="Speech Bubble" />Todas las publicaciones</li>
            <li className={styles.liContainer}><img  src={ventana} alt="Window" />Temas</li>
        </ul>
        <ul>
            <li className={styles.liContainer}><div className={`${styles.rect} ${styles.blue}`} ></div>Programación</li>
            <li className={styles.liContainer}><div className={`${styles.rect} ${styles.darkGreen}`} ></div>Ayuda</li>
            <li className={styles.liContainer}><div className={`${styles.rect} ${styles.orange}`} ></div>Material</li>
            <li className={styles.liContainer}><div className={`${styles.rect} ${styles.lightGreen}`} ></div>Avisos</li>
            <li className={styles.liContainer}><div className={`${styles.rect} ${styles.grey}`} ></div>Eventos</li>
        </ul>
        </div>
        <div className="col-8">
          <ForumPost/>
          <ForumPost/>
        </div>  
        </div>
    </div>
  )
}
