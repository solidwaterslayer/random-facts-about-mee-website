import { faSnowflake } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

export function Snowflake({ winterRef }: any) {
  let snowflakeRef = useRef(null)

  useEffect(() => {
    let startX = Math.random() * 80 + 10
    let endX = startX + Math.random() * 20 - 10
    let startY = -Math.random() * 50
    let endY = 100
    gsap.fromTo(snowflakeRef.current, { rotation: 0, x: startX + 'vw', y: startY + 'vh', }, { duration: Math.random() * 5 + 5, ease: 'linear', repeat: -1, rotation: 720, scrollTrigger: { end: 'center -10%', start: 'center 110%', trigger: winterRef.current, toggleActions: 'resume pause resume pause', }, x: endX + 'vw', y: endY + 'vh', })
    gsap.to(snowflakeRef.current, { opacity: 0, scrollTrigger: { end: 'center -10%', start: 'center 40%', scrub: true, trigger: winterRef.current, toggleActions: 'play pause play pause', }, })
    gsap.from(snowflakeRef.current, { opacity: 0, scrollTrigger: { end: 'center 60%', start: 'center 110%', scrub: true, trigger: winterRef.current, toggleActions: 'play pause play pause', }, })
	})

  return (
    <div className='position-fixed top-0 start-0 d-flex justify-content-center align-items-center' ref={ snowflakeRef } style={{ height: 0, width: 0, zIndex: -1, }}>
      <FontAwesomeIcon className={ Math.random() < .7 ? 'text-light' : 'text-danger' } icon={ faSnowflake } />
    </div>
  )
}
