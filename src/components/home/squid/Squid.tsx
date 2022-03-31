import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import SquidTexture from './squid-texture.webp'

function fade(swimRef: any, zoomRef: any, upRef: any, downRef: any, swimmingRef: any, jitteringRef: any, lookingRef: any) {
  gsap.to(upRef.current, { opacity: 0, scrollTrigger: { end: 'center -10%', scrub: true, start: 'center 40%', trigger: zoomRef.current, }, })
  gsap.from(downRef.current, { opacity: 0, scrollTrigger: { end: 'center 60%', scrub: true, start: 'center 110%', trigger: swimRef.current, }, })
}

function swim(swimRef: any, zoomRef: any, upRef: any, downRef: any, swimmingRef: any, jitteringRef: any, lookingRef: any) {
  gsap.fromTo(swimmingRef.current, { rotation: 45, }, { ease: 'linear', opacity: 0, scrollTrigger: { end: 'center -10%', scrub: true, start: 'center 110%', trigger: swimRef.current, }, x: '100vw', y: '-100vh', })
}

function jitter(swimRef: any, zoomRef: any, upRef: any, downRef: any, swimmingRef: any, jitteringRef: any, lookingRef: any) {
  gsap.timeline({ defaults: { duration: 3, }, repeat: -1, })
  .to(jitteringRef.current, { x: '1vw', y: '-1vh', })
  .to(jitteringRef.current, { x: '2vw', y: '1vw', })
  .to(jitteringRef.current, { x: '0vw', y: '0vh', })
}

function look(swimRef: any, zoomRef: any, upRef: any, downRef: any, swimmingRef: any, jitteringRef: any, lookingRef: any) {
  gsap.to(lookingRef.current, { scale: 2, scrollTrigger: { end: 'center 60%', scrub: true, start: 'center 110%', trigger: zoomRef.current, }, y: '40vh', })
}

export function Squid({ swimRef, zoomRef }: any) {
  let upRef = useRef(null)
  let downRef = useRef(null)
  let swimmingRef = useRef(null)
  let jitteringRef = useRef(null)
  let lookingRef = useRef(null)

  useEffect(() => {
    fade(swimRef, zoomRef, upRef, downRef, swimmingRef, jitteringRef, lookingRef)
    swim(swimRef, zoomRef, upRef, downRef, swimmingRef, jitteringRef, lookingRef)
    jitter(swimRef, zoomRef, upRef, downRef, swimmingRef, jitteringRef, lookingRef)
    look(swimRef, zoomRef, upRef, downRef, swimmingRef, jitteringRef, lookingRef)
	})

  return (
    <div ref={ upRef }>
      <div ref={ downRef }>
        <div className='image start-0 top-100'>
          <img alt='' ref={ swimmingRef } src={ SquidTexture } />
        </div>
        <div className='image' ref={ jitteringRef } style={{ left: '80vw', top: '50vh', }}>
          <img alt='' ref={ lookingRef } src={ SquidTexture } />
        </div>
      </div>
    </div>
  )
}
