import Banner from './Banner'
import ballGame from './ball-game.mp4'
import diamondCollectingGame from './diamond-collecting-game.mp4'
import paperPushingGame from './paper-pushing-game.mp4'
import randomFactsAboutMeeWebsite from './random-facts-about-mee-website.mp4'
import virtualPet from './virtual-pet.mp4'

export default function Projects() {
	return (
		<>
			<div>
				<div className='banner banner-title bg-gradient bg-secondary justify-content-center text-light'>Here's A Curated List Of My Previous Projects OwO</div>
				<Banner theme='bg-dark text-light' isVideoLeft={ false } video={ randomFactsAboutMeeWebsite } title='[4th] Random Facts About Mee Website'></Banner>
				<Banner theme='bg-light text-danger' isVideoLeft={ true } video={ diamondCollectingGame } title='[3rd] Diamond Collecting Game'></Banner>
				<Banner theme='bg-danger text-light' isVideoLeft={ false } video={ paperPushingGame } title='[2nd] Paper Pushing Game'></Banner>
				<Banner theme='bg-dark text-light' isVideoLeft={ true } video={ virtualPet } title='[1st] Virtual Pet'></Banner>
				<Banner theme='bg-secondary text-light' isVideoLeft={ false } video={ ballGame } title='[0th] Ball Game'></Banner>
			</div>
			<div className='text-danger'>imm currently working on this page</div>
			<div className='text-danger'>blend title and video together</div>
			<div className='text-danger'>make accordian</div>
			<div className='text-danger'>update readme</div>
			<div className='text-danger'>update github and linkedin</div>
			<div className='text-danger'>show everyone</div>
			<div className='text-danger'>show everyone</div>
			<div className='text-danger'>show everyone</div>
			<div className='text-danger'>show everyone</div>
			<div className='text-danger'>show everyone</div>
			<div className='text-danger'>show everyone</div>
			<div className='text-danger'>show everyone</div>
			<div className='text-danger'>show everyone</div>
			<div className='text-danger'>show everyone</div>
			<div className='text-danger'>show everyone</div>
			<div className='text-danger'>show everyone</div>
			<div className='text-danger'>show everyone</div>
			<div className='text-danger'>show everyone</div>
			<div className='text-danger'>show everyone</div>
			<div className='text-danger'>show everyone</div>
			<div className='text-danger'>show everyone</div>
			<div className='text-danger'>show everyone</div>
			<div className='text-danger'>show everyone</div>
			<div className='text-danger'>show everyone</div>
		</>
	)
}
