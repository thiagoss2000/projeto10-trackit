import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
export default function Historico() {

    return(
        <>
        <Header />
        <History >
            <h2>Histórico</h2>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </History>
        <Footer />
        </>
    );
}

const History = styled.div`
    width: 100%;
    height: max-content;
    margin-top: 70px;
    padding-inline: 15px;
    h2{
        background-color: yellow;
        text-align: start;
        margin-left: 2px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
    p{
        background-color: yellow;
        text-align: start;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }
`;