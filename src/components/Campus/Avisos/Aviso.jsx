
import styles from "./avisos.module.css";
import Aviso1 from "../../assets/imgAviso1.jpg";



export const Aviso = () => {
    return(
        <div>
           
           <article className={styles.avisos}>
            <img className={styles.img_avisos} src={Aviso1} alt="img Aviso 1" />
            <p>Ciberseguridad y Protección de Datos: Informa sobre las últimas tendencias en ciberseguridad, como métodos de prevención de ataques cibernéticos,casos de estudio sobre brechas de seguridad y consejos para proteger la información personal en línea.</p>
           </article>
            
       
        </div>

);
};