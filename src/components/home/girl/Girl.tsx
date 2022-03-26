import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import GirlTexture from './GirlTexture.gif'

export function Girl({ danceRef }: any) {
  let girlRef0 = useRef(null)
  let girlRef1 = useRef(null)

  useEffect(() => {
    gsap.to(girlRef0.current, { opacity: 0, scrollTrigger: { end: 'center -10%', start: 'center 40%', scrub: true, trigger: danceRef.current, }, })
    gsap.from(girlRef1.current, { opacity: 0, scrollTrigger: { end: 'center 60%', start: 'center 110%', scrub: true, trigger: danceRef.current, }, })
	})

  return (
    <>
      <span ref={ girlRef0 }>
        <img alt='' className='bottom-0 end-0 position-fixed' ref={ girlRef1 } src={ GirlTexture } />
      </span>
    </>
  )
}
