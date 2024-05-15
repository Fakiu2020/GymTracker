
import './Header.css'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Header() {

  // const [plans, setPlans]= useState([]);

  const plans = [
    { id: 1, name: 'Pectorales/Hombro', totalExersices: 4 },
    { id: 2, name: 'Cuadriceps/Espalda', totalExersices: 2 },
    { id: 3, name: 'Isquio/Tricep', totalExersices: 6 },
  ]

  return (
    <>
      <div className='row'>
        <div className='col'>
          {plans && plans.length > 0 ? (
            <ListGroup >
              {plans.map((element) => (
                <ListGroup.Item className='' key={element.id}>
                  <div className='row center'>
                    {/* <div className='col-2 '>
                  <div className="circle center">
                    <span>{element.id}</span>
                  </div>
                </div> */}
                    <div className='col-12'>
                      <span>{element.name}</span>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col'>
                      <span className="blockquote-footer">
                        {element.totalExersices} exersice(s)
                      </span>
                    </div>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          ) : (
            null
          )}
        </div>
      </div>

      <div className='row container-button-plus'>
        <div className='col '>
          <Link to="/plans/create" className="">
            <Button className='circle-btn-plus' variant="primary" size="lg">
              <FontAwesomeIcon icon={faPlus} size="2x" />
            </Button>
          </Link>
        </div>
      </div>

    </>
  )


}

export default Header
