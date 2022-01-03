import React from 'react';

import Header from '../components/Header'
import BodyMainPage from '../components/BodyMainPage'

import '../styles/pages.css'

const MainPage = () => {
  return(
    <div className='mainPage'>
      <Header />
      <BodyMainPage />
    </div>
  )
}

export default MainPage