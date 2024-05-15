
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons'; 
import propTypes from 'prop-types';


function Header({title}) {

  return (
    <div className='header'>
      <div className='container'>
        <div className="row" >
          <div className="col ">
            <h3 className='blockquote'>{title}</h3>
          </div>

          <div className="col text-end">
          <FontAwesomeIcon icon={faCog} size="lg" />
          </div>
        </div>
      </div>

    </div>
  )
}

Header.propTypes={
 title:propTypes.string.isRequired,
}

export default Header
