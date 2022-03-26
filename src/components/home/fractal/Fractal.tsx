import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import FractalTexture from './FractalTexture.png'

export function Fractal({ crystalizeRef }: any) {
  let upRef = useRef(null)
  let downRef = useRef(null)
  let fractalRef = useRef(null)

  useEffect(() => {
    gsap.to(upRef.current, { opacity: 0, scrollTrigger: { end: 'center -10%', start: 'center 40%', scrub: true, trigger: crystalizeRef.current, }, })
    gsap.from(downRef.current, { opacity: 0, scrollTrigger: { end: 'center 60%', start: 'center 110%', scrub: true, trigger: crystalizeRef.current, }, })
    gsap.fromTo(fractalRef.current, { scale: 0, }, { duration: 3, scale: 2, scrollTrigger: { end: 'center -10%', start: 'center 110%', trigger: crystalizeRef.current, toggleActions: 'play reset play reset', }, })
	})

  return (
    <div className='align-items-center d-flex justify-content-center position-fixed start-50 top-50' ref={ upRef } style={{ height: 0, width: 0, zIndex: -1, }}>
      <div ref={ downRef }>
        <img alt='' ref={ fractalRef } src={ FractalTexture } />
      </div>
    </div>
  )
}
