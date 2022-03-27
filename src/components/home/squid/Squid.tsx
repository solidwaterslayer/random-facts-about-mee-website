import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import SquidTexture from './Squid.webp'

export function Squid({ swimRef, zoomRef }: any) {
  let upRef = useRef(null)
  let downRef = useRef(null)
  let squidRef = useRef(null)

  useEffect(() => {
    gsap.to(upRef.current, { opacity: 0, scrollTrigger: { end: 'center -10%', scrub: true, start: 'center 40%', trigger: zoomRef.current, }, })
    gsap.from(downRef.current, { opacity: 0, scrollTrigger: { end: 'center 60%', scrub: true, start: 'center 110%', trigger: swimRef.current, }, })
    gsap.timeline({ repeat: -1, })
    .to(squidRef.current, { duration: 3, x: '1vw', y: '-1vh' })
    .to(squidRef.current, { duration: 4, x: '2vw', y: '1vw', })
    .to(squidRef.current, { duration: 3, x: '0vw', y: '0vh' })
	})

  return (
    <div className='align-items-center d-flex justify-content-center position-fixed' ref={ upRef } style={{ height: 0, left: '80vw', top: '50vh', width: 0, zIndex: -1, }}>
      <div ref={ downRef }>
        <img alt='' ref={ squidRef } src={ SquidTexture } />
      </div>
    </div>
  )
}
