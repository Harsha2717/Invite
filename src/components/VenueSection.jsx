import { STRINGS } from "../constants/Strings";

function VenueSection() {
    return <>
        <section>
            <h2>{STRINGS.THE_VENUE}</h2>
            <p className="intro">
                {STRINGS.INVITE_TEXT}
            </p>
            <div style={{ margin: '2.5em 0' }}>
                <div style={{ fontSize: '1.8rem', color: 'var(--accent)', marginBottom: '0.9em' }}>
                    {STRINGS.WEDDING_HALL}
                </div>
                <p style={{ color: 'var(--text-light)', margin: '0.8em 0 1.5em' }}>
                    {STRINGS.WEDDING_LOCATION}
                    <br />
                    {STRINGS.WEDDING_DATE_STRING} | {STRINGS.WEDDING_TIME}
                </p>
            </div>
        </section >
    </>
}


export default VenueSection;