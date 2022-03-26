import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import SunTexture from './SunTexture.png'

export function Sky({ sunriseRef }: any) {
  let upRef = useRef(null)
  let downRef = useRef(null)
  let sunRef = useRef(null)

  useEffect(() => {
    gsap.to(upRef.current, { opacity: 0, scrollTrigger: { end: 'center -10%', scrub: true, start: 'center 40%', trigger: sunriseRef.current, }, })
    gsap.from(downRef.current, { opacity: 0, scrollTrigger: { end: 'center 60%', scrub: true, start: 'center 110%', trigger: sunriseRef.current, }, })
    gsap.fromTo(sunRef.current, { scale: 0, }, { duration: 3, scale: 2, scrollTrigger: { end: 'center -10%', scrub: true, start: 'center 110%', trigger: sunriseRef.current, }, })
	})

  return (
    <div className='align-items-center d-flex justify-content-center position-fixed start-50 top-50' ref={ upRef } style={{ height: 0, width: 0, zIndex: -1, }}>
      <div ref={ downRef }>
        <img alt='' ref={ sunRef } src={ SunTexture } />
      </div>
    </div>
  )
}
