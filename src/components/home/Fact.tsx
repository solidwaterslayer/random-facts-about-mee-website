import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import '../../index.css'

export default function Fact({ customRef, text }: any) {
  gsap.registerPlugin(ScrollTrigger)
  let upRef = useRef(null)
  let downRef = useRef(null)

  useEffect(() => {
    gsap.to(upRef.current, { opacity: 0, scrollTrigger: { end: 'center -10%', scrub: true, start: 'center 40%', trigger: upRef.current, }, })
    gsap.from(downRef.current, { opacity: 0, scrollTrigger: { end: 'center 60%', scrub: true, start: 'center 110%', trigger: downRef.current, }, })
  })

	return (
    <div className='hover my-5 py-5' ref={ upRef }>
      <div className='my-5 py-5' ref={ downRef }>
        <h1 className={ Math.random() < .7 ? 'mt-5 pt-5 text-light' : 'mt-5 pt-5 text-danger' } ref={ customRef } style={{ lineHeight: 1.6, }}>{ text.split(' | ')[0] }</h1>
        <p className='mb-5 pb-5 text-secondary' style={{ lineHeight: 2, }}>{ text.split(' | ')[1] }</p>
      </div>
    </div>
	)
}
