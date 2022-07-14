import './StatisticsContainer.scss';

interface Props {
  avatar:            string;
  base_health:       number;
  base_health_regen: number;
  base_mana:         number;
  base_mana_regen:   number;
  base_armor:        number;
  base_mr:           number;  
  base_attack_min:   number;
  base_attack_max:   number;
  base_str:          number;
  base_agi:          number;
  base_int:          number;
  str_gain:          number;
  agi_gain:          number;
  int_gain:          number;
  attack_range:      number;
  attack_rate:       number;
  move_speed:        number;
  projectile_speed: number;
}

export const StatisticsContainer = ({
  avatar, 
  base_health, 
  base_health_regen, 
  base_mana, 
  base_mana_regen, 
  base_attack_min, 
  base_attack_max, 
  attack_rate, 
  attack_range, 
  projectile_speed, 
  base_armor, 
  base_mr, 
  move_speed
}: Props ) => {
  return (
    <div className="divider">
        <div className="divider__container">
          <div className="divider__boxAvatarContainer">
          <div className="divider__boxAvatar">
          <img src={ avatar }/>
          
          <div className="divider__points">
              <div className="divider__poinstHealth">
                <h4 className="divider__basePoint">{ base_health }</h4>
                <span className="divider__point__regen">+{ base_health_regen }</span>
              </div>
              <div className="divider__poinstMana">
              <h4 className="divider__basePoint">{ base_mana }</h4>
              <span className="divider__point__regen">+{ base_mana_regen }</span>
              </div>
              
            </div>
          </div>
          {/* POINTS RULES */}
          <div className="divider__boxAvatarContent">
              <div className="divider__boxAvatarContentBox">
                <img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png'
                alt='Strength Icon'
                />
                <h2>20 <span>+1.9</span></h2>
              </div>
              <div className="divider__boxAvatarContentBox">
              <img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png'
                alt='Agility Icon'
                />
                <h2>20 <span>+1.9</span></h2>
              </div>
              <div className="divider__boxAvatarContentBox">
              <img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png'
                alt='Intelligence Icon'
                />
                <h2>20 <span>+1.9</span></h2>
              </div>
          </div>
          {/* POINTS RULES */}
          </div>

          <div className="divider__roles">
            <div>
              <h2 className="divider__statisticsTitle">Carry</h2>
              <progress className="progress" value={Math.floor(Math.random() * 100)} ></progress>
            </div>

            <div>
              <h2 className="divider__statisticsTitle">Apoyo</h2>
              <progress className="progress" value={Math.floor(Math.random() * 100)} ></progress>
            </div>

            <div>
              <h2 className="divider__statisticsTitle">Nuker</h2>
              <progress className="progress" value={Math.floor(Math.random() * 100)} ></progress>
            </div>

            {/*  */}

            <div>
              <h2 className="divider__statisticsTitle">Incapacitador</h2>
              <progress className="progress" value={Math.floor(Math.random() * 100)} ></progress>
            </div>

            <div>
              <h2 className="divider__statisticsTitle">Jungla</h2>
              <progress className="progress" value={Math.floor(Math.random() * 100)} ></progress>
            </div>

            <div>
              <h2 className="divider__statisticsTitle">Resistente</h2>
              <progress className="progress" value={Math.floor(Math.random() * 100)} ></progress>
            </div>

        {/*  */}

        <div>
              <h2 className="divider__statisticsTitle">Evasivo</h2>
              <progress className="progress" value={Math.floor(Math.random() * 100)} ></progress>
            </div>

            <div>
              <h2 className="divider__statisticsTitle">Presionador</h2>
              <progress className="progress" value={Math.floor(Math.random() * 100)} ></progress>
            </div>

            <div>
              <h2 className="divider__statisticsTitle">Iniciador</h2>
              <progress className="progress" value={Math.floor(Math.random() * 100)} ></progress>
            </div>

          </div>

          <div className="divider__statistics">
              <div className="divider__statisticsBox">
              <h2>ATAQUE</h2>
              {/* ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd */}
              <h3><span><img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_damage.png'/></span>{ base_attack_min } - { base_attack_max }</h3>

              <h3><span><img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_time.png'/></span>{ attack_rate }</h3>

              <h3><span><img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_range.png'/></span>{ attack_range }</h3>

              <h3><span><img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_projectile_speed.png'/></span>{ projectile_speed }</h3>
              </div>

              <div className="divider__statisticsBox">
              <h2>DEFENSA</h2>
              <h3><span><img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_armor.png'/></span>{ base_armor }</h3>

              <h3><span><img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_magic_resist.png'/></span>{ base_mr }%</h3>
              {/* <progress value={40} min="0" max="10"></progress> */}
              </div>

              <div className="divider__statisticsBox">
              <h2>MOVILIDAD</h2>
              <h3><span><img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_movement_speed.png'/></span>{ move_speed }</h3>

<h3><span><img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_turn_rate.png'/></span>{ attack_rate }</h3>

<h3><span><img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_vision.png'/></span>{ base_health }</h3>
              </div>
          </div>
<div>
  <h2 className="divider__title">ATRIBUTOS</h2>
</div>
<div>
  <h2 className="divider__title">ROLES</h2>
</div>
<div>
  <h2 className="divider__title">ESTADÍSTICAS</h2>
</div>
        </div>
      </div>
  )
}
