import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import FractalTexture from './FractalTexture.png'

export function Fractal({ crystalizeRef }: any) {
  let fractalRef0 = useRef(null)
  let fractalRef1 = useRef(null)
  let fractalRef2 = useRef(null)

  useEffect(() => {
    gsap.to(fractalRef0.current, { opacity: 0, scrollTrigger: { end: 'center -10%', start: 'center 40%', scrub: true, trigger: crystalizeRef.current, }, })
    gsap.from(fractalRef1.current, { opacity: 0, scrollTrigger: { end: 'center 60%', start: 'center 110%', scrub: true, trigger: crystalizeRef.current, }, })
    gsap.fromTo(fractalRef2.current, { scale: 0, }, { duration: 3, scale: 2, scrollTrigger: { end: 'center -10%', start: 'center 110%', trigger: crystalizeRef.current, toggleActions: 'play reset play reset', }, })
	})

  return (
    <div className='align-items-center d-flex justify-content-center position-fixed start-50 top-50' ref={ fractalRef0 } style={{ height: 0, width: 0, zIndex: -1, }}>
      <div ref={ fractalRef1 }>
        <img alt='' ref={ fractalRef2 } src={ FractalTexture } />
      </div>
    </div>
  )
}
