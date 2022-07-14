import { Description } from "../../components/Description/Description";
import { HeroesGrid } from "../../components/HeroesGrid/HeroesGrid";
import { FilterContainer } from "../../containers/FilterContainer/FilterContainer";

export const Home = () => {
  return (
    <div className="section">
      <div className="container">
       <Description />
       <FilterContainer />
       <HeroesGrid />
      </div>
    </div>
  )
}

export default Home;