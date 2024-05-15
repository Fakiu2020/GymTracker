import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Plans from './components/Plans';
import CreatePlan from './components/CreatePlan';
import CreateWorkout from './components/CreateWorkout';

function App() {
  const [titlePage, setTitlePage] = useState('Gym Tracker')


  return (
    <>
      <BrowserRouter>
        <Header title={titlePage} />
        <div className='container-fluid mt-2 mb-2'>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/plans' element={<Plans />} />
            <Route path='/plans/create' element={<CreatePlan />} />
            <Route path='/create-workout' element={<CreateWorkout />} />
          </Routes>

        </div>
        <Footer  setTitlePage={setTitlePage}/>
      </BrowserRouter>
    </>
  )
}

export default App
