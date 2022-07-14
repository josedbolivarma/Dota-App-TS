import { useContext, useEffect, useState } from 'react';
import { useFetch } from '../../../hooks/useFetch';
import { Loader } from '../../../ui/Loader/Loader';
import { HeroCard } from '../HeroCard/HeroCard';

import { HeroesResponse } from '../../../interfaces/heroes.interface';

import './HeroesGrid.scss';
import { Link } from 'react-router-dom';
import { HeroesContext } from '../../../context';

export const HeroesGrid = () => {

  const [ characters, setCharacters ] = useState<HeroesResponse[]>([]);
  const { data, isLoading } = useFetch();
  const { search, attr } = useContext( HeroesContext );

  useEffect(() => {
    setCharacters( data );
  }, [ isLoading ]);


  return (
    <>

    {
      isLoading && <Loader />
    }

    {
      ( !isLoading && !characters ) && <h2>No hay personajes</h2>
    }

    <div className="grid">
    {
      !isLoading &&
        characters?.filter(( item => item.localized_name.toLocaleLowerCase().includes( search )))
        .filter( (item => {
          if( !attr ) {
            return item;
          } else {
            return item.primary_attr === attr
          }
        }))
        .map( ({ id, localized_name , avatar } : HeroesResponse ) => (
          <Link 
          className='animate__animated animate__fadeIn'
          to={`hero/${id}`}
          key={ id } 
          >
            <HeroCard
            
            name={ localized_name }
            avatar={ avatar }
            />
          </Link>
          ) ) 
        }

        
    </div>
    </>
  )
}
