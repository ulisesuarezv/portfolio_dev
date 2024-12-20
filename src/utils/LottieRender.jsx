import Lottie from 'lottie-web'
import { useEffect, useRef } from 'react'

const LottieRender = ({
  width_w = '15vw',
  height_h = '15vh',
  animationData
}) => {
  const lottieContainer = useRef(null)

  useEffect(() => {
    const animation = Lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData
    })

    return () => {
      animation.destroy()
    }
  }, [animationData])

  return (
    <div
      ref={lottieContainer}
      style={{ width: width_w, height: height_h }}
    ></div>
  )
}

export default LottieRender
