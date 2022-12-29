import React from 'react'
import logo from '../../Images/CP.png'
import Styles from "./Styles.js"
import { Input } from '../../Components/Input'
import { Button} from '../../Components/Button'
import {useNavigate} from 'react-router-dom'


export const Home:React.FC = ():React.ReactElement => {
  const [value, setValue] = React.useState<string|number>()

  const navigate = useNavigate()
  
  return (
    <div className={Styles.backgroundClass} style={Styles.backgroundStyle}>
      <div className={Styles.hud} style={Styles.hudStyles}>

        <img src={logo} alt="logotipo" className={Styles.img}/>

        <Input label='exemplo@gmail.com'
        onChange={setValue} key="email"
        simbol='E-MAIL' type='e-mail'/>

        <Input label='*******'
        onChange={setValue} key="password"
        simbol='SENHA' type='password'/>

        <hr className='border border-light w-100'/>
        
        <Button label='Fazer login' key="login" style={Styles.button} />

        <Button label='Criar conta' key="register"
          style={Styles.button} onClick={()=>{navigate("/register")}}/>
      </div>
    </div>
  )
}
