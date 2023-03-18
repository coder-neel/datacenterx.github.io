
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import About from './routes/About';
import Careers from './routes/Careers';

function App() {

  const Navbar = () => {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/careers">Careers</Link>
      </div>
    )
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </div>
  );
}

export default App;
