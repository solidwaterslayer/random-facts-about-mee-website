import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Tab } from 'react-bootstrap'

export function TabContent({ eventKey, text, link }: any) {
  return (
    <Tab.Pane className='hover-activator' eventKey={ eventKey }>
      <h1 className='h-line-height hover-target text-light'>Overview</h1>
      <p className='hover-target p-line-height text-danger'>
        { text }
      </p>

      <h2 className='h-line-height hover-target text-light'>Running Instance | Link To Project</h2>
      <a className='p-line-height text-secondary text-decoration-none' href={ link } rel='noreferrer noopener' target='_blank'>
        { link }
        <FontAwesomeIcon className='ps-3' icon={ faUpRightFromSquare } />
      </a>
    </Tab.Pane>
  )
}
