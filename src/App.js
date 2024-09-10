import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AppointmentPage from './Components/AppointmentPage';

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
      <Home />
      <Routes>
      <Route path="/getstarted" element={<AppointmentPage />} />



      </Routes>

      </Router>
     
    </div>
  );
}

export default App;
