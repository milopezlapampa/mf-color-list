import React from 'react'
import Swal from 'sweetalert2'

const ColorList = ({ colorList = [] }) => {

  const handleCopyColor = (color) => {

    navigator.clipboard.writeText(color);

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `Color: ${color} copiado!`,
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
    })
  };

  return (
    <div >
        <div className='list-group text-center'>
          {colorList.length > 0 ? (
            colorList.map((color, index) => (
          <button key={index} type='button' aria-current="true" 
          title='copiar'
          style={{ background: color,
            fontWeight: "bolder"
          }}
          onClick={() => handleCopyColor(color)}
          className='list-group-item list-group-item-action text-white'>
          {color}
          </button> 
          ))
        ) : (
          <div className='alert alert-danger' role='alert'>
            <b>Sin Elementos</b>
          </div>
        )}
        </div>
    </div>
  )
}



export default ColorList
