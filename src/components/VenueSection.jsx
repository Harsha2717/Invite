import { STRINGS } from "../constants/Strings";

function VenueSection() {
    return <>
        <section>
            <p className="intro">
                {STRINGS.INVITE_TEXT}
            </p>
            <h2>{STRINGS.THE_VENUE}</h2>
            <div style={{ margin: '2.5em 0' }}>
                <div style={{ fontSize: '2.8rem', color: 'var(--accent)'}}>
                    {STRINGS.WEDDING_HALL}
                </div>
                <p style={{ color: 'var(--text-light)', fontSize: '1.3rem'}}>
                    {/* {STRINGS.WEDDING_LOCATION} */}
                    <br />
                    {STRINGS.WEDDING_DATE_STRING} | {STRINGS.WEDDING_TIME}
                </p>
            </div>
        </section >
    </>
}


export default VenueSection;