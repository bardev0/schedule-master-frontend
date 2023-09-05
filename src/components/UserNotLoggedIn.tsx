import { useNavigate } from "react-router-dom";

export function UserNotLoggedIn() {
    const navigate = useNavigate();
    return (
        <>
            <h1>Not Logged In</h1>
            <button
                onClick={() => {
                    navigate("/login");
                }}
            >
                Log In
            </button>
        </>
    );
}
