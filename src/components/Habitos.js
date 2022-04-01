import trackIt from "./../assets/TrackIt.svg";
import fotoUser from "./../assets/Rectangle 14.svg";
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components";

export default function Habitos() {

    const percentage = 66;

    return(
        <>
        <HeaderHabitos  style={{
            background: 'blue',
            width: '100%',
            heigth: '100px'
        }}>
            <img src={trackIt} alt="trackIt"></img>
            <img src={fotoUser} alt="User"></img>
        </HeaderHabitos>

        <CorpoHabitos>
            <div>
                <label>Meus Habitos</label>
                <button className="AdicionarHabito"></button>
            </div>
            <p>
                Você não tem nenhum hábito cadastrado ainda. 
                Adicione um hábito para começar a trackear!
            </p>
        </CorpoHabitos>

        <FooterHabitos>
            <div>
                <CircularProgressbar
                    value={percentage}
                    text={'Hoje'}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                    backgroundColor: "#52B6FF",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent"
                    })}
                />
            </div>    
            <button>Hábitos</button>
            <button>Histórico</button>
        </FooterHabitos>
        </>
    );
}
const HeaderHabitos = styled.header`
    width: 375px;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 18px;
    box-sizing: border-box;
`;

const CorpoHabitos = styled.header`
    div{
        background-color: yellow;
        width: 100%;
        height: 40px;    
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-inline: 18px;
        box-sizing: border-box;
    }
    label{
        width: max-content;
        height: 29px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
    button{
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 4.63636px;
        border: none;
        cursor: pointer;
    }
`;

const FooterHabitos = styled.footer`
    width: 375px;
    height: 70px;
    position: fixed;
    bottom: 0;    
    display: flex;
    justify-content: space-between;
    div {
        width: 91px;
        height: 91px;
        left: 142px;
        top: 566px;
        position: absolute;
        top: -31px;
        cursor: pointer;
    }
    button {
        width: 142px;
        height: 70px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;
        border: none;
        cursor: pointer;
    }
`;