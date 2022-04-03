import { Link } from "react-router-dom";
import { HeaderHabitos } from "./../components/styled";
import trackIt from "./../assets/TrackIt.svg";

export default function Header(){

    return(
        <HeaderHabitos>
            <Link to={"/"} style={{ textDecoration: 'none' }}>
                <img src={trackIt} alt="trackIt"></img>
            </Link>
            <img src={localStorage.getItem('image')} alt="User"></img>
        </HeaderHabitos>
    );
}