import styles from "./posteos.module.css";
import {useState} from "react"



export const Posteos = () => {

  const [inputs , setInputs] = useState({
   name: "",
   image: "",
  });

  const [tableData, setTableData]= useState([]);
  const [editClick, setEditClick] = useState(false);
  const [editIndex, setEditIndex] = useState("");
  
  const handleChange=(e)=> {
    setInputs(
      {
        ...inputs,
        [e.target.name]: e.target.value,
        [e.target.image]: e.target.value,

      }
    )

  }

  const handleSubmit=(e)=>{
    e.preventDefault();

    if (!inputs.name.trim()) {
     
      return;
    }

    if (editClick) {
      const tempTableData = tableData;
      Object.assign(tempTableData[editIndex], inputs)
      setTableData([...tempTableData])
      setEditClick(false)
      setInputs(
        {  name:"",
           image:"",
        })
    } else {
      setTableData([ ...tableData, inputs]);
      setInputs(
      {
        name:"",
        image:"",
      }
    )
    }
  }
 

  const handleDelete=(index)=>{
    const filterData = tableData.filter((item,idx)=>idx !== index)
    setTableData(filterData)
  };

  const handleEdit = (index)=>{
    const tempData = tableData[index];

    setInputs({
      name:tempData.name,
      image:tempData.image,
  })
    setEditClick(true);
    setEditIndex(index);  
  };

 

  return (

  <div>
        <div className = {styles.posteo}>
        <img src="src/assets/Ellipse.jpg" alt="" />
            
            <button className={styles.text}   
            data-bs-toggle="modal" 
            data-bs-target="#exampleModal" 
            ><p>Crear un nuevo aviso</p></button>
          </div>

  
    
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    
    <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5>Aqui va el perfil de la persona</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>


      <form onSubmit={handleSubmit}
      action="">
      <div className="modal-body ">

          <div>
            <textarea 
            cols="50"
            name= "name"
            type= "text"
            value={inputs.name}
            onChange={handleChange}
            className={`"form-control" ${styles.textareaM}`}
            id="message-text"
            placeholder="¿Qué quieres comunicar?"
            >

            </textarea>
          </div>

          {/* <div className="mb-3">
          <button  htmlFor="formFileMultiple" ><i><img src="src/assets/images.png" width={'35px'} alt="" /></i></button>
          <input
            type="file"
            value={inputs.image}
            id="formFileMultiple"
            name="image"
            className="form-control"
            
            onChange={handleChange}
            multiple
          />
          </div> */}
  

      </div>
      <div className="modal-footer ">
      
        <button onClick={(e) => handleSubmit(e)}  className="btn btn-primary" data-bs-dismiss="modal" disabled= {!inputs.name.trim()}>
          {editClick ? "Modificar":"Enviar"}
        </button>
      </div>
    </form>
    </div>
  </div>
  </div>
  


  <article>

    <div className={styles.container}>
      {
      tableData.map((item , idx)=>(
        <div key={idx} className={styles.avisos}>
          
          <p>{item.name}</p>
          {/* {item.image && <img src={item.image} alt="Imagen" />} */}
    
  <div className="buttons">
   <div className="btn-group">
    <button type="button" className="btn btn-white " data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
    <img src="src/assets/dot_menu.png" width={'20px'} alt="" />
    </button>
   <ul className="dropdown-menu dropdown-menu-lg-end">
     <li>
      <button onClick={() => handleEdit(idx)} className="dropdown-item" type="button" data-bs-toggle="modal"
  data-bs-target="#exampleModal"><img src="src/assets/editar-texto.png" width={'15px'} alt=""/> Editar</button></li>
     <li><button onClick={()=>handleDelete(idx)} className="dropdown-item" type="button"><img src="src/assets/basura.png" width={'15px'} alt="" /> Eliminar</button></li>
  </ul>
   </div>
  </div>
       </div>
  ))
  }
    </div>
  </article>


  </div>

  )
}

