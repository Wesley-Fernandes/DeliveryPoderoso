import React from 'react'
import "./Item.sass"
import { Modal } from '../Modal'

interface Props {
  setItem: any
}
export const Item = ({setItem}:Props) => {
  const urlLink = "https://cursodohamburguerperfeito.com.br/wp-content/uploads/2021/08/Burger-280931852.png"
  return (
    <div className="m-3 ProductItem"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    onClick={()=>{
      setItem("Hamburger")
    }}
    >
        <div className='ProductInfo'>
          <h3>Hamburguer de ciri</h3>
          <p>Um hamburguer suculento feito pelo mais gracioso artistas da culinaria contemporanea, Bob esponja. </p>
          <span>R$ 30,00</span>
        </div>
        <div className='ProductImage'>
          <img src={urlLink} alt="product"/>
        </div>
    </div>
  )
}
