import { useContext, useEffect } from "react";
import { AuthContext } from "./Context";
import axios from "axios";
import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";
import check from "./../assets/Vector2.svg"

export default function Hoje(){
    const { habitosToday, progress, setProgress, setHabitosToday } = useContext(AuthContext);

    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today';
    const config = {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    };
    useEffect(() => {
        axios.get(URL, config)
        .then((response) => {
            setHabitosToday(response.data);
        })
        .catch((err) => console.log(err));
    }, []);

    function concluir(id, done){
        const URLMark=`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`
        const URLUnMark=`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`
        if(done){
            axios.post(URLUnMark, config)
            .then((response) => console.log(response))
            .catch((err) => console.log(err));
        }else{
            axios.post(URLMark, config)
            .then((response) => console.log(response))
            .catch((err) => console.log(err));
        }
    }
    const diasSemana = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];
    const dayjs = require('dayjs');
    const date = dayjs();
    return(
        <>
        <Header />
        <Corpo progress={(progress === 0? '#BABABA' : '#8FC549')}>
        <h2>{`${diasSemana[date.$W]}, ${("00" + (date.$D)).slice(-2)}/${("00" + (date.$M +1)).slice(-2)}`}</h2>
        <h4>{(progress === 0? 'Nenhum hábito concluído ainda' : `${progress}% dos hábitos concluídos`)}</h4>
            {habitosToday.map((habito => {
                return(
                    <ListDay key={habito.id} onClick={() => concluir(habito.id, habito.done)} check={habito.done}>
                        <p className="Tarefa">{habito.name}</p>
                        <p className="Andamento">Sequência atual: <span>{habito.currentSequence} dias</span></p>
                        <p className="Andamento">Seu recorde: {habito.highestSequence} dias</p>
                        <div className="Check"><img src={check} alt="check"></img></div>
                    </ListDay>
                );
            }))}
        </Corpo>
        <Footer />
        </>
    );
}

const Corpo = styled.div`
    margin-top: 70px;
    width: 100%;
    height: max-content;
    *{
        margin-inline: auto;
        width: 340px;
        text-align: start;
    }
    h2{
        margin-top: 28px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
    h4{
        margin-bottom: 28px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: ${props => props.progress};
    }   
`;
const ListDay = styled.div`
    height: 94px;
    border-radius: 5px;
    padding: 15px;
    position: relative;
    background: #FFFFFF;
    margin-bottom: 10px;    
    p{width: 100%;}
    span{color: ${(props => props.check? '#8FC549': '#666666')};}
    .Tarefa{
        margin-bottom: 7px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
    }
    .Andamento{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        color: #666666;
    }
    .Check{
        width: 69px;
        height: 69px;
        border: 1px solid #E7E7E7;
        box-sizing: border-box;
        border-radius: 5px;
        position: absolute;
        top: 13px;
        right: 13px;
        background: ${(props => props.check? '#8FC549': '#EBEBEB')};
    }
    img {
        width: 35px;
        position: absolute;
        left: 18.5px;
        top: 20px;
    } 
`;