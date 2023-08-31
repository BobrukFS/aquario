import styles from './ForumPost.module.css'
import leftArrow from '../../assets/left.png'
import circle from '../../assets/ellipse.png'
import speechBubble from '../../assets/speechbubble.png'
import { Link } from 'react-router-dom';

export const ForumPost = ({title, id, tag}) => {
 
  

  return (
    <div className={`${styles.contenedor} mt-5`}>
        <img className={styles.circle} src={circle} alt="" />
         <div className={styles.newPost}>
            <div className={styles.newPostTitle}>
              <span><Link to={`/foro/${id}`}>{title}</Link></span>
             </div>
              <div className={styles.newPostUser}>
                <img className={styles.arrow} src={leftArrow} alt="" /> 
                naath <span>posteo hace 2 horas</span>
              </div>
              
           </div>
           <div className={styles.forumTag}>{tag}
          </div>
          <div className={styles.comments}><img src={speechBubble} alt="" />5</div>
    </div>
  )
}
