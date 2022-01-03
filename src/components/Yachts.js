import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

import request from '../helpers/request';

import Loading from './Loading';
import Yacht from './Yacht';

import '../styles/yachts.css'

const Yachts = () => {
  const [arrayYachts, setArrayYachts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const { state } = useLocation();

  const fetchData = async () => {
    const {data} = await request.get(`/jednostki/${state.yachtType}/${state.dateStart}/${state.dateEnd}`)
    .then(({data}) => {
      setArrayYachts(data)
      setIsLoading(false)
    })
  }

  const fetchDataAll = async () => {
    const {data} = await request.get(`/jednostki`)
    .then(({data}) => {
      setArrayYachts(data)
      setIsLoading(false)
    })
  }


  useEffect(() => {
    if(state) {
      fetchData()
    } else {
      fetchDataAll()
    }
  }, [state])

  if(isLoading) {
    return <Loading />
  }

  if(!isLoading && arrayYachts.length === 0) {
    return <div>
      nie ma żadnych jachtów
    </div>
  }

  return (
    <div className='container-yachts'>
      <h2 className='yachts-title'>Dostępne jednostki</h2>
      <div className='box-yachts'>
        {arrayYachts.map(yacht => (
          <Yacht key={yacht.ID} {...yacht}/>
        ))}
      </div>
    </div>
  )
}

export default Yachts
