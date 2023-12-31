import React, { useState } from 'react'
import style from './DataSection.module.css';


export const DataSection = ({titulo, value = "*******", editable,}) => {
  
  const [isEditable, setIsEditable] = useState(false);
  const [inputIsVisible, setInputIsVisible] = useState(false);
  const [valueInput, setValueInput] = useState(value);
  const [valueP, setValueP] = useState(value)
  
  function editar(){
    if(inputIsVisible == false){
      setInputIsVisible(true);
    } else{
      setInputIsVisible(false);
      setValueP(valueInput);
      
    }
  }

  return (
    <>
         <div className='d-flex justify-content-between align-items-end'>
            <div>
              <p className={`${style.dataTitle}`}>{titulo}</p>
              <div > {(typeof value === "object") ? value.map((e, index)=>{
                return <p key={index} className={`${style.dataValue}`}>{e}</p>
              })
              : (inputIsVisible ? <input className={`${style.dataValue} px-2 rounded-2`} defaultValue={valueInput} onChange={(e)=>setValueInput(e.target.value)}/> : <p className={`${style.dataValue}`}>{valueP}</p>)
            }
              </div>
            </div>
            {editable && 
               <button className={`${style.dataButton} rounded-3 px-2 py-1`} type="button" onClick={editar} > {inputIsVisible ? "Listo" : "Editar"}</button>
            }
        </div>

        
    </>
  )
}
