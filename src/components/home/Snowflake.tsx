import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import SnowflakeTexture from './SnowflakeTexture.png'

export function Snowflake({ fractalRef, winterRef }: any) {
  let snowflakeRef = useRef(null)

  useEffect(() => {
    let triggerRef: any = undefined

    if (fractalRef !== undefined) {
      gsap.fromTo(snowflakeRef.current, { scale: 0, x: '50vw', y: '50vh', }, { duration: 3, scale: 2, scrollTrigger: { end: 'center -10%', start: 'center 90%', trigger: fractalRef.current, toggleActions: 'play reset play reset', }, x: '50vw', y: '50vh', })
      triggerRef = fractalRef
    } else if (winterRef !== undefined) {
      let startX = Math.random() * 80 + 10
      let endX = startX + Math.random() * 20 - 10
      let startY = -Math.random() * 50
      let endY = 100
      gsap.fromTo(snowflakeRef.current, { rotation: 0, scale: .02, x: startX + 'vw', y: startY + 'vh', }, { duration: Math.random() * 5 + 5, ease: 'linear', repeat: -1, rotation: 720, scale: .02, scrollTrigger: { end: 'center -10%', start: 'center 90%', trigger: winterRef.current, toggleActions: 'resume pause resume pause', }, x: endX + 'vw', y: endY + 'vh', })
      triggerRef = winterRef
    } if (triggerRef !== undefined) {
      gsap.to(snowflakeRef.current, { opacity: 0, scrollTrigger: { end: 'center -10%', start: 'center 40%', scrub: true, trigger: triggerRef.current, toggleActions: 'play pause play pause', }, })
      gsap.from(snowflakeRef.current, { opacity: 0, scrollTrigger: { end: 'center 60%', start: 'center 90%', scrub: true, trigger: triggerRef.current, toggleActions: 'play pause play pause', }, })
    }
	})

  return (
    <div className='position-fixed top-0 start-0 d-flex justify-content-center align-items-center' ref={ snowflakeRef } style={{ height: 0, width: 0, zIndex: -1, }}>
      <img alt='' src={ SnowflakeTexture } />
    </div>
  )
}
