import React,  { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
    const [userLog, setUserLog] = useState(false);
    const [progress, setProgress] = useState(0);
    const [habitos, setHabitos] = useState([]);
    const [habitosToday, setHabitosToday] = useState([]);

    useEffect(() => {
    if(localStorage.getItem('user') !== null){
        setUserLog(true);
    };
    }, []);

    return (
        <AuthContext.Provider value={{userLog, setUserLog, progress, setProgress, habitos, setHabitos, habitosToday, setHabitosToday}}>
            {props.children}
        </AuthContext.Provider>
    )
}