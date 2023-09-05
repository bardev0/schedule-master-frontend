import { useNavigate } from "react-router-dom";

export function PageRegisterSuccesful() {
    const navigate = useNavigate();

    return (
        <>
            <div>
                <h2>RegisterSuccesfull!</h2>
                <button
                    onClick={() => {
                        navigate("/login");
                    }}
                >
                    Log in
                </button>
            </div>
        </>
    );
}
