import './App.css';
import { Routes, Route} from 'react-router-dom';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Home from './components/home/Home';
// import Header from './Header/Header';
import ResetPassword from './components/ResetPassword/ResetPassword';
// import Footer from './Footer/Footer';




function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/home" element={<Home></Home>} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/ForgotPassword" element={<ResetPassword />} />
         
      </Routes>


      
    </div>
  );
}

export default App;
