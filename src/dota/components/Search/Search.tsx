import { useSearch } from '../../../hooks';
import './Search.scss';

export const Search = () => {
  const { filter ,handleSearchChange } = useSearch();

  const { search } = filter;

  return (
    <div className="search">
       <img className="content__searchIcon" 
       src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/1200px-Vector_search_icon.svg.png' 
       alt='Search Icon'
       />
          <input type='text' 
          className="content__searchInput" 
          onChange={ handleSearchChange }
          value={ search }
          />
    </div>
  )
}
