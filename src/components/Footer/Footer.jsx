import styles from './Footer.module.css'
import logo from '../../assets/LogoFundacionPescar.png'

const Footer = () => {
    return <div className={styles.container}>
        
        <div className={styles.column}>
            <h2 className={`${styles.title} mb-5`}>Contacto</h2>
            <p>Juncal 971 PB</p>
            <p>C1062ABG</p>
            <p>Ciudad de Buenos Aires, Argentina</p>
            <p className='mt-3'>Tel: +54 11 4812 1818</p>
            <p className='mt-3'><a  href="mailto:pescar@pescar.org.ar">pescar@pescar.org.ar</a></p>
            <h2 className={`${styles.title} mt-5`}>Seguinos En</h2>
            <div className="redes">
            <a href="#"><i class="fa-brands fa-facebook fa-2xl"></i></a>
            <a href="#"><i class="fa-brands fa-twitter fa-2xl"></i></a>
            <a href="#"><i class="fa-brands fa-youtube fa-2xl"></i> </a>
            <a href="#"><i class="fa-brands fa-instagram fa-2xl"></i></a>
            <a href="#"><i class="fa-brands fa-linkedin fa-2xl"></i></a>
            </div>
        </div>
      
        <div className={styles.column}>
            <a href="https://www.instagram.com/fundacionpescar/">@fundacionpescar</a>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, velit quis obcaecati consequuntur doloremque esse sit ipsum, doloribus beatae natus nulla eligendi eos cum quam a. Incidunt iure voluptas quam.</p>
            </div>
            <div className={styles.column}>
            <p className={styles.uppercase}>"Si quieres quitarle el hambre a un hombre, dale un pez. Pero si Quieres que no vuelva a tener hambre, enseñale a pescar"</p>
            <p>Lao Tse</p>
            <img className={`${styles.logo} mt-5`} src={logo} alt="" />
            <p className={`${styles.copyright} mt-5`}>© Copyright 2021 - 2023 | Fundación Pescar | All Rights Reserved</p>
            </div>
       
    </div>
}

export default Footer;