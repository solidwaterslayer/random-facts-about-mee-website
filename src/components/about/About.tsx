import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faMailBulk, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Cube from './Cube'

export default function About() {
	return (
		<div className='mx-0 row'>
			<div className='col-md-3'></div>
			<div className='border-danger border-start col-md-9 col-sm-12 d-flex flex-column justify-content-center' style={{ height: '90vh', }}>
				<Cube />
				<div className='hover-activator text-light'>
					<h2 className='hover-target mt-5'>
						<FontAwesomeIcon className='pe-3' icon={ faLinkedin } />
						LinkedIn
					</h2>
				</div>
				<div className='hover-activator'>
					<div className='hover-target mb-5'>
						<a className='hover-target text-danger text-decoration-none' href='https://www.linkedin.com/in/michael-tran-012345679/' rel='noreferrer noopener' target='_blank'>
							https://www.linkedin.com/in/michael-tran-012345679/
							<FontAwesomeIcon className='ps-3' icon={ faUpRightFromSquare } />
						</a>
					</div>
				</div>

				<div className='hover-activator text-light'>
					<h2 className='hover-target mt-5'>
						<FontAwesomeIcon className='pe-3' icon={ faGithub } />
						GitHub
					</h2>
				</div>
				<div className='hover-activator'>
					<div className='hover-target mb-5'>
						<a className='hover-target text-danger text-decoration-none' href='https://github.com/solidwaterslayer' rel='noreferrer noopener' target='_blank'>
							https://github.com/solidwaterslayer
							<FontAwesomeIcon className='ps-3' icon={ faUpRightFromSquare } />
						</a>
					</div>
				</div>

				<div className='hover-activator text-light'>
					<h2 className='hover-target mt-5'>
						<FontAwesomeIcon className='pe-3' icon={ faMailBulk } />
						Email
					</h2>
				</div>
				<div className='hover-activator text-danger'>
					<p className='hover-target mb-5'>solidwater969@gmail.com</p>
				</div>
			</div>
		</div>
	)
}
