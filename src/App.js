import { Routes, Route } from 'react-router-dom';
import Login from './Components/LogIn';
import Signup from './Components/SignUp';
import Profile from './Components/Profile';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        {/* <Route path='/'/> */}
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
