import { useContext } from 'react';
import './FilterBtns.scss';
import { HeroesContext } from '../../../context';

const btnArray = [
  {
    name: 'str',
    icon: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-str-active.png'
  },
  {
    name: 'agi',
    icon: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-agi-active.png'
  },
  {
    name: 'int',
    icon: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-int-active.png'
  }
]

export const FilterBtns = () => {

  const { handleAttr } = useContext( HeroesContext );

  return (
    <div className='filterBox'>
      {
        btnArray.map( ({ name, icon }) => (
          <div 
            key={ name }
            onClick={ () => handleAttr(name) }
            className="filterIcon"  
            style={{
            backgroundImage: `url(${ icon })`
          }} />
        ))
      }

    </div>
  )
}
