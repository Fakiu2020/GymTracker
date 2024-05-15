import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faList, faPersonRunning } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter, Link, NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import propTypes from 'prop-types';

function Footer({ setTitlePage }) {



  return (
    <div className='footer'>
      
        <nav className='navbar navbar-expand navbar-light row'>
          <ul className='navbar-nav '>
            <li className="nav-item col-4">
              <NavLink to='/' onClick={() => {
                setTitlePage('Gym Tracker')
              }} className='nav-link' >
                <div className="d-flex flex-column align-items-center"> {/* Contenedor para el icono y el texto */}
                  <div>
                    <FontAwesomeIcon icon={faHome} size="2x" />
                  </div>
                  <div>
                    <strong>Home</strong>
                  </div>
                </div>
              </NavLink>
            </li>
            <li className="nav-item col-4">
              <NavLink to='/create-workout' onClick={() => {
                setTitlePage('Plans')
              }} className='nav-link'>
                <div className="d-flex flex-column align-items-center"> {/* Contenedor para el icono y el texto */}
                  <div>
                    <FontAwesomeIcon icon={faPersonRunning} size="2x" />
                  </div>
                  <div>
                    <strong>Training</strong>
                  </div>
                </div>
              </NavLink>
            </li>
            <li className="nav-item col-4">
              <NavLink to='/plans' className='nav-link'>
                <div className="d-flex flex-column align-items-center"> {/* Contenedor para el icono y el texto */}
                  <div>
                    <FontAwesomeIcon icon={faList} size="2x" />
                  </div>
                  <div>
                    <strong>Plans</strong>
                  </div>
                </div>
              </NavLink>
            </li>
          </ul>
        </nav>
      
    </div>
  )
}

Footer.propTypes = {
  setTitlePage: propTypes.func.isRequired,
}
export default Footer
