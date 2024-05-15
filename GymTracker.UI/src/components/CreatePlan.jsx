
import './Header.css'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'

function CreatePlan() {

  const planNameRef = useRef(null);

  const [exercise, setExcercise] = useState({
    exerciseName: '',
    set: '',
    repetitions: '',
  });
  const [exercises, setExercises] = useState([exercise])
  const [plan, setPlan] = useState({ planName: null, exercise: [exercise] });
  const [planName, setPlanName] = useState('');

  const addExercise = () => {
    setExercises([
      ...exercises,
      exercise
    ]);
  };
  const deleteExercise = (index)=>{
    if(exercises.length==1) return;
    const updatedExercises = [...exercises];
    updatedExercises.splice(index, 1);
    setExercises(updatedExercises);

  }

  useEffect(() => {
    if (planNameRef.current) {
      planNameRef.current.focus();
    }
  }, []);
  return (
    <>
      <Form>
        <div className='row'>
          <div className='col'>
            <Card >
              <Card.Body>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Plan Name</Form.Label>
                  <Form.Control type="text" ref={planNameRef} onChange={(e) => setPlanName(e.target.value)} />
                </Form.Group>

              </Card.Body>
            </Card>
          </div>
        </div>


        {exercises.map((exercise, index) => (
          <div className='row mt-2' key={index}>
            <div className='col'>
              <Card>
                <Card.Body>
                  <div className='row'>
                    <div className='col'>
                      <Form.Group className=''>
                        <Form.Control
                          type='text'
                          placeholder='Exercise Name'
                          value={exercise.exerciseName}
                          onChange={(e) => {
                            const updatedExercises = [...exercises];
                            updatedExercises[index].exerciseName = e.target.value;
                            setExercises(updatedExercises);
                          }}
                        />
                      </Form.Group>
                    </div>
                  </div>

                  <div className='row mt-2'>
                    <div className='col-6'>
                      <div className='row center'>
                        <div className='col-4'>
                          <Form.Group className=''>
                            <Form.Control
                              type='number'
                              value={exercise.sets}
                              onChange={(e) => {
                                const updatedExercises = [...exercises];
                                updatedExercises[index].sets = e.target.value;
                                setExercises(updatedExercises);
                              }}
                            />
                          </Form.Group>
                        </div>
                        <div className='col-4 text-center'>
                          <label>X</label>
                        </div>
                        <div className='col-4'>
                          <Form.Group className=''>
                            <Form.Control
                              type='number'
                              value={exercise.repetitions}
                              onChange={(e) => {
                                const updatedExercises = [...exercises];
                                updatedExercises[index].repetitions = e.target.value;
                                setExercises(updatedExercises);
                              }}
                            />
                          </Form.Group>
                        </div>

                      </div>
                    </div>
                    <div className='col-6'>
                      <div className=' d-flex justify-content-end center'>

                        <Button className='circle-btn-plus' variant="danger" size="sm" onClick={() => deleteExercise(index)}>
                          <FontAwesomeIcon icon={faTrash}  />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        ))}



        <div className='row mt-3 '>
          <div className='col d-flex justify-content-end'>

            <Button className='circle-btn-plus' variant="primary" size="md" onClick={addExercise}>
              <FontAwesomeIcon icon={faPlus} size="2x" />
            </Button>
          </div>
        </div>

      </Form>
    </>
  )


}

export default CreatePlan
