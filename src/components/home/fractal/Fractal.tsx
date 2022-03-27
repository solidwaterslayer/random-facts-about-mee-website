import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import FractalTexture from './FractalTexture0.png'

export function Fractal({ crystalizeRef }: any) {
  let upRef = useRef(null)
  let downRef = useRef(null)
  let fractalRef = useRef(null)

  useEffect(() => {
    gsap.to(upRef.current, { opacity: 0, scrollTrigger: { end: 'center -10%', scrub: true, start: 'center 40%', trigger: crystalizeRef.current, }, })
    gsap.from(downRef.current, { opacity: 0, scrollTrigger: { end: 'center 60%', scrub: true, start: 'center 110%', trigger: crystalizeRef.current, }, })
    gsap.fromTo(fractalRef.current, { scale: .6, }, { duration: 16, ease: 'linear', repeat: -1, rotation: 360, scrollTrigger: { end: 'center -10%', start: 'center 110%', toggleActions: 'resume pause resume pause', trigger: crystalizeRef.current, }, })
	})

  return (
    <div className='align-items-center d-flex justify-content-center pe-none position-fixed start-50 top-50' ref={ upRef } style={{ height: 0, width: 0, zIndex: -1, }}>
      <div ref={ downRef }>
        <img alt='' ref={ fractalRef } src={ FractalTexture } />
      </div>
    </div>
  )
}
