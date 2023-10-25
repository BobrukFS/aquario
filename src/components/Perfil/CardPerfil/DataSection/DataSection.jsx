import React from 'react'
import style from './DataSection.module.css';
const DataSection = ({titulo, value, editable}) => {

  return (
    <>
         <div className='d-flex justify-content-between align-items-end'>
            <div>
              <p className={`${style.dataTitle}`}>{titulo}</p>
              <div > {(typeof value === "object") ? value.map((e, index)=>{
                return <p key={index} className={`${style.dataValue}`}>{e}</p>
              })
              : <p className={`${style.dataValue}`}>{value}</p>
            }
              </div>
            </div>
            {editable &&
               <button className={`${style.dataButton} rounded-3 px-2 py-1`} type="button">Editar</button>
            }
           
        </div>
    </>
  )
}

export default DataSection