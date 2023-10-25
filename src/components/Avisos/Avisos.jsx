import styles from "./avisos.module.css";
import {Header} from "../Header/Header";
import {Navbar} from "../Navbar/Navbar";
import { Aviso } from "./Aviso";



export const Avisos = () => {
    return(
        <div>
           <Header/>
           <Navbar/>
         <section className={styles.container}>
           <h3 className={styles.title_aviso}>Avisos</h3>

           <Aviso/>
           <Aviso/>
           <Aviso/>
            
         </section>
        </div>

);
};
