import { useRef } from 'react'
import Fact from './Fact'
import { Fractal } from './fractal/Fractal'
import { Girl } from './girl/Girl'
import { Knife } from './knife/Knife'
import { Letters } from './letters/Letters'
import { Sky } from './sky/Sky'
import { Snowflake } from './snowflake/Snowflake'
import { Squid } from './squid/Squid'

export default function Home() {
	let danceRef = useRef(null)
	let crystalizeRef = useRef(null)
	let swimRef = useRef(null)
	let zoomRef = useRef(null)
	let sunriseRef = useRef(null)
	let fightRef = useRef(null)
	let throwRef = useRef(null)
	let winterRef = useRef(null)

	return (
		<div className='mx-0 row'>
			<div className='col-md-3'></div>
			<div className='border-danger border-start col-md-9 col-sm-12'>
				<Fact text='my favorite color is red' />

				<Girl danceRef={ danceRef } />
				<Fact customRef={ danceRef } text='i like nightcore' />

				<Fractal crystalizeRef={ crystalizeRef } />
				<Fact customRef={ crystalizeRef } text='my favorite shape is snowflake' />

				<Squid swimRef={ swimRef } zoomRef={ zoomRef } />
				<Fact customRef={ swimRef } text='my favorite animal is squid' />
				<Fact customRef={ zoomRef } text='my favorite number is 9' />

				<Sky sunriseRef={ sunriseRef } />
				<Fact customRef={ sunriseRef } text='i use light mode' />

				<Fact text='imm ambidextrous' />

				<Letters fightRef={ fightRef } />
				<Fact customRef={ fightRef } text='i think capital letters are overrated | i dont know if you can tell' />

				<Fact text='my least favorite number is 8 | its too symmetrical' />

				<Knife throwRef={ throwRef } />
				<Fact customRef={ throwRef } text='i like to play with knives' />

				<Fact text='imm a minimalist' />

				<>
					<Snowflake winterRef={ winterRef } />
					<Snowflake winterRef={ winterRef } />
					<Snowflake winterRef={ winterRef } />
					<Snowflake winterRef={ winterRef } />
					<Snowflake winterRef={ winterRef } />
					<Snowflake winterRef={ winterRef } />
					<Snowflake winterRef={ winterRef } />
					<Snowflake winterRef={ winterRef } />
					<Snowflake winterRef={ winterRef } />
					<Snowflake winterRef={ winterRef } />
					<Snowflake winterRef={ winterRef } />
					<Snowflake winterRef={ winterRef } />
					<Snowflake winterRef={ winterRef } />
					<Snowflake winterRef={ winterRef } />
					<Snowflake winterRef={ winterRef } />
					<Snowflake winterRef={ winterRef } />
				</>
				<Fact customRef={ winterRef } text='my least favorite season is winter | when you are warm, you are unconfortable; but when you are cold, you are literally in pain' />
			</div>
		</div>
	)
}
