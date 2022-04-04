import { useEffect, useContext, useState } from "react";
import axios from "axios";
// import DatePicker from 'sassy-datepicker';
import { AuthContext } from "./Context";
import Header from "./Header";
import Footer from "./Footer";
import { History, DayHistory } from "./styled";

export default function Historico() {

    const { dadosUser, setBlock } = useContext(AuthContext);
    const [history, setHistory] = useState([])

    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily';
    const config = {
        headers: {
            "Authorization": `Bearer ${dadosUser.token}`
        }
    };

    useEffect(() => {
        setBlock(true);
        axios.get(URL, config)
        .then((response) => {
            setHistory(response.data);
            setBlock(false);
        })
        .catch((err) => console.log(err));
    }, []);

    return(
        <>
        <Header />
        <History >
            <h2>Histórico</h2>
            {(history.length === 0? <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p> : 
            // <DatePicker />          
            <div className="History">
                {history.map((days) => {
                    return (
                        <div key={days.day}>
                            <h3>{days.day}</h3>
                            {days.habits.map((habit) => {
                                return(
                                    <DayHistory estado={habit.done} key={habit.id}>
                                    <p>Hábito: {habit.name} :
                                    <span>  {(habit.done? 'Concluído' : 'Não concluído')}</span></p>
                                    </DayHistory>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
            )}
        </History>
        <Footer />
        </>
    );
}
