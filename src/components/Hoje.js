import { useContext, useEffect } from "react";
import { AuthContext } from "./Context";
import axios from "axios";
import Footer from "./Footer";
import Header from "./Header";
import { Corpo, ListDay } from "./styled";
import check from "./../assets/Vector2.svg"

export default function Hoje(){

    const { habitosToday, progress, setProgress, setHabitosToday,  setLoad, load, setBlock, dadosUser } = useContext(AuthContext);
    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today';
    const config = {
        headers: {
            "Authorization": `Bearer ${dadosUser.token}`
        }
    };
    useEffect(() => {
        axios.get(URL, config)
        .then((response) => {
            setHabitosToday(response.data);
        })
        .catch((err) => console.log(err));
    }, [load]);
    function concluir(id, done){
        const URLMark=`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`
        const URLUnMark=`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`
        if(done){
            setBlock(true);
            axios.post(URLUnMark, null, config)
            .then((response) => {
                setLoad(!load);
                setBlock(false);
            })
            .catch((err) => console.log(err));
        }else{
            setBlock(true);
            axios.post(URLMark, null, config)
            .then((response) => {
                setLoad(!load);
                setBlock(false);
            })
            .catch((err) => console.log(err));
        }
    }
    const diasSemana = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];
    const dayjs = require('dayjs');
    const date = dayjs();   
    let progresso = 0;
    habitosToday.map((habito) => {
        if(habito.done){
            progresso++;
        }
    });
    if(habitosToday.length === 0){
        setProgress(-1);
    }else if(progresso > 0){
        setProgress((100 / habitosToday.length) * progresso);
    }else{
        setProgress(0);
    }
    return(
        <>
        <Header />
        <Corpo progress={(progress <= 0? '#BABABA' : '#8FC549')}>
        <h2>{`${diasSemana[date.$W]}, ${("00" + (date.$D)).slice(-2)}/${("00" + (date.$M +1)).slice(-2)}`}</h2>
        <h4>{(progress === 0? 'Nenhum hábito concluído ainda' : (progress === -1? 'Não há hábitos para hoje' : `${Math.round(progress)}% dos hábitos concluídos`))}</h4>
            {habitosToday.map((habito => {
                let recorde;
                (habito.currentSequence >= habito.highestSequence && habito.highestSequence !== 0? recorde = true : recorde = false);
                return(
                    <ListDay key={habito.id} onClick={() => concluir(habito.id, habito.done)} check={habito.done} recorde={recorde}>
                        <p className="Tarefa">{habito.name}</p>
                        <p className="Andamento">Sequência atual: <span className="CheckNum">{habito.currentSequence} dias</span></p>
                        <p className="Andamento">Seu recorde: <span className="RecordeNum">{habito.highestSequence} dias</span></p>
                        <div className="Check"><img src={check} alt="check"></img></div>
                    </ListDay>
                );
            }))}
        </Corpo>
        <Footer />
        </>
    );
}

