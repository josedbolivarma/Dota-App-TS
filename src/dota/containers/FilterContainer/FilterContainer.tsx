import { FilterBtns } from '../../components/FilterBtns/FilterBtns';
import { Search } from '../../components/Search/Search';
import './FilterContainer.scss';

export const FilterContainer = () => {
  return (
    <div className='filter'>
      <div className="filter__container">
      <h2 className='filter__title'>ATRIBUTO</h2>
      <FilterBtns />
      <Search />
      </div>
    </div>
  )
}
