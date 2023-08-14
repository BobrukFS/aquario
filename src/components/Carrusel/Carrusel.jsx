import styles from './Carrusel.module.css'
import profilePicture from '../../assets/profilePicture.png'

const Carrusel = () =>{
    return(
        <div>
            
            <div className={`${styles.flechas}`}>
                <div className={`${styles.flecha} ${styles.upper}`}></div>
                <div className={`${styles.flecha} ${styles.bottom}`}></div>
            </div>

            <div className={`${styles.containerCarrusel}`}>
                <div className={`${styles.testimonio} ${styles.upperCard}`}>
                    <div className={`${styles.datos}`}>
                        <img src={profilePicture} alt="foto de perfil generica" />
                        <h3 className={`${styles.title}`}>Juan</h3>
                    </div>
                    <div className={`${styles.bar}`}>
                        <div className={`${styles.emptybar}`} />
                        <div className={`${styles.filledbar}`} />
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, libero. Alias repudiandae quaerat ipsa voluptas laborum nostrum quos iure aliquam laudantium voluptatem saepe fugiat sequi earum a, blanditiis temporibus commodi?</p>
                    </div>
                </div>

                <div className={`${styles.testimonio} ${styles.middleCard}`}>
                    <div className={`${styles.datos}`}>
                        <img src={profilePicture} alt="foto de perfil generica" />
                        <h3 className={`${styles.title}`}>Pedro</h3>
                    </div>
                    <div className={`${styles.bar}`}>
                        <div className={`${styles.emptybar}`} />
                        <div className={`${styles.filledbar}`} />
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, libero. Alias repudiandae quaerat ipsa voluptas laborum nostrum quos iure aliquam laudantium voluptatem saepe fugiat sequi earum a, blanditiis temporibus commodi?</p>
                    </div>
                </div>
     
                <div className={`${styles.testimonio} ${styles.bottomCard}`}> 
                    <div className={`${styles.datos}`}>
                        <img src={profilePicture} alt="foto de perfil generica" />
                        <h3 className={`${styles.title}`}>Juan</h3>
                    </div>
                    <div className={`${styles.bar}`}>
                        <div className={`${styles.emptybar}`} />
                        <div className={`${styles.filledbar}`} />
                    </div>
                </div> 

            </div>
        </div>
    )
}

export default Carrusel