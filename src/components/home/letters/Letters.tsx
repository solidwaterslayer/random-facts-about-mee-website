import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import AttackTexture from './AttackTexture.gif'
import ExplosionTexture from './ExplosionTexture.gif'
import FireTexture from './FireTexture.gif'

export function Letters({ fightRef }: any) {
  let upRef = useRef(null)
  let downRef = useRef(null)
  let standingRef = useRef(null)
  let jumpingRef = useRef(null)
  let attackRef = useRef(null)
  let flyingRef = useRef(null)
  let explosionRef = useRef(null)
  let fireRef = useRef(null)

  useEffect(() => {
    gsap.to(upRef.current, { opacity: 0, scrollTrigger: { end: 'center -10%', scrub: true, start: 'center 40%', trigger: fightRef.current, }, })
    gsap.from(downRef.current, { opacity: 0, scrollTrigger: { end: 'center 60%', scrub: true, start: 'center 110%', trigger: fightRef.current, }, })
    gsap.timeline({ repeat: -1, repeatDelay: 2, }).to(standingRef.current, { duration: '.1', y: '-1vh', }).to(standingRef.current, { ease: 'bounce', y: '0vh', })
    gsap.timeline({ delay: 2, scrollTrigger: { end: 'center -10%', start: 'center 110%', toggleActions: 'play reset play reset', trigger: fightRef.current, }, })
    .to(jumpingRef.current, { duration: .1, ease: 'linear', x: '5vw', y: '-5vh', })
    .to(jumpingRef.current, { duration: .1, ease: 'linear', x: '10vw', y: '-25vh', })
    .to(jumpingRef.current, { duration: .1, ease: 'linear', x: '15vw', y: '-35vh', })
    .to(jumpingRef.current, { duration: .1, ease: 'linear', x: '20vw', y: '-40vh', })
    .to(jumpingRef.current, { duration: .1, ease: 'linear', x: '25vw', y: '-35vh', })
    .to(jumpingRef.current, { duration: .1, ease: 'linear', x: '30vw', y: '-25vh', })
    .to(jumpingRef.current, { duration: .1, ease: 'linear', x: '35vw', y: '-5vh', })
    .to(jumpingRef.current, { duration: .1, ease: 'bounce', x: '40vw', y: '0vh', })
    gsap.timeline({ delay: 2.7, scrollTrigger: { end: 'center -10%', start: 'center 110%', toggleActions: 'play reset play reset', trigger: fightRef.current, }, }).to(attackRef.current, { ease: 'power4', opacity: 1, }).to(attackRef.current, { opacity: 0, })
    gsap.fromTo(flyingRef.current, { x: '80vw', }, { delay: 3, duration: .1, scrollTrigger: { end: 'center -10%', start: 'center 110%', toggleActions: 'play reset play reset', trigger: fightRef.current, }, x: '20vw', y: '-100vh', })
    gsap.timeline({ delay: 3.2, scrollTrigger: { end: 'center -10%', start: 'center 110%', toggleActions: 'play reset play reset', trigger: fightRef.current, }, }).to(explosionRef.current, { opacity: 1, }).to(explosionRef.current, { opacity: 0, })
    gsap.to(fireRef.current, { delay: 3.5, opacity: 1, scrollTrigger: { end: 'center -10%', start: 'center 110%', toggleActions: 'play reset play reset', trigger: fightRef.current, }, })
	})

  return (
    <div ref={ upRef }>
      <div ref={ downRef }>
        <div className='bottom-0 d-inline pe-none position-fixed text-danger' ref={ jumpingRef }>
          <h1 ref={ standingRef } style={{ lineHeight: .2, zIndex: -1 }}>n</h1>
        </div>
        <div className='align-items-center d-flex justify-content-center pe-none position-fixed' style={{ height: 0, left: '80vw', top: '90vh', width: 0, zIndex: -1, }}>
          <img alt='' ref={ attackRef } src={ AttackTexture } style={{ opacity: 0, transform: 'scale(-1)', }} />
        </div>
        <div className='bottom-0 d-inline pe-none position-fixed start-0 text-danger'>
          <h1 ref={ flyingRef } style={{ lineHeight: .2, zIndex: -1 }}>N</h1>
        </div>
        <div className='align-items-center d-flex justify-content-center pe-none position-fixed' style={{ height: 0, left: '20vw', top: '15vh', width: 0, zIndex: -1, }}>
          <img alt='' ref={ explosionRef } src={ ExplosionTexture } style={{ opacity: 0, transform: 'scaleY(-1)', }} />
        </div>
        <div className='align-items-center d-flex justify-content-center pe-none position-fixed' style={{ height: 0, left: '20vw', top: '15vh', width: 0, zIndex: -1, }}>
          <img alt='' ref={ fireRef } src={ FireTexture } style={{ opacity: 0, transform: 'scaleY(-1)', }} />
        </div>
      </div>
    </div>
  )
}
