import React from 'react'
import "./Upgrade.sass"
export const Upgrade = () => {
  return (
    <div className='upgrader'>
        <div className="form-check form-switch checkUpgrade">
            <label className="form-check-label"
            htmlFor="flexSwitchCheckDefault">
                Mais queijo
            </label>

            <input className="form-check-input"
            type="checkbox" role="switch"
            id="flexSwitchCheckDefault"/>
        </div>


        <span className='UpgradePrice'>
            +R$ 2,00
        </span>
    </div>
        

  )
}
