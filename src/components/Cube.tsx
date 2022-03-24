import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export default function Cube() {
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
		<Canvas style={{ left: 0, position: 'fixed', top: 0, zIndex: -1 }}>
			<ambientLight />
			<directionalLight />
			<Cube />
		</Canvas>
	)
}
