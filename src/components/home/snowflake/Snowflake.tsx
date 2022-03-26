import { faSnowflake } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

export function Snowflake({ winterRef }: any) {
  let upRef = useRef(null)
  let downRef = useRef(null)
  let snowflakeRef = useRef(null)

  useEffect(() => {
    let startX = Math.random() * 80 + 10
    let endX = startX + Math.random() * 20 - 10
    let startY = -Math.random() * 50
    let endY = 100
    gsap.to(upRef.current, { opacity: 0, scrollTrigger: { end: 'center -10%', start: 'center 40%', scrub: true, trigger: winterRef.current, }, })
    gsap.from(downRef.current, { opacity: 0, scrollTrigger: { end: 'center 60%', start: 'center 110%', scrub: true, trigger: winterRef.current, }, })
    gsap.fromTo(snowflakeRef.current, { rotation: 0, x: startX + 'vw', y: startY + 'vh', }, { duration: Math.random() * 5 + 5, ease: 'linear', repeat: -1, rotation: 720, scrollTrigger: { end: 'center -10%', start: 'center 110%', trigger: winterRef.current, toggleActions: 'resume pause resume pause', }, x: endX + 'vw', y: endY + 'vh', })
	})

  return (
    <div ref={ upRef } className='align-items-center d-flex justify-content-center position-fixed start-0 top-0' style={{ height: 0, width: 0, zIndex: -1, }}>
      <div ref={ downRef }>
        <div ref={ snowflakeRef }>
          <FontAwesomeIcon className={ Math.random() < .7 ? 'text-light' : 'text-danger' } icon={ faSnowflake } />
        </div>
      </div>
    </div>
  )
}
