import randomFactsAboutMeeWebsite from './random-facts-about-mee-website.mp4'
import '../../index.css'

export default function Projects() {
	return (
		<>
			<div>
				<div className='banner bg-gradient bg-secondary'>
					<video autoPlay loop muted src={ randomFactsAboutMeeWebsite } style={{ height: '400px', }} />
				</div>
				<div className='banner bg-dark bg-gradient'>imm currently working on this page</div>
				<div className='banner bg-danger bg-gradient'>imm currently working on this page</div>
				<div className='banner bg-gradient bg-light'>imm currently working on this page</div>
			</div>
			<div className='text-danger'>imm currently working on this page</div>
			<div className='text-danger'>imm currently working on this page</div>
			<div className='text-danger'>imm currently working on this page</div>
			<div className='text-danger'>imm currently working on this page</div>
			<div className='text-danger'>imm currently working on this page</div>
			<div className='text-danger'>imm currently working on this page</div>
			<div className='text-danger'>imm currently working on this page</div>
			<div className='text-danger'>imm currently working on this page</div>
			<div className='text-danger'>imm currently working on this page</div>
			<div className='text-danger'>imm currently working on this page</div>
		</>
	)
}
