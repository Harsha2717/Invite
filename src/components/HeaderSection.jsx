import { BRIDE, GROOM, STRINGS } from "../constants/Strings";
import CountDown from "./CountDown";
import VenueSection from "./VenueSection";

function HeaderSection() {
    return (
        <>
            <header>
                {/* Save the Date Section */}
                <div className="save-date">SAVE THE DATE</div>

                {/* Bride and Groom Names */}
                {/* <h1 className="names">{BRIDE} <span className="heart">♥</span> {GROOM}</h1> */}

                <h1 className="names">
                    <span className="bride">{BRIDE}</span>
                    <span className="heart">♥</span>
                    <span className="groom">{GROOM}</span>
                </h1>

                {/* Marriage Date */}
                <div className="main-date">{STRINGS.WEDDING_DATE_STRING}</div>

                {/* Count Down */}
                <CountDown />
            </header>
        </>
    );
}
export default HeaderSection;