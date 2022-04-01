import './App.css';
import Login from './components/Longin';
import Cadastro from './components/Cadastro';
import Habitos from './components/Habitos';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/cadastro' element={<Cadastro />}></Route>
          <Route path='/habitos' element={<Habitos />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
