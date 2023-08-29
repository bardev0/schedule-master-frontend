export function Register() {
    return (
        <>
            <div>
                <h1>GRAFIKOS</h1>
                <div>
                    {/** musi byc bardziej zaawansowne -> email i opcja zakupu z code reedem */}
                    <label>username</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>password</label>
                    <input type="text"></input>
                </div>
                <button>Register</button>
                <p>Error Msg</p>
            </div>
        </>
    );
}
