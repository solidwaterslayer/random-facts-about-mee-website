import randomFactsAboutMeeWebsite from './random-facts-about-mee-website.mp4'
import '../../index.css'

export default function Projects() {
	return (
		<>
			<div>
				<div className='banner bg-dark bg-gradient text-light'>
					<div className='mx-0 row'>
						<div className='col-md-6'></div>
						<div className='col-md-6 col-sm-12'><video autoPlay className='w-100' loop muted playsInline src={ randomFactsAboutMeeWebsite } /></div>
					</div>
					<div className='mx-0 position-absolute row w-100'>
						<div className='col-md-6 col-sm-12'><h1 className='banner-title'>[4th] Random Facts About Mee Website</h1></div>
						<div className='col-md-6'></div>
					</div>
				</div>

				<div className='banner bg-gradient bg-light text-danger'>
					<div className='mx-0 row'>
						<div className='col-md-6 col-sm-12'><video autoPlay className='w-100' loop muted playsInline src={ randomFactsAboutMeeWebsite } /></div>
						<div className='col-md-6'></div>
					</div>
					<div className='mx-0 position-absolute row w-100'>
						<div className='col-md-6'></div>
						<div className='col-md-6 col-sm-12'><h1 className='banner-title'>[3rd] Diamond Collecting Game</h1></div>
					</div>
				</div>

				<div className='banner bg-gradient bg-danger text-light'>
					<div className='mx-0 row'>
						<div className='col-md-6'></div>
						<div className='col-md-6 col-sm-12'><video autoPlay className='w-100' loop muted playsInline src={ randomFactsAboutMeeWebsite } /></div>
					</div>
					<div className='mx-0 position-absolute row w-100'>
						<div className='col-md-6 col-sm-12'><h1 className='banner-title'>[2nd] Paper Pushing Game</h1></div>
						<div className='col-md-6'></div>
					</div>
				</div>

				<div className='banner bg-gradient bg-dark text-light'>
					<div className='mx-0 row'>
						<div className='col-md-6 col-sm-12'><video autoPlay className='w-100' loop muted playsInline src={ randomFactsAboutMeeWebsite } /></div>
						<div className='col-md-6'></div>
					</div>
					<div className='mx-0 position-absolute row w-100'>
						<div className='col-md-6'></div>
						<div className='col-md-6 col-sm-12'><h1 className='banner-title'>[1st] Virtual Pet</h1></div>
					</div>
				</div>

				<div className='banner bg-gradient bg-secondary text-light'>
					<div className='mx-0 row'>
						<div className='col-md-6'></div>
						<div className='col-md-6 col-sm-12'><video autoPlay className='w-100' loop muted playsInline src={ randomFactsAboutMeeWebsite } /></div>
					</div>
					<div className='mx-0 position-absolute row w-100'>
						<div className='col-md-6 col-sm-12'><h1 className='banner-title'>[0th] Ball Game</h1></div>
						<div className='col-md-6'></div>
					</div>
				</div>
			</div>
			<div className='text-danger'>imm currently working on this page</div>
			<div className='text-danger'>make a banner component</div>
			<div className='text-danger'>blend title and video together</div>
			<div className='text-danger'>record video</div>
			<div className='text-danger'>make accordian</div>
			<div className='text-danger'>update readme</div>
			<div className='text-danger'>update github and linkedin</div>
			<div className='text-danger'>show everyone</div>
		</>
	)
}
