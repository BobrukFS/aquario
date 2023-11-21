import styles from "./avisos.module.css";
import {Aviso} from "../../Campus/Avisos/Aviso"

export const Avisos = () => {
  return (
    <div>
    

      <section className={styles.container}>
        {/* <h3 className={styles.title_aviso}>Avisos</h3> */}

        <Aviso/>
        <Aviso/>
          
      </section>
    </div>
  );
};
