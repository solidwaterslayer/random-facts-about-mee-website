import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import FractalTexture from './FractalTexture.png'

export function Fractal({ crystalizeRef }: any) {
  let snowflakeRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(snowflakeRef.current, { scale: 0, x: '50vw', y: '50vh', }, { duration: 3, scale: 2, scrollTrigger: { end: 'center -10%', start: 'center 110%', trigger: crystalizeRef.current, toggleActions: 'play reset play reset', }, x: '50vw', y: '50vh', })
    gsap.to(snowflakeRef.current, { opacity: 0, scrollTrigger: { end: 'center -10%', start: 'center 40%', scrub: true, trigger: crystalizeRef.current, toggleActions: 'play pause play pause', }, })
    gsap.from(snowflakeRef.current, { opacity: 0, scrollTrigger: { end: 'center 60%', start: 'center 110%', scrub: true, trigger: crystalizeRef.current, toggleActions: 'play pause play pause', }, })
	})

  return (
    <div className='position-fixed top-0 start-0 d-flex justify-content-center align-items-center' ref={ snowflakeRef } style={{ height: 0, width: 0, zIndex: -1, }}>
      <img alt='' src={ FractalTexture } />
    </div>
  )
}
