import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../../index.css'
import { useEffect, useRef } from 'react'

export default function Fact({ customRef, text }: any) {
  gsap.registerPlugin(ScrollTrigger)
  let factRef0 = useRef(null)
  let factRef1 = useRef(null)

  useEffect(() => {
    gsap.to(factRef0.current, { opacity: 0, scrollTrigger: { end: 'center -10%', start: 'center 40%', scrub: true, trigger: factRef0.current, }, })
    gsap.from(factRef1.current, { opacity: 0, scrollTrigger: { end: 'center 60%', start: 'center 110%', scrub: true, trigger: factRef0.current, }, })
  })

	return (
    <div className='hover my-5 py-5' ref={ factRef0 }>
      <div className='my-5 py-5' ref={ factRef1 }>
        <h1 className={ Math.random() < .7 ? 'mt-5 pt-5 text-light' : 'mt-5 pt-5 text-danger' } ref={ customRef }>{ text.split(' | ')[0] }</h1>
        <p className='mb-5 pb-5 text-secondary'>{ text.split(' | ')[1] }</p>
      </div>
    </div>
	)
}
