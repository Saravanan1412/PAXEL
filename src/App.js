import React from 'react';
import Register from './components/register';
import Login from './components/login';
import Forgot from './components/forgotpassword';
import Landing from './components/landingpage';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
function App() {
  
  return (
        <BrowserRouter>
          <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/Register" element={<Register/>} />
                <Route path="/ForgotPassword" element={<Forgot/>}/>
                <Route path="/DashBoard" element={<Landing/>}/>
    
          </Routes>
        </BrowserRouter>
  );
}
export default App;
