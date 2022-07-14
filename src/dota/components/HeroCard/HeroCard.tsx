import { HeroesResponse } from '../../../interfaces/heroes.interface'

import './HeroCard.scss';

export const HeroCard = ({ avatar = '', name = '' }: any ) => {
  
  return (
    <div className='grid__card'>
      <div className="grid__item">
          <img 
          className="gridItem" 
          src={ avatar } />
          <div className="grid__content">
          <h2>{ name }</h2>
        </div>
      </div>
    </div>
  )
}
