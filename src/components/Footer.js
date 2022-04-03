import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "./Context";
import {
    CircularProgressbar,
    buildStyles
  } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { FooterHabitos } from "./styled";

export default function Footer(){

    const {progress} = useContext(AuthContext);

    return(
        <FooterHabitos>
            <div>
                <Link to='/hoje'>
                <CircularProgressbar
                    value={progress}
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
                </Link>
            </div>    
            <button
                ><Link to='/habitos' style={{ textDecoration: 'none' }}>
                    <p>Hábitos</p>
                </Link>
            </button>
            <button>
                <Link to='/habitos' style={{ textDecoration: 'none' }}>
                    <p>Histórico</p>
                </Link>
            </button>
        </FooterHabitos>
    );
}