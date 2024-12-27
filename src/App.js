import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  return (
    // <div className="App">
    //   <Router basename={process.env.NODE_ENV === 'production' ? '/GlobalFit' : ''}>
    //     <AnimatedRoutes />
    //   </Router>
    // </div>
    <div className="App">
      <Router basename={process.env.NODE_ENV === 'production' ? '/GlobalFit' : ''}>
        <Routes>
          {/* Redirige automáticamente a /home */}
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/*" element={<AnimatedRoutes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App; 

