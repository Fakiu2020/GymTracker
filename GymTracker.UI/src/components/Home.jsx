import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import WorkoutsList from './WorkoutsList';
function Home() {
  const [currentDate, onChange] = useState(new Date());


  const handleDateSelected = (date) => {
    console.log(date)
    onChange(date)
  }

  return (
    <div className='row'>
      <div className='col-12'>
        <Calendar onChange={handleDateSelected} value={currentDate} />
      </div>

      <div className='col-12 mt-4'>
        <WorkoutsList />
      </div>

    </div>
  )
}

export default Home
