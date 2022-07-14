import './DescHeroContainer.scss';

interface Props {
    localized_name: string;
    poster: string;
    animation: string;
    image: string;
    objective: string;
    desc: string;
}

export const DescHeroContainer = ({ localized_name, poster, animation, image, objective, desc }: Props ) => {
  return (
    <div className='desc__container'>
            <div>
                <div className="hero__animation">
                    <video className="animate__animated animate__fadeInLeft hero__video" autoPlay loop playsInline muted poster={ poster }><source type="video/webm" src={ animation }/><img src={ image } /></video>
                </div>
            </div>

            <div className='desc__text'>
                <h1 className="desc__textName">{ localized_name }</h1>
                <h3 className="desc__textSkill">{ objective }</h3>
                <h4 className="desc__textDescription">{ desc }</h4>
                <a href='#' className="desc__textLinkHistory">Leer historia completa</a>
            </div>
    </div>
  )
}
