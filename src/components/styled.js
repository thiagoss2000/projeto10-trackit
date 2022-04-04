import styled from "styled-components";

export const Block = styled.div`
    z-index: 1;
    background-color: #E5E5E5;
    opacity: 0.8;
    width: 375px;
    height: ${((props) => props.block? '100%' : '0')};
    position: absolute;
`;

export const LogoImg = styled.img `
    width: 180px;
    height: 178.38px;
    margin-inline: auto;
    margin-bottom: 32.5px;
    margin-top: 68px;
`;
export const FormLogin = styled.form `
    input {
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
        margin-bottom: 6px;
    }
    button {
        width: 303px;
        height: 45px;
        background: #52B6FF;
        border-radius: 4.63636px;
        border: none;
        margin-bottom: 25px;
    }
`;
export const LinkText = styled.p `
    width: 100%;
    height: 17px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
    text-align: center;
`;
export const HeaderHabitos = styled.header`
    z-index: 2;
    width: 375px;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 18px;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    .ImgUser{
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
    }
`;

export const CorpoHabitos = styled.header`
    margin-top: 70px;
    margin-bottom: 20px;
    height: max-content;
    div{
        margin-inline: auto;
        margin-top: 22px;
        width: 340px;
        height: 35px;    
        display: flex;
        justify-content: space-between;
        align-items: center;
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
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 26.976px;
        line-height: 34px;
        text-align: center;
        color: #FFFFFF;
    }
`;

export const AdicionarHAbito = styled.form`
    box-sizing: border-box;
    padding: 18px;
    width: 340px;
    height: 180px;
    margin-inline: auto;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background: #FFFFFF;
    border-radius: 5px;
    input{
        padding: 11px;
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
    }
    div{
        margin-top: 8px;
        width: 303px;
        height: 30px;
        display: flex;
        justify-content: flex-start;
        padding: 0;
    }
    div button{
        width: 30px;
        height: 30px;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
        margin-right: 4px;
        position: unset;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
    }
    button{
        width: 84px;
        height: 35px;
        border-radius: 4.63636px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
        text-align: center;
        position: absolute;
        bottom: 15px;
    }
    .cancelar{
        right: 116px;
        background: #FFFFFF;
        color: #52B6FF;
    }
    .salvar{
        right: 16px;
        background: #52B6FF;
        color: #FFFFFF;
    }
`;
export const DaysButton = styled.button`
    background-color: ${(props) => props.selecionado? '#DBDBDB' : '#FFFFFF'} !important;
    color: ${(props) => props.selecionado? '#FFFFFF' : '#DBDBDB'} !important;
`;

export const FooterHabitos = styled.footer`
    z-index: 2;
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
        background: #FFFFFF;
    }
    button {
        width: 142px;
        height: 70px;
        border: none;
        cursor: pointer;
        background: #FFFFFF;
    }
    p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;
    }
`;

export const Habito = styled.div`
    height: max-content;
    padding-bottom: 105px;
    div{
        box-sizing: border-box;
        width: 340px;
        margin-inline: auto;
        padding-inline: 15px;
        padding-block: 7px;
        margin-top: 0;
        height: 91px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
        position: relative;
    }
    div p{
        margin-top: 0;
        margin-left: 0px;
        width: 183px;
        height: 25px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        text-align: start;
    }
    div img{
        position: absolute;
        top: 11px;
        right: 10px;
        cursor: pointer;
    }
    div section{
        margin-top: 0px;
        width: 303px;
        height: 30px;
        display: flex;
        padding: 0;
    }
    section button{
        width: 30px;
        height: 30px;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
        margin-right: 4px;
        position: unset;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
    }
    p{  
        margin-top: 29px;
        margin-inline: auto;
        width: 338px;
        height: 74px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: start;
        color: #666666;
    }
`;

export const Corpo = styled.div`
    margin-top: 70px;
    padding-bottom: 105px;
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
export const ListDay = styled.div`
    cursor: pointer;
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