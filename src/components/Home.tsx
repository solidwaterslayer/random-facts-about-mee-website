import { faSnowflake } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import Fact from './Fact'

export default function Home() {
	let snowflakeTriggerRef = useRef(null)
	let snowflakeRef = useRef(null)

  useEffect(() => {
		let startLocation = Math.random() * 80 + 10
		let endLocation = startLocation + Math.random() * 20 - 10
		gsap.fromTo(snowflakeRef.current, { rotation: 0, x: startLocation + 'vw', y: '0vh', }, { duration: 3, ease: 'linear', repeat: -1, rotation: 360, scrollTrigger: { end: 'center 40%', markers: true, start: 'center 60%', trigger: snowflakeTriggerRef.current, toggleActions: 'play pause resume pause', }, x: endLocation + 'vw', y: '100vh', })
		// gsap.fromTo(snowflakeRef.current, { scale: 0, x: '50vw', y: '50vh', }, { duration: 3, ease: 'linear', repeat: -1, scale: 100, x: '50vw', y: '50vh', })
	})

	return (
		<>
			<div className='position-fixed top-0 start-0 d-flex justify-content-center align-items-center' ref={ snowflakeRef } style={{ height: 0, width: 0, zIndex: -1, }}>
				<FontAwesomeIcon className='text-light' icon={ faSnowflake } />
			</div>
			<Fact text='my least favorite number is 8 | its too symmetrical' />
			<Fact text='my favorite animal is squid' />
			<Fact text='i use light mode' />
			<Fact text='i like to play with knives' />
			<Fact text='my favorite shape is snowflake' />
			<Fact text='i think capital letters are overrated | i dont know if you can tell' />
			<Fact text='i like nightcore' />
			<Fact text='imm a minimalist' />
			<Fact text='my favorite number is 9' />
			<div ref={ snowflakeTriggerRef }>
				<Fact text='my least favorite season is winter | when you are warm, you are unconfortable; but when you are cold, you are literally in pain' />
			</div>
			<Fact text='imm ambidextrous' />
			<Fact text='my favorite color is red' />
		</>
	)
}
