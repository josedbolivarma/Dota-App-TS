import './SkillsHeroContainer.scss';

interface Props {
  roles: string;
  attack_type: string;
}

export const SkillsHeroContainer = ({ roles, attack_type }: Props ) => {
  return (
    <div className='skillsHeroContainer'>
        <div className="container-small">
          <div className="hero_container">

        <div className="skillsHero_flex-between">
          
        <div className="skillsHero_box">
          <div className="box">
            <h2 className='skillsHero_title'>TIPO DE ATAQUE</h2>
            <h3 className='skillsHero_subtitle'>{ attack_type }</h3>
          </div>
            <div className="box">
            <h2 className='skillsHero_title'>ESTILO</h2>
            <h3 className='skillsHero_subtitle'>{ roles }</h3>
            </div>
          </div>

          <div className="skillsHero_flex">
            <img className='skillsHero_tree' src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/talents.svg" alt="Role" />
            
            <div className="skillsHero_box">
              <h2 className='skillsHero_title-two'>HABILIDADES</h2>
              <div className="skillsHero_flex-skills">
              <img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/disruptor_glimpse.png' className="hero__habilitiesIcon" alt='Tree Habilities Icon'/>
              <img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/disruptor_glimpse.png' className="hero__habilitiesIcon" alt='Tree Habilities Icon'/>
              <img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/disruptor_glimpse.png' className="hero__habilitiesIcon" alt='Tree Habilities Icon'/>
              <img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/disruptor_glimpse.png' className="hero__habilitiesIcon" alt='Tree Habilities Icon'/>
              </div>

            </div>
          </div>

        </div>

        </div>

        </div>
          
    </div>
  )
}
