import React, {useContext} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { AuthContext } from './components/Context';
import Login from './components/Longin';
import Cadastro from './components/Cadastro';
import Habitos from './components/Habitos';
import Hoje from './components/Hoje';
import './App.css';

function App() {
  let login = (<Login />);
  const {userLog} = useContext(AuthContext);

  if(userLog){
    login = (<Habitos />);    
  }

  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={login}></Route>
            <Route path='/cadastro' element={<Cadastro />}></Route>
            <Route path='/habitos' element={<Habitos />}></Route>
            <Route path='/hoje' element={<Hoje />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
