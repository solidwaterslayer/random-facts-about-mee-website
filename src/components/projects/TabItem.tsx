import { Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function TabItem({ eventKey, icon, text }: any) {
	return (
    <Nav.Item className='hover-activator mb-3'>
      <Nav.Link className='hover-target text-secondary' eventKey={ eventKey }>
        <FontAwesomeIcon className='pe-2' icon={ icon } />
        { text }
      </Nav.Link>
    </Nav.Item>
	)
}
