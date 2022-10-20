import React from 'react'
import Card from './Card'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

const cards = [
    {
        id: 1,
        title: 'Carlos',
        image: image1,
        descripcion: 'Hola 1'
    },
    {
        id: 2,
        title: 'Yeni',
        image: image2,
        descripcion: 'Hola 2'
    },
    {
        id: 3,
        title: 'Foster',
        image: image3,
        descripcion: 'Hola 3'
    }
]

function Cards() {
  return (
    <div className='container'>
        <div className='row'>
            {
                cards.map(card=>(

                    <div className='col-md-4' key={card.id}>
                        <Card title={card.title} imageSource={card.image} descripcionCard={card.descripcion}/>
                    </div>

                ) )
            }
        </div>
      
    </div>
  )
}

export default Cards
