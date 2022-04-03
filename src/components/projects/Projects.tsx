import { faBaseball, faCat, faDice, faGem, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { Tab, Row, Col, Nav } from 'react-bootstrap'
import Banner from './Banner'
import ballGame from './ball-game.mp4'
import diamondCollectingGame from './diamond-collecting-game.mp4'
import paperPushingGame from './paper-pushing-game.mp4'
import randomFactsAboutMeeWebsite from './random-facts-about-mee-website.mp4'
import TabItem from './TabItem'
import virtualPet from './virtual-pet.mp4'

export default function Projects() {
	return (
		<>
			<div>
				<div className='banner banner-title bg-gradient bg-secondary justify-content-center text-light' style={{ textShadow: '1px 1px 8px #dc3545', }}>Here's A Curated List Of My Previous Projects</div>
				<Banner theme='bg-dark text-light' isVideoLeft={ false } video={ randomFactsAboutMeeWebsite } title='[4th] Random Facts About Mee Website'></Banner>
				<Banner theme='bg-light text-danger' isVideoLeft={ true } video={ diamondCollectingGame } title='[3rd] Diamond Collecting Game'></Banner>
				<Banner theme='bg-danger text-light' isVideoLeft={ false } video={ paperPushingGame } title='[2nd] Paper Pushing Game'></Banner>
				<Banner theme='bg-dark text-light' isVideoLeft={ true } video={ virtualPet } title='[1st] Virtual Pet'></Banner>
				<Banner theme='bg-secondary text-light' isVideoLeft={ false } video={ ballGame } title='[0th] Ball Game'></Banner>
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
										<Tab.Pane eventKey={ 0 }>
											<p className='text-light'>
												djsiafji djsiafji djsiafji djsiafji djsiafji djsiafji djsiafji djsiafji djsiafji djsiafji djsiafji djsiafji djsiafji djsiafji djsiafji djsiafji djsiafji djsiafji djsiafji
											</p>
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
