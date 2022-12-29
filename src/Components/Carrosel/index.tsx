import React, { useEffect, useRef} from 'react'
import {Styles} from "./Style"


export const Carrosel = () => {

    const img_url1 = "https://i.ibb.co/zhtFhWn/pexels-robin-stickel-70497-1.jpg"
    const img_url2 = "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"
    const img_url3 = "https://images4.alphacoders.com/688/thumb-1920-688879.jpg"
    const button  = useRef<HTMLButtonElement>(null)


    useEffect(()=>{
      setInterval(()=>{
        button.current?.click()
      }, 3000)
    }, [])
  return (
    <div id="carouselExample" className={Styles.full.class} style={Styles.full.style} data-bs-touch="true">
  <div className="carousel-inner">
    <div className={`${Styles.image.class} active`}>

      <img src={img_url1} alt="..."className='w-100 d-block'/>
    </div>
    <div className={Styles.image.class}>
      <img src={img_url2} alt="..." className='w-100 d-block'/>
    </div>
    <div className={Styles.image.class}>
      <img src={img_url3} alt="..." className='w-100 d-block'/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" id='Prev'>
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden" ref={button}>Next</span>
  </button>
</div>
  )
}
