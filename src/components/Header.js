import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "./Context";
import { HeaderHabitos } from "./../components/styled";
import Logout from "./Logout";
import trackIt from "./../assets/TrackIt.svg";

export default function Header(){
     
    const { dadosUser } = useContext(AuthContext);
    const [logout, setLogout] = useState(false);

    return(
        <HeaderHabitos>
            <Link to={"/"} style={{ textDecoration: 'none' }}>
                <img src={trackIt} alt="trackIt"></img>
            </Link>
            <img className="ImgUser" onClick={() => setLogout(true)} src={dadosUser.image} alt="User"></img>
            {logout? <Logout /> : ''}
        </HeaderHabitos>
    );
}