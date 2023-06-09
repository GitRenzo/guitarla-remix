import React from 'react'
import Guitarra from './guitarra'

function ListadoGuitarras({ guitarras }) {
  return (
    <main className='contenedor'>
      <h2 className="heading ">Nuestra coleccion</h2>
      {guitarras?.length && (
        <div className="guitarras-grid">
          {guitarras.map(guitarra => (
            <Guitarra
              key={guitarra?.id}
              guitarra={guitarra?.attributes}
            />
          ))}
        </div>
      )}
    </main>
  )
}

export default ListadoGuitarras