import React, { useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "./Context";
import { ThreeDots } from  'react-loader-spinner'
import { LogoImg, FormLogin, LinkText } from "./styled";
import logo from "./../assets/Group 8.svg";

export default function Cadastro() {

    const { setBlock, block } = useContext(AuthContext);
    const URL='https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up';

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [nome, setNome] = useState();
    const [image, setImage] = useState();

    function EnviarCadastro() {
        setBlock(true);
        const dados = {
            email: email,
            name: nome,
            image: image,
            password: senha
        };
        const promise = axios.post(URL, dados);
        promise.then((response) => {
            alert('tudo certo!');
            console.log(response);
            setBlock(false);
            return <Navigate replace to="/" />;
        });
        promise.catch((err) => {
            alert('Ocorreu um erro!');
            console.log(err);
        });
    };
    return(
        <>
        <LogoImg src={logo} alt="TrackIt"></LogoImg>
        <FormLogin onSubmit={(event) => {event.preventDefault()}}>
            <input type={'email'} placeholder="email" onChange={(event) => setEmail(event.target.value)}></input>
            <input type={'password'} placeholder="senha" onChange={(event) => setSenha(event.target.value)}></input>
            <input type={'text'} placeholder="nome" onChange={(event) => setNome(event.target.value)}></input>
            <input type={'text'} placeholder="foto" onChange={(event) => setImage(event.target.value)}></input>
            <button type={'submit'} onClick={() => EnviarCadastro()}>
                {(block? <div className="Loader"><ThreeDots color="#FFFFFF" height={15} width={45} /></div> : 'Cadastrar')} 
            </button>
        </FormLogin>

        <Link to='/'><LinkText>Já tem uma conta? Faça login!</LinkText></Link>
        </>
    );
}

