import React, { useContext } from "react";
import { AuthContext } from "./Context";
import AddHabito from "./AddHabito";
import RenderHabito from "./RenderHabito";
import Footer from "./Footer";
import Header from "./Header";
import { CorpoHabitos } from "./../components/styled";


export default function Habitos() {

    const {userLog} = useContext(AuthContext);

    if(userLog){
        return(
            <>
            <Header />

            <CorpoHabitos>
                <AddHabito />
            </CorpoHabitos>
            <RenderHabito />
            
            <Footer />
            </>
        );
    }else{
        return '';
    }
}
