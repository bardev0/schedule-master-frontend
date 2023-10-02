import { Link } from "react-router-dom";
import { Title } from "./Title";
export function PageRegisterSuccesful() {
    return (
        <>
            <div className="MainHeader"></div>
            <Title></Title>
            <div className="underTitleContiner">
                <h2>RegisterSuccesfull!</h2>
                <Link className="headerBtn" to="/shiftArtist/login">
                    Log In
                </Link>
            </div>
        </>
    );
}
