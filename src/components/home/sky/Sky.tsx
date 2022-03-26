import { useEffect, useRef } from 'react'
import SunTexture from './SunTexture.png'

export function Sky({ sunriseRef }: any) {
  let upRef = useRef(null)
  let downRef = useRef(null)
  let sunRef = useRef(null)

  useEffect(() => {
    // gsap.to(fractalRef0.current, { opacity: 0, scrollTrigger: { end: 'center -10%', start: 'center 40%', scrub: true, trigger: sunriseRef.current, }, })
    // gsap.from(fractalRef1.current, { opacity: 0, scrollTrigger: { end: 'center 60%', start: 'center 110%', scrub: true, trigger: sunriseRef.current, }, })
    // gsap.fromTo(fractalRef2.current, { scale: 0, }, { duration: 3, scale: 2, scrollTrigger: { end: 'center -10%', start: 'center 110%', trigger: sunriseRef.current, toggleActions: 'play reset play reset', }, })
	})

  return (
    <div ref={ upRef }>
      <div ref={ downRef }>
        <img className='position-fixed start-0 top-0' alt='' ref={ sunRef } src={ SunTexture } style={{ transform: 'translateX(-50%) translateY(-50%)', zIndex: -1, }}/>
      </div>
    </div>
  )
}
