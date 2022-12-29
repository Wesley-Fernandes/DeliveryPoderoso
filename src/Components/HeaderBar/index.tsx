import React from 'react'
import Styles from './Styles'
import logo from "../../images/CP.png"
import {HiMenuAlt1} from 'react-icons/hi'

import { SideBar } from './SideBar'

export const HeaderBar:React.FC = ():JSX.Element => {
  return (
    <nav className={Styles.main} data-bs-theme="dark" style={Styles.Base}>
      <SideBar/>
      <img src={logo} alt="logotipo" style={Styles.logo}/>
      <div className='OptionsMobile'>
        <button className="btn me-1" type="button" data-bs-toggle="offcanvas"  data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        <HiMenuAlt1 color='#000000' fontSize={"2rem"}/>
        </button>
      </div>
    </nav>
  )
}
