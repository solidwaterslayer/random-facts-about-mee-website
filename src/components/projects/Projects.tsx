import Banner from './Banner'
import ballGame from './ball-game.mp4'
import diamondCollectingGame from './diamond-collecting-game.mp4'
import paperPushingGame from './paper-pushing-game.mp4'
import randomFactsAboutMeeWebsite from './random-facts-about-mee-website.mp4'
import virtualPet from './virtual-pet.mp4'
import { Tab, Row, Col, Nav } from 'react-bootstrap'

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
			<div>
				<div className='mx-0 row'>
					<div className='col-md-2'></div>
					<div className='col-md-8 col-sm-12' style={{ height: '90vh', }}>
						<div style={{ height: '15vh', }}></div>
						<Tab.Container defaultActiveKey='first'>
							<Row>
								<Col sm={ 3 }>
									<Nav className='flex-column mb-3' variant='tabs'>
										<Nav.Item className='mb-3'><Nav.Link className='text-danger' eventKey='first'>Tab 1</Nav.Link></Nav.Item>
										<Nav.Item className='mb-3'><Nav.Link className='text-danger' eventKey='second'>Tab 2</Nav.Link></Nav.Item>
									</Nav>
								</Col>
								<Col sm={ 9 }>
									<Tab.Content>
										<Tab.Pane eventKey='first'>
											<p className='text-light'>
												djsiafji djsiafji djsiafji djsiafji djsiafji djsiafji djsiafji djsiafji djsiafji djsiafji djsiafji djsiafji djsiafji djsiafji djsiafji djsiafji djsiafji djsiafji djsiafji
											</p>
										</Tab.Pane>
										<Tab.Pane eventKey='second'>
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
