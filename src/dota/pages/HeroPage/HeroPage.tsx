import { useParams } from "react-router-dom"
import { useFetch } from '../../../hooks/useFetch';
import { useEffect } from 'react';
import { Loader } from "../../../ui/Loader/Loader";
import { DescHeroContainer } from '../../containers/DescHeroContainer/DescHeroContainer';
import { SkillsHeroContainer } from "../../containers/SkillsHeroContainer/SkillsHeroContainer";
import { StatisticsContainer } from "../../containers/StatisticsContainer/StatisticsContainer";

export const HeroPage = () => {

  const { id } = useParams();
  const { oneData, isLoading, getData } = useFetch();

  useEffect(() => {
    getData( id );
  }, [ id ]);

  console.log( oneData );

  return (
    <section className="section">
      {
            isLoading && <Loader />
        }

        

        {
            !isLoading && 
            <>
            <div className="container-small">
              <DescHeroContainer
              localized_name={ oneData.localized_name }
              poster={ oneData.poster }
              animation={ oneData.animation }
              image={ oneData.image }
              />
            </div>
              <SkillsHeroContainer 
              roles={ oneData?.roles[0] }
              attack_type={ oneData?.attack_type }
              />
              <StatisticsContainer 
              avatar={ oneData.avatar } 
              base_health={ oneData.base_health } 
              base_health_regen={ oneData.base_health_regen } 
              base_mana={ oneData.base_mana } 
              base_mana_regen={ oneData.base_mana_regen } 
              base_armor={ oneData.base_armor } 
              base_mr={ oneData.base_mr } 
              base_attack_min={ oneData.base_attack_min } 
              base_attack_max={ oneData.base_attack_max } 
              base_str={ oneData.base_str } 
              base_agi={ oneData.base_agi } 
              base_int={ oneData.base_int } 
              str_gain={ oneData.str_gain } 
              agi_gain={ oneData.agi_gain } 
              int_gain={ oneData.int_gain } 
              attack_range={ oneData.attack_range } 
              attack_rate={ oneData.attack_rate } 
              move_speed={ oneData.move_speed } 
              projectile_speed={ oneData.projectile_speed }              
              />
            </>
               
        }
    </section>
  )
}

export default HeroPage;