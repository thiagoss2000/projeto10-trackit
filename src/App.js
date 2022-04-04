import React, {useContext} from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from './components/Context';
import Login from './components/Longin';
import Cadastro from './components/Cadastro';
import Habitos from './components/Habitos';
import Hoje from './components/Hoje';
import Historico from './components/Historico';
import Logout from './components/Logout';
import { AppStyled, Block } from './components/styled';

function App() {
  const { block, userLog } = useContext(AuthContext);

  return (
      <AppStyled>
        <BrowserRouter>
        <Block block={block}></Block>
          <Routes>
            <Route path='/' element={userLog? (<Navigate replace to="/hoje" />) : (<Login />)}></Route>
            <Route path='/cadastro' element={userLog? (<Logout />) : (<Cadastro />)}></Route>
            <Route path='/habitos' element={userLog? (<Habitos />) : (<Navigate replace to="/" />)}></Route>
            <Route path='/hoje' element={userLog? (<Hoje />) : (<Navigate replace to="/" />)}></Route>
            <Route path='/historico' element={userLog? (<Historico />) : (<Navigate replace to="/" />)}></Route>
          </Routes>
        </BrowserRouter>
      </AppStyled>
  );
}

export default App;
