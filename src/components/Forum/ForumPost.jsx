import styles from './ForumPost.module.css'
import leftArrow from '../../assets/left.png'
import circle from '../../assets/ellipse.png'

export const ForumPost = () => {
  return (
    <div className={`${styles.contenedor} mt-3`}>
        <img className={styles.circle} src={circle} alt="" />
         <div className={styles.newPost}>
            <div className={styles.newPostTitle}>
              <span>¿La IA nos va a reemplazar?</span>
             </div>
              <div className={styles.newPostUser}>
                <img className={styles.arrow} src={leftArrow} alt="" /> 
                <span>naath posteo hace 2 horas</span>
              </div>
              
           </div>
           <div className={styles.forumTag}>Ayuda
          </div>
    </div>
  )
}
