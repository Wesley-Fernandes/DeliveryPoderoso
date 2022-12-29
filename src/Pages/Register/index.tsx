import { Input } from '../../Components/Input'
import { Button } from '../../Components/Button'
import {useNavigate} from 'react-router-dom'
import logo from '../../Images/CP.png'
import { createAccount } from './Logic'
import { toast } from "react-toastify";
import Styles from "./Styles"
import React from 'react'


interface dataProps{
  nickname: string|number,
  email: string|number,
  password: string|number
}

export const Register:React.FC = ():JSX.Element => {
  const [password, setPassword] = React.useState<string|number>("")
  const [email, setEmail] = React.useState<string|number>("")
  const [repassword, setRepassword] = React.useState<string|number>("")
  const [nickname, setNickname] = React.useState<string|number>("")
  const [data, setData] = React.useState<dataProps>({

    nickname,
    email,
    password
  })
  const navigate = useNavigate()


  function submit(){
    if(!nickname ||!email ||!password){
      toast.error("All fields need to be filled in.")
      return
    }
    if(repassword != password){
      return alert("Passwords don't match.")
    }
    const newUser:dataProps = {
      nickname,
      email,
      password
    }
    createAccount(newUser)
    
  }
  
  return (
    <div className={Styles.background} style={Styles.backgroundStyle}>
      <div className={Styles.hud} style={Styles.hudStyles}>

        <img src={logo} alt="logotipo" className={Styles.img}/>

        <Input label='Seu nome de usúario.'
        onChange={setNickname} key="name"
        simbol='NOME'/>


        <Input label='Seu melhor email.'
        onChange={setEmail} key="email"
        simbol='E-MAIL' type='e-mail'/>
          
        <Input label='Crie uma senha.'
        onChange={setPassword} key="password"
        simbol='SENHA' type='password'/>

        <Input label='Confirme sua senha.'
        onChange={setRepassword} key="re-password"
        simbol='CONFIRM' type='password'/>

        <hr className='border border-light w-100'/>

        <Button label='Criar conta' key="login"
        style={Styles.button}
        onClick={submit}/>

        <Button label='Já tenho uma conta'
        key="register" style={Styles.button}
        onClick={()=>{navigate("/")}}/>
      </div>
    </div>
  )
}
