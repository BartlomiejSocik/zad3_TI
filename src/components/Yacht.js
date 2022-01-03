import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/yachts.css'

const Yacht = ({Nazwa, Opis, JPGv1, ID}) => {

  const id = typeof(ID) === 'object' ? ID[0] : ID
  return (
    <Link
      to={{ 
      pathname: `/jacht`,
      search: `${id}`
      }} 
      className='link-yacht'
    >
      <div className='yacht-box'>
        <div className='yacht-img-box'>
          <img src={JPGv1} alt={Nazwa} className='yacht-img'/>
        </div>
        <div className='yacht-info-box'>
          <h3 className='yacht-title'>{Nazwa}</h3>
          <div>
            <p className='yacht-description'>{Opis}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Yacht
