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
		<Canvas className='pe-none position-fixed start-0 top-0' style={{ zIndex: -1 }}>
			<ambientLight />
			<directionalLight />
			<Cube />
		</Canvas>
	)
}
