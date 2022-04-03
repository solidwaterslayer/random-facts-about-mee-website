import { faBaseball, faCat, faDice, faEllipsis, faGem, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { Tab, Row, Col, Nav } from 'react-bootstrap'
import Banner from './Banner'
import { TabContent } from './TabContent'
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
				<div className='mx-0 my-5 row'>
					<div className='col-md-2'></div>
					<div className='col-md-8 col-sm-12'>
						<div></div>
						<Tab.Container defaultActiveKey={ 0 }>
							<Row>
								<Col sm={ 3 }>
									<Nav className='flex-column mb-3' variant='tabs'>
										<TabItem eventKey={ 0 } icon={ faDice } text='Random Facts About Mee Website'></TabItem>
										<TabItem eventKey={ 1 } icon={ faGem } text='Diamond Collecting Game'></TabItem>
										<TabItem eventKey={ 2 } icon={ faPaperPlane } text='Paper Pushing Game'></TabItem>
										<TabItem eventKey={ 3 } icon={ faCat } text='Virtual Pet'></TabItem>
										<TabItem eventKey={ 4 } icon={ faBaseball } text='Ball Game'></TabItem>
										<TabItem eventKey={ 5 } icon={ faEllipsis } text='And More!!'></TabItem>
									</Nav>
								</Col>
								<Col sm={ 9 }>
									<Tab.Content>
										<TabContent
											eventKey={ 0 }
											text='This is my 4th project [2022]. I started this project to learn about javascript animations, UI|UX, responsiveness, accessibility, and react.'
											link='https://solidwaterslayer.github.io/random-facts-about-mee-website/'
										/>
										<TabContent
											eventKey={ 1 }
											text='This is my 3rd project [2021]. I started this project to learn about graphics, lighting, shadows, animation, interactivity, cameras, textures, and transformations.'
											link='https://solidwaterslayer.github.io/diamond-collecting-game/'
										/>
										<TabContent
											eventKey={ 2 }
											text='This is my 2nd project [2020]. I started this project to learn about test-driven development. The project has a backend with 100% mutation coverage.'
											link='https://solidwaterslayer.github.io/paper-pushing-game-client/'
										/>
										<TabContent
											eventKey={ 3 }
											text='This is my 1st project [2020]. I started this project to learn angular and css.'
											link='https://solidwaterslayer.github.io/virtual-pet/'
										/>
										<TabContent
											eventKey={ 4 }
											text='This is my 0th project [2019]. I started this project to learn about python and object-oriented programming.'
											link='https://replit.com/@solidwater969/ball-game?v=1'
										/>
										<TabContent
											eventKey={ 5 }
											text='Future projects will be on github.'
											link='https://github.com/solidwaterslayer'
										/>
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
