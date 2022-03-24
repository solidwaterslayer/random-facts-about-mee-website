import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import Fact from "./Fact"

export default function Home() {
	function Cube() {
		let cubeRef = useRef<any>(null)

		useFrame(() => {
			cubeRef.current.rotation.x += .01
			cubeRef.current.rotation.y -= .005
			cubeRef.current.rotation.z += .01
		})
	
		return (
			<mesh ref={ cubeRef }>
				<boxBufferGeometry />
				<meshLambertMaterial />
			</mesh>
		)
	}

	return (
		<>
			<Canvas style={{ left: 0, position: 'fixed', top: 0, zIndex: -1 }}>
				<ambientLight />
				<directionalLight />
				<Cube />
			</Canvas>
			<Fact text='my least favorite number is 8 | its too symmetrical' />
			<Fact text='my favorite animal is squid' />
			<Fact text='i use light mode' />
			<Fact text='i like to play with knives' />
			<Fact text='my favorite shape is snowflake' />
			<Fact text='i think capital letters are overrated | i dont know if you can tell' />
			<Fact text='i like nightcore' />
			<Fact text='imm a minimalist' />
			<Fact text='my favorite number is 9' />
			<Fact text='my least favorite season is winter | when you are warm, you are unconfortable; but when you are cold, you are literally in pain' />
			<Fact text='imm ambidextrous' />
			<Fact text='my favorite color is red' />
		</>
	)
}
