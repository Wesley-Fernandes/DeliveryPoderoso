import React from 'react'
import Styles from './Styles'
import { HeaderBar } from '../../Components/HeaderBar'
import { Carrosel } from '../../Components/Carrosel'
import { Item } from '../../Components/Item'
import { Modal } from '../../Components/Modal'
export const Dashboard = () => {
  const [item, setItem] = React.useState<string>("")

  return (
    <div className={Styles.dashboard.class} style={Styles.dashboard.style}>
        <HeaderBar/>
        <main className={Styles.main.class} style={Styles.main.style}>
          <Carrosel/>
          <section className={Styles.section.class}>
            <Item setItem={setItem}/>
            <Item setItem={setItem}/>
            <Item setItem={setItem}/>
            <Item setItem={setItem}/>
            <Item setItem={setItem}/>
            <Item setItem={setItem}/>
            <Item setItem={setItem}/>
            <Item setItem={setItem}/>
            <Item setItem={setItem}/>
            <Item setItem={setItem}/>
            <Item setItem={setItem}/>
            <Item setItem={setItem}/>
          </section>
          <Modal id={item} />
        </main>
    </div>
  )
}
