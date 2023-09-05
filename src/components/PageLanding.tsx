import { Link } from "react-router-dom";

export function PageLanding() {
    return (
        <>
            <div>
                <div>
                    <Link to="/login">
                        <p>Login</p>
                    </Link>
                    <Link to="/register">
                        <p>Register</p>
                    </Link>
                </div>
                <h1>ShiftArtist</h1>
            </div>
        </>
    );
}
