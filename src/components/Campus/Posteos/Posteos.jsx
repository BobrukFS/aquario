import styles from "./posteos.module.css";


export const Posteos = () => {

   
  return (

    <div>
      
          <div className = {styles.posteo}>
        <img src="src/assets/Ellipse.jpg" alt="" />
            <input className={styles.text} id="message-text" placeholder= "Crear un nuevo aviso" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"></input>
          </div>
    
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">New message</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        
          <div className="mb-3">
            <textarea className="form-control" id="message-text" placeholder="¿Qué quieres comunicar?"></textarea>
          </div>

          <i className="bi bi-image"></i>
          <i className="bi bi-calendar3"></i>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
  </div>
  


  </div>

  
  )
}
