import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faMailBulk, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../index.css'
import Cube from './Cube'

export default function About() {
	return (
		<div className='d-flex flex-column justify-content-center' style={{ height: '90vh', }}>
			<Cube />
			<h2 className='hover text-light'><FontAwesomeIcon className='pe-3' icon={ faLinkedin } />LinkedIn</h2>
			<a className='hover mb-5 pb-5 text-danger text-decoration-none' href='https://www.linkedin.com/in/michael-tran-012345679/' rel='noreferrer noopener' target='_blank'>
				https://www.linkedin.com/in/michael-tran-012345679/
				<FontAwesomeIcon className='ps-3' icon={ faUpRightFromSquare } />
			</a>

			<h2 className='hover text-light'><FontAwesomeIcon className='pe-3' icon={ faGithub } />GitHub</h2>
			<a className='hover mb-5 pb-5 text-danger text-decoration-none' href='https://github.com/solidwaterslayer' rel='noreferrer noopener' target='_blank'>
				https://github.com/solidwaterslayer
				<FontAwesomeIcon className='ps-3' icon={ faUpRightFromSquare } />
			</a>

			<h2 className='hover text-light'><FontAwesomeIcon className='pe-3' icon={ faMailBulk } />Email</h2>
			<p className='hover mb-5 pb-5 text-danger'>solidwater969@gmail.com</p>
		</div>
	)
}
