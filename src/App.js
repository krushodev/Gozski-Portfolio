import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { Main } from './components/Main/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { InfoContainer } from './components/InfoContainer/InfoContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/info' element={<InfoContainer/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
