import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./Context";
import { HeaderHabitos } from "./../components/styled";
import Logout from "./Logout";
import trackIt from "./../assets/TrackIt.svg";

export default function Header(){
     
    const { dadosUser } = useContext(AuthContext);

    return(
        <HeaderHabitos>
            <Link to={"/"} style={{ textDecoration: 'none' }}>
                <img src={trackIt} alt="trackIt"></img>
            </Link>
            <img className="ImgUser" onClick={() => Logout()} src={dadosUser.image} alt="User"></img>
        </HeaderHabitos>
    );
}