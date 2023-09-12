import "../styles/LandingPage.css";
import { MainHeader } from "./MainHeader";
import { Title } from "./Title";
export function PageLanding() {
    return (
        <>
            <div className="LandingPage">
                <MainHeader></MainHeader>
                <Title></Title>
            </div>
        </>
    );
}
