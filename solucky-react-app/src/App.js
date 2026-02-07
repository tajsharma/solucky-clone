import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Team from './components/Team';
import Shop from './components/Shop';
import Magazine from './components/Magazine';
import Events from './components/Events';
import Collabs from './components/Collabs';
import './components/Navbar.css';
import './App.css';


function AppContent() {
  const location = useLocation();
  const isWhiteNavbar = location.pathname !== "/events" && location.pathname !== "/media";

  return (
    <div className="App">
      <Navbar isWhiteNavbar={isWhiteNavbar} />
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/magazine" element={<Magazine/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/collabs" element={<Collabs/>} />
        </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
