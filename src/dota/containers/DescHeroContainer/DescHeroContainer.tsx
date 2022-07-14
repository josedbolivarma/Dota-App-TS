import './DescHeroContainer.scss';

interface Props {
    localized_name: string;
    poster: string;
    animation: string;
    image: string;
}

export const DescHeroContainer = ({ localized_name, poster, animation, image }: Props ) => {
  return (
    <div className='desc__container'>
            <div>
                <div className="hero__animation">
                    <video className="hero__video" autoPlay loop playsInline muted poster={ poster }><source type="video/webm" src={ animation }/><img src={ image } /></video>
                </div>
            </div>

            <div className='desc__text'>
                <h1 className="desc__textName">{ localized_name }</h1>
                <h3 className="desc__textSkill">CORTA A SUS ENEMIGOS CON ATAQUES QUE AGOTAN EL MANÁ</h3>
                <h4 className="desc__textDescription">Si Anti-Mage tiene la posibilidad de hacerse fuerte, pocos pueden parar sus ataques. Quemando el maná de sus enemigos con cada golpe o teletransportándose a distancias cortas para escapar de una emboscada, arrinconarlo es un desafío para cualquier enemigo.</h4>
                <a href='#' className="desc__textLinkHistory">Leer historia completa</a>
            </div>
    </div>
  )
}