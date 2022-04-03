import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { LogoImg, FormLogin, LinkText } from "./styled";
import logo from "./../assets/Group 8.svg";

export default function Login() {

    const URL='https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    function EnviarLogin() {
        const dados = {
            email: email,
            password: senha
        };
        // console.log(dados);
        axios.post(URL, dados)
        .then((response) => {
            const {id, name, image, email, password, token} = response.data;
            localStorage.setItem('user',{'id': id, 'name': name, 'image': image, 'email': email, 'password': password, 'token': token});
        })
        .catch(() => alert('falha na autenticação'));
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
