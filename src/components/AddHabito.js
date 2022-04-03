import React, { useState } from "react";
import axios from "axios";
import { AdicionarHAbito, DaysButton } from "./styled";

export default function AddHabito(){
  
    const[formAdd, setFormAdd] = useState(false);
    const[inputName, setInputName] = useState('');
    const[inputDays, setinputDays] = useState([]);

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
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
        const config = {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        };
        const body = {
            name: name,
            days: days 
        }; 
        axios.post(URL, body, config)
        .then((response) => {console.log(response); window.location.reload()})
        .catch((err) => console.log(err));
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
                >Salvar</button>
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