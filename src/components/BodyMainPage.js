import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/bodyMainPage.css'

const BodyMainPage = () => {
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');
  const [yachtType, setYachtType] = useState('');

  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    navigate('/informacje-o-jednostakch', {state: {dateStart, dateEnd, yachtType }});
  }

  const checkDisabled = () => {
    if(dateStart && dateEnd && yachtType ) {
      return  false;
    }

    return true;
  }

  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  } 

  today = yyyy + '-' + mm + '-' + dd;

  return(
    <div className='container'>
      <section className='box'>
        <div className='form-box'>
          <form onSubmit={handleOnSubmit} className='form'>
            <div className='input-box'>
              <span>Data od: </span>
              <input type="date" value={dateStart} onChange={(e) => setDateStart(e.target.value)} min={today}/>
            </div>
            <div className='input-box'>
              <span>Data do: </span>
              <input type="date" value={dateEnd} onChange={(e) => setDateEnd(e.target.value)} min={dateStart}/>
            </div>
            <div className='input-box'>
              <span>Jednostki: </span> 
              <button type='button' className={`btn-yacht ${yachtType !== '1' && 'disabled-btn'}`} onClick={() => setYachtType('1')}>Morskie</button>
              {' '}
              <button type='button' className={`btn-yacht ${yachtType !== '0' && 'disabled-btn'}`} onClick={() => setYachtType('0')}>Śródlądowe</button>
            </div>
            <div className='input-box'>
              <button type='submit' disabled={checkDisabled()} className='btn-submit'>Znajdź</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default BodyMainPage

