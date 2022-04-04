import React, {useContext} from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from './components/Context';
import Login from './components/Longin';
import Cadastro from './components/Cadastro';
import Habitos from './components/Habitos';
import Hoje from './components/Hoje';
import { Block } from './components/styled';
import './App.css';
import Logout from './components/Logout';

function App() {
  const { block, userLog } = useContext(AuthContext);

  return (
      <div className="App">
        <BrowserRouter>
        <Block block={block}></Block>
          <Routes>
            <Route path='/' element={userLog? (<Navigate replace to="/hoje" />) : (<Login />)}></Route>
            <Route path='/cadastro' element={userLog? (<Logout/ >) : (<Cadastro />)}></Route>
            <Route path='/habitos' element={userLog? (<Habitos />) : (<Navigate replace to="/" />)}></Route>
            <Route path='/hoje' element={userLog? (<Hoje />) : (<Navigate replace to="/" />)}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
