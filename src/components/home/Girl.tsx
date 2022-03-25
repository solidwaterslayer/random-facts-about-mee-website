import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import GirlTexture from './GirlTexture.gif'

export function Girl({ danceRef }: any) {
  let girlRef = useRef(null)

  useEffect(() => {
		gsap.to(girlRef.current, { opacity: 0, scrollTrigger: { end: 'center -10%', start: 'center 40%', scrub: true, trigger: danceRef.current, toggleActions: 'play pause play pause', }, })
		gsap.from(girlRef.current, { opacity: 0, scrollTrigger: { end: 'center 60%', start: 'center 90%', scrub: true, trigger: danceRef.current, toggleActions: 'play pause play pause', }, })
	})

  return <img alt='' className='position-fixed bottom-0 end-0' ref={ girlRef } src={ GirlTexture } />
}
