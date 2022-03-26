import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import CloudTexture from './Knife.png'

export function Knife({ throwRef }: any) {
  let upRef = useRef(null)
  let downRef = useRef(null)
  let knifeRef = useRef(null)

  useEffect(() => {
    gsap.to(upRef.current, { opacity: 0, scrollTrigger: { end: 'center -10%', scrub: true, start: 'center 40%', trigger: throwRef.current, }, })
    gsap.from(downRef.current, { opacity: 0, scrollTrigger: { end: 'center 60%', scrub: true, start: 'center 110%', trigger: throwRef.current, }, })
    gsap.fromTo(knifeRef.current, { rotation: 100, scale: .5, x: '45vw', y: '200vh', }, { delay: 1, duration: .1, scrollTrigger: { end: 'center -10%', start: 'center 110%', toggleActions: 'play reset play reset', trigger: throwRef.current, }, x: '55vw', y: '10vh', })
	})

  return (
    <div className='align-items-center d-flex justify-content-center position-fixed start-0 top-0' ref={ upRef } style={{ height: 0, width: 0, zIndex: -1, }}>
      <div ref={ downRef }>
        <img alt='' ref={ knifeRef } src={ CloudTexture } />
      </div>
    </div>
  )
}
