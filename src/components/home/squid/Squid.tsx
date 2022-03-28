import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import SquidTexture from './SquidTexture.webp'

export function Squid({ swimRef, zoomRef }: any) {
  let upRef = useRef(null)
  let downRef = useRef(null)
  let swimmingRef = useRef(null)
  let floatingRef = useRef(null)
  let lookingRef = useRef(null)

  useEffect(() => {
    gsap.to(upRef.current, { opacity: 0, scrollTrigger: { end: 'center -10%', scrub: true, start: 'center 40%', trigger: zoomRef.current, }, })
    gsap.from(downRef.current, { opacity: 0, scrollTrigger: { end: 'center 60%', scrub: true, start: 'center 110%', trigger: swimRef.current, }, })
    gsap.fromTo(swimmingRef.current, { rotation: 45, }, { ease: 'linear', opacity: 0, scrollTrigger: { end: 'center -10%', scrub: true, start: 'center 110%', trigger: swimRef.current, }, x: '100vw', y: '-100vh', })
    gsap.timeline({ defaults: { duration: 3, }, repeat: -1, })
    .to(floatingRef.current, { x: '1vw', y: '-1vh', })
    .to(floatingRef.current, { x: '2vw', y: '1vw', })
    .to(floatingRef.current, { x: '0vw', y: '0vh', })
    gsap.to(lookingRef.current, { scale: 2, scrollTrigger: { end: 'center 60%', scrub: true, start: 'center 110%', trigger: zoomRef.current, }, y: '40vh', })
	})

  return (
    <div ref={ upRef }>
      <div ref={ downRef }>
        <div className='image start-0 top-100' ref={ floatingRef }>
          <img alt='' ref={ swimmingRef } src={ SquidTexture } />
        </div>
        <div className='image' ref={ floatingRef } style={{ left: '80vw', top: '50vh', }}>
          <img alt='' ref={ lookingRef } src={ SquidTexture } />
        </div>
      </div>
    </div>
  )
}
