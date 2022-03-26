import { useRef } from 'react'
import Fact from './Fact'
import { Fractal } from './fractal/Fractal'
import { Girl } from './girl/Girl'
import { Sky } from './sky/Sky'
import { Snowflake } from './snowflake/Snowflake'

export default function Home() {
	let sunriseRef = useRef(null)
	let crystalizeRef = useRef(null)
	let danceRef = useRef(null)
	let winterRef = useRef(null)

	return (
		<>
			<Fact text='my least favorite number is 8 | its too symmetrical' />
			<Fact text='my favorite animal is squid' />

			<Sky sunriseRef={ sunriseRef } />
			<Fact customRef={ sunriseRef } text='i use light mode' />
			<Fact text='i like to play with knives' />

			<Fractal crystalizeRef={ crystalizeRef } />
			<Fact customRef={ crystalizeRef } text='my favorite shape is snowflake' />
			<Fact text='i think capital letters are overrated | i dont know if you can tell' />

			<Girl danceRef={ danceRef } />
			<Fact customRef={ danceRef } text='i like nightcore' />
			<Fact text='imm a minimalist' />
			<Fact text='my favorite number is 9' />

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
			<Fact text='imm ambidextrous' />
			<Fact text='my favorite color is red' />
		</>
	)
}
