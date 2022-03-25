import { useRef } from 'react'
import Fact from './Fact'
import { Girl } from './girl/Girl'
import { Snowflake } from './snowflake/Snowflake'

export default function Home() {
	let fractalRef = useRef(null)
	let danceRef = useRef(null)
	let winterRef = useRef(null)

	return (
		<>
			<Fact text='my least favorite number is 8 | its too symmetrical' />
			<Fact text='my favorite animal is squid' />
			<>
				<Fact text='i use light mode' />
			</>
			<Fact text='i like to play with knives' />
			<>
				<Fact customRef={ fractalRef } text='my favorite shape is snowflake' />
				<Snowflake fractalRef={ fractalRef } />
			</>
			<Fact text='i think capital letters are overrated | i dont know if you can tell' />
			<>
				<Fact customRef={ danceRef } text='i like nightcore' />
				<Girl danceRef={ danceRef } />
			</>
			<Fact text='imm a minimalist' />
			<Fact text='my favorite number is 9' />
			<>
				<Fact customRef={ winterRef } text='my least favorite season is winter | when you are warm, you are unconfortable; but when you are cold, you are literally in pain' />
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
			<Fact text='imm ambidextrous' />
			<Fact text='my favorite color is red' />
		</>
	)
}
