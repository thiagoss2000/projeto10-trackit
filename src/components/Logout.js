import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "./Context";

export default function Logout(){

    const { setUserLog } = useContext(AuthContext);

    if(window.confirm('Deseja sair?')){
        localStorage.removeItem('emailUser');
        localStorage.removeItem('senhaUser');
        setUserLog(false);
        return <Navigate replace to="/" />;
    }else{
        return <Navigate replace to="/" />;
    }
}