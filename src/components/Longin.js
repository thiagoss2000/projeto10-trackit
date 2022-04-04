import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "./Context";
import { LogoImg, FormLogin, LinkText } from "./styled";
import logo from "./../assets/Group 8.svg";

export default function Login() {
    const { setBlock, setDadosUser } = useContext(AuthContext);

    const URL='https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState(); 

    function EnviarLogin() {
        setBlock(true);
        const dados = {
            email: email,
            password: senha
        };
        axios.post(URL, dados)
        .then((response) => {
            const {id, name, image, token} = response.data;
            setDadosUser({id: id, name: name, image: image, token: token})
            localStorage.setItem('emailUser', `${email}`);
            localStorage.setItem('senhaUser', `${senha}`);
            setBlock(false);
        })
        .catch((err) => {console.log(err); alert('falha na autenticação')});
    };
    return(
        <>
        <LogoImg src={logo} alt="TrackIt"></LogoImg>
        <FormLogin onSubmit={(event) => {event.preventDefault()}}>           
            <input type={'email'} placeholder="email" onChange={(event) => setEmail(event.target.value)}></input>
            <input type={'password'} placeholder="senha" onChange={(event) => setSenha(event.target.value)}></input>
            <button type={'submit'} onClick={() => EnviarLogin()}>Entrar</button>
        </FormLogin>

        <Link to='/cadastro' style={{textDecoration: 'none'}}><LinkText>Não tem uma conta? Cadastre-se!</LinkText></Link>
        </>
    );
}
