import { faBaseball, faCat, faDice, faGem, faPaperPlane, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Tab, Row, Col, Nav } from 'react-bootstrap'
import Banner from './Banner'
import TabItem from './TabItem'
import ballGame from './videos/ball-game.mp4'
import diamondCollectingGame from './videos/diamond-collecting-game.mp4'
import paperPushingGame from './videos/paper-pushing-game.mp4'
import randomFactsAboutMeeWebsite from './videos/random-facts-about-mee-website.mp4'
import virtualPet from './videos/virtual-pet.mp4'

export default function Projects() {
	return (
		<>
			<div>
				<div className='banner banner-text bg-gradient bg-secondary justify-content-center text-light' style={{ textShadow: '1px 1px 8px #dc3545', }}>Here's A Curated List Of My Previous Projects</div>
				<Banner theme='bg-dark text-light' isVideoLeft={ false } video={ randomFactsAboutMeeWebsite } text='[4th] Random Facts About Mee Website'></Banner>
				<Banner theme='bg-light text-danger' isVideoLeft={ true } video={ diamondCollectingGame } text='[3rd] Diamond Collecting Game'></Banner>
				<Banner theme='bg-danger text-light' isVideoLeft={ false } video={ paperPushingGame } text='[2nd] Paper Pushing Game'></Banner>
				<Banner theme='bg-dark text-light' isVideoLeft={ true } video={ virtualPet } text='[1st] Virtual Pet'></Banner>
				<Banner theme='bg-secondary text-light' isVideoLeft={ false } video={ ballGame } text='[0th] Ball Game'></Banner>
			</div>
			<div>
				<div className='mx-0 row'>
					<div className='col-md-2'></div>
					<div className='col-md-8 col-sm-12' style={{ height: '90vh', }}>
						<div style={{ height: '15vh', }}></div>
						<Tab.Container defaultActiveKey={ 0 }>
							<Row>
								<Col sm={ 3 }>
									<Nav className='flex-column mb-3' variant='tabs'>
										<TabItem eventKey={ 0 } icon={ faDice } text='Random Facts About Mee Website'></TabItem>
										<TabItem eventKey={ 1 } icon={ faGem } text='Diamond Collecting Game'></TabItem>
										<TabItem eventKey={ 2 } icon={ faPaperPlane } text='Paper Pushing Game'></TabItem>
										<TabItem eventKey={ 3 } icon={ faCat } text='Virtual Pet'></TabItem>
										<TabItem eventKey={ 4 } icon={ faBaseball } text='Ball Game'></TabItem>
									</Nav>
								</Col>
								<Col sm={ 9 }>
									<Tab.Content>
										<Tab.Pane className='hover-activator' eventKey={ 0 }>
											<h1 className='h-line-height hover-target text-light'>Overview</h1>
											<p className='hover-target p-line-height text-danger'>
												write mee later OwO write mee later OwO write mee later OwO write mee later OwO write mee later OwO write mee later OwO write mee later OwO write mee later OwO write mee later OwO write mee later OwO write mee later OwO write mee later OwO write mee later OwO write mee later OwO
 											</p>
											<h2 className='h-line-height hover-target text-light'>Running Instance | Link To Project</h2>
											<a className='p-line-height text-secondary text-decoration-none' href='https://solidwaterslayer.github.io/random-facts-about-mee-website/' rel='noreferrer noopener' target='_blank'>
												https://solidwaterslayer.github.io/random-facts-about-mee-website/
												<FontAwesomeIcon className='ps-3' icon={ faUpRightFromSquare } />
											</a>
										</Tab.Pane>
										<Tab.Pane eventKey={ 1 }>
											<p className='text-light'>
												sidfjsidjfi djsiafji djsiafji djsiafji djsiafji djsiafji djsiafji djsiafji djsiafji djsiafji djsiafji djsiafji djsiafji djsiafji djsiafji djsiafji djsiafji djsiafji djsiafji
											</p>
										</Tab.Pane>
									</Tab.Content>
								</Col>
							</Row>
						</Tab.Container>
					</div>
					<div className='col-md-2'></div>
				</div>
			</div>
		</>
	)
}
