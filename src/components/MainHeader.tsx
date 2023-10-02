import { Link } from "react-router-dom";
export function MainHeader() {
    return (
        <>
            <div className="MainHeader">
                <Link className="headerBtn" to="/shiftArtist/login">
                    <p>Login</p>
                </Link>
                <Link className="headerBtn" to="/shiftArtist/register">
                    <p>Register</p>
                </Link>
            </div>
        </>
    );
}
