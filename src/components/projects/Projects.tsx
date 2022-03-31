import randomFactsAboutMeeWebsite from './random-facts-about-mee-website.mp4'
import '../../index.css'

export default function Projects() {
	return (
		<>
			<div>
				<div className='align-items-center banner bg-dark bg-gradient d-flex'>
					<div className='mx-0 row'>
						<div className='col-md-6'></div>
						<div className='col-md-6 col-sm-12'><video autoPlay className='w-100' loop muted src={ randomFactsAboutMeeWebsite } /></div>
					</div>
					<div className='mx-0 position-absolute row text-light w-100'>
						<div className='col-md-6 col-sm-12'><h1>Random Facts About Mee Website [This project lol.]</h1></div>
						<div className='col-md-6'></div>
					</div>
				</div>
				<div className='banner bg-gradient bg-light'>imm currently working on this page</div>
				<div className='banner bg-danger bg-gradient'>imm currently working on this page</div>
				<div className='banner bg-gradient bg-secondary'>imm currently working on this page</div>
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
