import React,  { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
    const [dadosUser, setDadosUser] = useState({});
    const [userLog, setUserLog] = useState(false);
    const [progress, setProgress] = useState(0);
    const [habitos, setHabitos] = useState([]);
    const [habitosToday, setHabitosToday] = useState([]);
    const [load, setLoad] = useState(false);
    const [block, setBlock] = useState(false);

    useEffect(() => {
        const URL='https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';
        const dados = {
            email: localStorage.getItem('emailUser'),
            password: localStorage.getItem('senhaUser')
        };
        if(localStorage.getItem('emailUser') !== null){
            setBlock(true);
            axios.post(URL, dados)
            .then((response) => {
                const {id, name, image, password, token} = response.data;
                setDadosUser({id: id, name: name, image: image, password: password, token: token})
                setBlock(false);
            })
            .catch((err) => {console.log(err); alert('falha na autenticação')});
            setUserLog(true);
        }
    }, []);

    return (
        <AuthContext.Provider value={{
                dadosUser, setDadosUser,
                userLog, setUserLog, 
                progress, setProgress, 
                habitos, setHabitos, 
                habitosToday, setHabitosToday, 
                load, setLoad, 
                block, setBlock
            }}>
            {props.children}
        </AuthContext.Provider>
    )
}