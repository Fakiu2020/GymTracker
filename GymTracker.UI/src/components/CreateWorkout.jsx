import { useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

function CreateWorkout() {
  const allWorkouts = [
    { id: 1, name: 'Camiseta' },
    { id: 2, name: 'Pantalón' },
    { id: 3, name: 'Zapatos' },
    { id: 4, name: 'Bolso' },
    { id: 5, name: 'Gorra' },
    { id: 6, name: 'Calcetines' },
  ]


  return (
    <>
      {allWorkouts && allWorkouts.length > 0 ? (
        <ListGroup >
          {allWorkouts.map((element) => (
            <ListGroup.Item className='' key={element.id}>
              <div className='row center'>
                <div className='col-2 '>
                  <div className="circle center">
                    <span>{element.id}</span>
                  </div>
                </div>
                <div className='col-10'>
                  <span>{element.name}</span>

                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        null
      )}
    </>
  );
}

export default CreateWorkout
