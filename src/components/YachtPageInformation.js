import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';

import request from '../helpers/request';

import Loading from './Loading';

import '../styles/yachtPageInformation.css';

const YachtPageInformation = () => {
  const [actualYachts, setActulaYacht] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [actualImgPath, setActualImgPath] = useState('')

  const { search } = useLocation();
  const id = search.slice(1)

  const fetchData = async () => {
    const {data} = await request.get(`/jednostki/${id}`)
    .then(({data}) => {
      setActulaYacht(data[0])
      setIsLoading(false)
    })
  }

  useEffect(() => {
    fetchData ()
  }, [id])

  useEffect(() => {
      if(Object.keys(actualYachts).length === 0 || !actualYachts.JPGv1) {
        return null;
      }

      setActualImgPath(actualYachts.JPGv1)

  }, [actualYachts]);


  if(isLoading) {
    return <Loading />
  }

  if(!isLoading && Object.keys(actualYachts).length === 0) {
    return <div>
      nie znaleziono yachtu
    </div>
  }

  const {Czy_morski, Dane, JPGv1, JPGv2, JPGv3, Nazwa, Opis} = actualYachts;

  return (
    <div className='warpper-yacht'>
      <div className='box-actual-yacht'>
        <div className='box-actual-yacht-img'>
          <div>
            <img className='actual-yacht-main-img' src={actualImgPath} alt={Nazwa} />
          </div>
          <div className='box-all-img'>
            <img src={JPGv1} alt={Nazwa} className='rest-img' onClick={() => setActualImgPath(JPGv1)}/>
            <img src={JPGv2} alt={Nazwa} className='rest-img' onClick={() => setActualImgPath(JPGv2)}/>
            <img src={JPGv3} alt={Nazwa} className='rest-img' onClick={() => setActualImgPath(JPGv3)}/>
          </div>
        </div>
        <div className='box-actual-yacht-info'>
          <h3 className='actual-yacht-title'>{Nazwa}</h3>
          <p className='info-yacht'>{Dane}</p>
          <p>{Opis}</p>
        </div>
      </div>
    </div>
  )
}

export default YachtPageInformation
