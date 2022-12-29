import React from 'react'
import {BsCartCheckFill, BsFillCartXFill} from 'react-icons/bs'
import "./Modal.sass"
import { Upgrade } from './Upgrade';
interface Props{
    id: string;
}
export const Modal = ({id}:Props) => {
  return (
    <>
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog full d-flex
        align-items-center justify-content-center">
            <div className="modal-content modal-width">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">{id}</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex modal-description">
                <div>
                    <img src="https://cursodohamburguerperfeito.com.br/wp-content/uploads/2021/08/Burger-280931852.png" alt="product" className='w-75'/>
                </div>
                <div className='ProductOptions'>
                    <h4 className='bg-warning'>Ingredientes</h4>
                    <ul>
                        <li>Fritas 1kg (cominho)</li>
                        <li>Rês</li>
                        <li>Frango</li>
                        <li>Lombo</li>
                        <li>Cebola</li>
                        <li>Queijo</li>
                        <li>Chimichurri</li>
                    </ul>
                    <span>
                        <strong>
                            Serve até 4 pessoas.
                        </strong>
                    </span>
                    <div className='Upgrade mt-3'>
                        <h4 className='bg-warning'>Deixar mais poderoso</h4>
                        <Upgrade/>
                        <Upgrade/>
                        <Upgrade/>
                        <Upgrade/>
                        <Upgrade/>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <div className='ProductQuantity'>
                    <span>R$ 74,00</span>
                </div>
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                    <BsFillCartXFill color='white' fontSize={'1.5rem'}/>
                </button>
                <button type="button" className="btn btn-success">
                    <BsCartCheckFill color='white' fontSize={'1.5rem'}/>
                </button>
            </div>
            </div>
        </div>
        </div>
    </>
  )
}
