
import styles from "./avisos.module.css";
import Aviso1 from "../../../assets/imgAviso1.jpg";



export const Aviso = ({contenido, fecha, hora, creador, titulo}) => {
   
    return(
    
           
         
        <article className={styles.avisos}>
       
          <h2>{titulo}</h2>
          <p>


            {contenido}
          </p>
        </article>
            
       
       

);
};