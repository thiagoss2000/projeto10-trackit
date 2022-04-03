import React, { useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "./Context";
import { Habito, DaysButton } from "./styled";
import lixo from "./../assets/Vector.svg"

export default function RenderHabito(){
    const {habitos, setHabitos} = useContext(AuthContext);
    
    const config = {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    };

    function deleteHabito(id){
        const URL=`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;
        axios.delete(URL, config)
        .then((response) => {console.log(response); window.location.reload()})
        .catch((err) => console.log(err));
    }

    useEffect(() => {
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
    
        axios.get(URL, config)
        .then((response) => {
            setHabitos(response.data);
        })
        .catch((err) => console.log(err));
    }, []);
    const days = {days: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'], number:[0, 1, 2, 3, 4, 5, 6]};
    console.log(habitos);
    if(habitos.length !== 0){
        return(
            <Habito>
                {habitos.map((habito) => {
                    return(
                        <div key={habito.id}>
                            <p>{habito.name}</p>
                            <section>
                                {days.number.map((number) => {
                                    return <DaysButton key={habito.id + number} selecionado={habito.days.includes(number)}>{days.days[number]}</DaysButton>
                                })}
                            </section>
                            <img src={lixo} alt="delete" onClick={() => deleteHabito(habito.id)}></img>
                        </div>
                    );
                })}
            </Habito>
        );
    }else{
        return(
            <p>
                Você não tem nenhum hábito cadastrado ainda. 
                Adicione um hábito para começar a trackear!
            </p>
        );
    }
}