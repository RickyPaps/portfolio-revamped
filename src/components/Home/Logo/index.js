import './index.scss'
import LogoSolid from '../../../assets/images/portolio-letter.png'

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="solid-logo" src={LogoSolid} alt="R" />
    </div>
  )
}

export default Logo
