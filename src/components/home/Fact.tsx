import gsap from 'gsap'
import { useEffect, useRef } from 'react'

export default function Fact({ customRef, text }: any) {
  let upRef = useRef(null)
  let downRef = useRef(null)

  useEffect(() => {
    gsap.to(upRef.current, { opacity: 0, scrollTrigger: { end: 'center -10%', scrub: true, start: 'center 40%', trigger: upRef.current, }, })
    gsap.from(downRef.current, { opacity: 0, scrollTrigger: { end: 'center 60%', scrub: true, start: 'center 110%', trigger: downRef.current, }, })
  })

	return (
    <div className='hover-activator my-5 py-5' ref={ upRef }>
      <div className='hover-target my-5 py-5' ref={ downRef }>
        <h1 className={ 'h-line-height mt-5 pt-5 ' + (Math.random() < .7 ? 'text-light' : 'text-danger') } ref={ customRef }>{ text.split(' | ')[0] }</h1>
        <p className='mb-5 pb-5 p-line-height text-secondary'>{ text.split(' | ')[1] }</p>
      </div>
    </div>
	)
}
