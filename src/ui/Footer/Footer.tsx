import './Footer.scss';

export const Footer = () => {
  return (
    <footer className='footer'>
    <div className='footer__container'>
        <div className='footer__content'>
            <div className='footer__box'>
                <img className='footer__icon' src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/valve_logo.png" alt="Valve Logo" />
                <img className='footer__icon' src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/footer_logo.png" alt="Dota Logo" />
            </div>
            <p className='footer__description'>Dota y el logotipo de Dota son marcas comerciales y/o marcas comerciales registradas de Valve Corporation. 2021 Valve Corporation, todos los derechos reservados.</p>  
        </div>
    </div>
</footer>
  )
}
