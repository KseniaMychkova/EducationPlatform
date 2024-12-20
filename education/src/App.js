import {Routes, Route} from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login/index'
import Register from './pages/Register/index'
import Courses from './pages/Courses/index'
import AboutCourse from './pages/AboutCourse/index'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing></Landing>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/reg' element={<Register></Register>}></Route>
      <Route path='/courses' element={<Courses></Courses>}></Route>
      <Route path='/about' element={<AboutCourse></AboutCourse>}></Route>
    </Routes>
  );
}

export default App;
