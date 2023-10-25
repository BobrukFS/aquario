import styles from "./avisos.module.css";
import {Header} from "../Header/Header";
import {Navbar} from "../Navbar/Navbar";
import Aviso1 from "../../assets/imgAviso1.jpg";
import Aviso2 from "../../assets/imgAviso2.png";


export const Avisos = () => {
    return(
        <div>
           <Header/>
           <Navbar/>
         <section className={styles.container}>
           <h3 className={styles.title_aviso}>Avisos</h3>

           

           <article className={styles.avisos}>
            <img className={styles.img_avisos} src={Aviso1} alt="img Aviso 1" />
            <p>Ciberseguridad y Protección de Datos: Informa sobre las últimas tendencias en ciberseguridad, como métodos de prevención de ataques cibernéticos,casos de estudio sobre brechas de seguridad y consejos para proteger la información personal en línea.</p>
           </article>

           <article className={styles.avisos}>
           <img className={styles.img_avisos} src={Aviso2} alt="img Aviso 2" />
            <p>Durante este camino, más de 7.900 personas han participado de nuestros programas de formación intensiva y más de 68.000 del resto de las iniciativas como talleres y becas. Más del 82% de nuestros egresados de programas de formación intensiva logra conseguir un empleo de calidad en los 6 meses posteriores a su graduaciónLa mejor forma de celebrarlo es redoblar nuestro compromiso para que más personas puedan capacitarse e insertarse en el mercado laboral.</p>
           </article>

           <article className={styles.avisos}>
            <img className={styles.img_avisos} src={Aviso1} alt="img Aviso 3" />
            <p>La ciberseguridad como argumento publicitario: riesgos y oportunidades.</p>
           </article>
            
         </section>
        </div>

);
};