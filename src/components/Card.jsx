import React from 'react'

const Card = ({nombre, animal}) => {
  return (
    <div className='card'>
      <h2>Completaste los datos correctamente!!!</h2>
      <h3>Nombre: {nombre}</h3>
      <h3>Animal: {animal}</h3>
    </div>
  )
}

export default Card