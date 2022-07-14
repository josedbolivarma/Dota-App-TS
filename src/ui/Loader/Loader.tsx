import { TailSpin } from 'react-loader-spinner';
import './Loader.scss';

export const Loader = () => {
  return (
    <div className="center" style={{
        height: '50vh'
    }}>
    <TailSpin ariaLabel="loading-indicator" color="grey"/>
    </div>
  )
}
