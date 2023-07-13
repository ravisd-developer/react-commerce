
import './App.css';
import { Route, Router, BrowserRouter, Routes } from 'react-router-dom';
import HomePage from './pages/home.page';
import AboutPage from './pages/about.page';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <HomePage /> }/>
        <Route path='/about' element={ <AboutPage /> }/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
