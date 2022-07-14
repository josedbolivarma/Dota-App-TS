import { useNavigate } from "react-router-dom"
import { useEffect } from 'react';
import { useFetch } from '../../../hooks';

import './PaginationContainer.scss';

export const PaginationContainer = ({ id }: any ) => {

  const navigate = useNavigate();
  
  const { previousHero, nextHero, getData } = useFetch();

  const selectHero = ( id: number ) => {
    navigate(`/hero/${ id }`);
    window.scrollTo(0, 0);
    window.location.reload();
  }

  useEffect(() => {
    getData( id );
  }, [ id ]);

  return (
    <div className="heroPaginations">
        <div className="heroPaginations__container">
        
     
        <div 
        className="heroPaginations__boxHero" 
        onClick={() => selectHero( previousHero.id )}
        style={{
          justifyContent: 'right',
        }}
        >
        <img 
        className="heroPaginations__animation" 
        src={ previousHero.image }
        style={{
          left: '-100px'
        }}
        alt='Previous Hero'
        />
        <div className="heroPaginations__boxContentOne">
            <h3 className="heroPaginations__title">HÉROE ANTERIOR</h3>
            <h2 className="heroPaginations__subtitle">{ previousHero.localized_name }</h2>
            <h3 className="heroPaginations__text">{ previousHero.attack_type }</h3>
        </div>

        <div className="heroPaginations__heroBackground"></div>
      </div>
      

      {/* HERO ALL BOX */}
      <div className="heroPaginations__heroAllBox"
      onClick={() => navigate('/')}
      >
        <div className="heroPaginations__boxes">
          <div className="heroPaginations__boxesBox" />
          <div className="heroPaginations__boxesBox" />
          <div className="heroPaginations__boxesBox" />
          <div className="heroPaginations__boxesBox" />
          <div className="heroPaginations__boxesBox" />
          <div className="heroPaginations__boxesBox" />
        </div>
        <h2 className="heroPaginations__heroAllBoxTitle">TODOS LOS <br />HÉROES</h2>
      </div>
      {/* HERO ALL BOX */}

       <div 
        className="heroPaginations__boxHero"
        onClick={() => selectHero( nextHero.id )}
        style={{
          justifyContent: 'left',
        }}
        >
          <img 
          className="heroPaginations__animation" 
          src={ nextHero.image }
          style={{
            right: '-100px'
          }}
          alt='Next Hero'
          />
          <div className="heroPaginations__boxContentOne">
            <h3 className="heroPaginations__title">HÉROE SIGUIENTE</h3>
            <h2 className="heroPaginations__subtitle">{ nextHero.localized_name }</h2>
            <h3 className="heroPaginations__text">{ nextHero.attack_type }</h3>
        </div>

          <div className="heroPaginations__heroBackground"></div>
        </div>

        </div>
    </div>
  )
}
