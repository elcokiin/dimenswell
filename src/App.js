import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import R1 from './pages/R1';
import R2 from './pages/R2';
import R3 from './pages/R3';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<R1/>}/>
        <Route path="/r2" element={<R2/>}/>
        <Route path="/r3" element={<R3/>}/>
      </Routes>
    </Router>
  );
}

export default App;
