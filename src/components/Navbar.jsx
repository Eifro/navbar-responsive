/* fontawesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <div className='navbar w-full border shadow-md fixed bg-white'>
        <div className='py-4'>
            <div className='flex gap-1'>
                <span><FontAwesomeIcon icon={faCode} /></span>
                <p>Navbar</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar