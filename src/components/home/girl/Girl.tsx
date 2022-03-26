import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import GirlTexture from './GirlTexture.gif'

export function Girl({ danceRef }: any) {
  let girlRef = useRef(null)

  useEffect(() => {
		gsap.fromTo(girlRef.current, { opacity: 1, }, { opacity: 0, scrollTrigger: { end: 'center -10%', start: 'center 40%', scrub: true, trigger: danceRef.current, }, })
		gsap.fromTo(girlRef.current, { opacity: 0, }, { opacity: 1, scrollTrigger: { end: 'center 60%', start: 'center 110%', scrub: true, trigger: danceRef.current, }, })
	})

  return <img alt='' className='position-fixed bottom-0 end-0' ref={ girlRef } src={ GirlTexture } style={{ opacity: 0, }}/>
}
