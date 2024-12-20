import videoBg from '../../assets/background.mp4'
import HomeContent from '../HomeContent/HomeContent'
import './Background.css'

const Background = () => {
  return (
    <div className='main_bg'>
      <div className='overlay'></div>
      <video src={videoBg} autoPlay loop muted />
      <HomeContent />
    </div>
  )
}

export default Background
