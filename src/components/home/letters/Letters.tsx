import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import AttackTexture from './AttackTexture.gif'
import ExplosionTexture from './ExplosionTexture.gif'
import FireTexture from './FireTexture.gif'

export function Letters({ fightRef }: any) {
  let upRef = useRef(null)
  let downRef = useRef(null)
  let lowerRef = useRef(null)
  let attackRef = useRef(null)
  let upperRef = useRef(null)
  let explosionRef = useRef(null)
  let fireRef = useRef(null)

  useEffect(() => {
    gsap.to(upRef.current, { opacity: 0, scrollTrigger: { end: 'center -10%', scrub: true, start: 'center 40%', trigger: fightRef.current, }, })
    gsap.from(downRef.current, { opacity: 0, scrollTrigger: { end: 'center 60%', scrub: true, start: 'center 110%', trigger: fightRef.current, }, })
    gsap.timeline({ repeat: -1, }).to(lowerRef.current, { y: '-40vh', }).to(lowerRef.current, { y: '0vh', })
	})

  return (
    <div ref={ upRef }>
      <div ref={ downRef }>
        <h1 className='bottom-0 d-inline mb-0 pe-none position-fixed text-danger' ref={ lowerRef } style={{ lineHeight: .6, zIndex: -1 }}>n</h1>
        {/* <div className='align-items-center d-flex justify-content-center pe-none position-fixed start-50 top-50' style={{ height: 0, width: 0, zIndex: -1, }}>
          <img alt='' ref={ attackRef } src={ AttackTexture } />
        </div>
        <h1 className='bottom-100 d-inline end-100 mb-0 pe-none position-fixed text-light' ref={ upperRef } style={{ lineHeight: .6, zIndex: -1 }}>N</h1>
        <div className='align-items-center d-flex justify-content-center pe-none position-fixed start-50 top-50' style={{ height: 0, width: 0, zIndex: -1, }}>
          <img alt='' ref={ explosionRef } src={ ExplosionTexture } />
        </div>
        <div className='align-items-center d-flex justify-content-center pe-none position-fixed start-50 top-50' style={{ height: 0, width: 0, zIndex: -1, }}>
          <img alt='' ref={ fireRef } src={ FireTexture } />
        </div> */}
      </div>
    </div>
  )
}
