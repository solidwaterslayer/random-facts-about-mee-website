import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import GirlTexture from './GirlTexture.gif'

export function Girl({ danceRef }: any) {
  let upRef = useRef(null)
  let downRef = useRef(null)

  useEffect(() => {
    gsap.to(upRef.current, { opacity: 0, scrollTrigger: { end: 'center -10%', start: 'center 40%', scrub: true, trigger: danceRef.current, }, })
    gsap.from(downRef.current, { opacity: 0, scrollTrigger: { end: 'center 60%', start: 'center 110%', scrub: true, trigger: danceRef.current, }, })
	})

  return (
    <>
      <span ref={ upRef }>
        <img alt='' className='bottom-0 end-0 position-fixed' ref={ downRef } src={ GirlTexture } />
      </span>
    </>
  )
}
