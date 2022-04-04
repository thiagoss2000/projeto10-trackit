import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "./Context";
import { ThreeDots } from  'react-loader-spinner'
import { AdicionarHAbito, DaysButton } from "./styled";

export default function AddHabito(){
  
    const { setLoad, load, setBlock, block, dadosUser } = useContext(AuthContext);

    const[formAdd, setFormAdd] = useState(false);
    const[inputName, setInputName] = useState('');
    const[inputDays, setinputDays] = useState([]);

    useEffect(() => {
        
    },[load]);

    function selecionaToggle(day){
        if(inputDays.includes(day)){
            let temp = [...inputDays];
            temp.splice(temp.indexOf(day), 1);
            setinputDays(temp);
        }else{
            let temp = [...inputDays];
            temp.push(day);
            setinputDays(temp);
        }
    }

    function postHabito(days, name){
        setBlock(true);
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
        const config = {
            headers: {
                "Authorization": `Bearer ${dadosUser.token}`
            }
        };
        const body = {
            name: name,
            days: days 
        }; 
        axios.post(URL, body, config)
        .then((response) => {
            setInputName('');
            setinputDays([]);
            setFormAdd(false)
            setBlock(false);
            setLoad(!load);
        })
        .catch((err) => {console.log(err); alert('Ops, ocorreu um erro, tente novamente.')});
    }

    const days = {days: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'], number:[0, 1, 2, 3, 4, 5, 6]};
    if (formAdd){
        return (
            <>
            <div>
                    <label>Meus Habitos</label>
                    <button className="AdicionarHabito" onClick={() => setFormAdd(true)} >+</button>
            </div>
            <AdicionarHAbito onSubmit={(event) => {event.preventDefault()}}>
                <input required type={'text'} value={inputName} onChange={(event) => setInputName(event.target.value)} placeholder="nome do hábito"></input>
                <div>
                    {days.number.map((number) => {
                        return <DaysButton key={days.number[number]} type='button' 
                            onClick={() => selecionaToggle(number)} selecionado={inputDays.includes(number)}
                        >{days.days[number]}</DaysButton>
                    })}
                </div>
                <button type='button' className="cancelar" onClick={() => setFormAdd(false) }>Cancelar</button>
                <button type='submit' className="salvar" 
                    onClick={() => (inputDays.length !== 0 && inputName !== ''? postHabito(inputDays, inputName):alert('Preencha todos os campos!'))}
                > {(block? <div className="Loader"><ThreeDots color="#FFFFFF" height={15} width={45} /></div> : 'Salvar')} </button>
            </AdicionarHAbito>
            </>
        );
    }else{
        return (
            <div>
                    <label>Meus Habitos</label>
                    <button className="AdicionarHabito" onClick={() => setFormAdd(true)} >+</button>
            </div>
        );
    }
}