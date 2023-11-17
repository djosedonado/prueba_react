import MainComponents from './components/mainComponents';
import { Routes, Route } from 'react-router-dom';
import Header from './components/pages/header/header';
import Report from './components/pages/report/report';
import About from './components/pages/about/about';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className='container-all'>
        <Routes>
          <Route path='/' element={<MainComponents />} />
          <Route path='/report' element={<Report />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;