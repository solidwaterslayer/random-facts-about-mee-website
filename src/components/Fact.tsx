import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from 'react'

export default function Fact({ text }: any) {
  gsap.registerPlugin(ScrollTrigger)
  let factRef = useRef(null)

  useEffect(() => {
    gsap.to(factRef.current, { opacity: 0, scrollTrigger: { end: 'center 10%', start: 'center 40%', scrub: true, trigger: factRef.current, toggleActions: 'play none none none', }, })
    gsap.from(factRef.current, { opacity: 0, scrollTrigger: { end: 'center 60%', start: 'center 90%', scrub: true, trigger: factRef.current, toggleActions: 'play none none none', }, })
  })

	return (
    <div className='my-5 py-5' ref={ factRef }>
      <div className='my-5 py-5'>
        <h1 className={ Math.random() < .7 ? 'text-light mt-5 pt-5' : 'text-danger mt-5 pt-5' }>{ text.split(' | ')[0] }</h1>
        <p className='text-secondary mb-5 pb-5'>{ text.split(' | ')[1] }</p>
      </div>
    </div>
	)
}
