import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import CloudTexture from './cloud-texture.png'
import SunTexture from './sun-texture.png'

export function Sky({ sunriseRef }: any) {
  let upRef = useRef(null)
  let downRef = useRef(null)
  let cloudRef = useRef(null)
  let sunRef = useRef(null)

  useEffect(() => {
    gsap.to(upRef.current, { opacity: 0, scrollTrigger: { end: 'center -10%', scrub: true, start: 'center 40%', trigger: sunriseRef.current, }, })
    gsap.from(downRef.current, { opacity: 0, scrollTrigger: { end: 'center 60%', scrub: true, start: 'center 110%', trigger: sunriseRef.current, }, })
    gsap.fromTo(cloudRef.current, { opacity: .9, scale: .6, x: '65vw', y: '66vh', }, { scrollTrigger: { end: 'center -10%', scrub: true, start: 'center 110%', trigger: sunriseRef.current, }, x: '50vw', y: '50vh', })
    gsap.fromTo(sunRef.current, { x: '82vw', y: '33vh', }, { scale: 1.1, scrollTrigger: { end: 'center -10%', scrub: true, start: 'center 110%', trigger: sunriseRef.current, }, x: '80vw', y: '30vh', })
	})

  return (
    <div ref={ upRef }>
      <div ref={ downRef }>
        <div className='image start-0 top-0'>
          <img alt='' ref={ cloudRef } src={ CloudTexture } />
        </div>
        <div className='image start-0 top-0'>
          <img alt='' ref={ sunRef } src={ SunTexture } />
        </div>
      </div>
    </div>
  )
}
