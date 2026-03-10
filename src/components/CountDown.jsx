import { useEffect, useState } from "react";
import { STRINGS } from "../constants/Strings";

function CountDown() {

    const weddingDate = STRINGS.WEDDING_DATE.getTime();
    let [timeLeft, setTimeLeft] = useState(calculateTimeLeft(weddingDate));

    useEffect(() => {
        setInterval(() => {
            setTimeLeft(calculateTimeLeft(weddingDate));
        }, 1000);
    })
    return (
        <>
            {timeLeft > 0 ? countDownDiv(timeLeft) : weddingDateDiv()}
        </>
    );
}

function countDownDiv(timeRemaining) {

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    return <>
        <div id="countdown">
            <span id="days">{days || '--'}</span> days
            <span id="hours">{hours || '--'}</span> hrs
            <span id="minutes">{minutes || '--'}</span> min
            <span id="seconds">{seconds || '--'}</span> sec to go...
        </div>
    </>
}

function weddingDateDiv() {
    return <>
        The big day has arrived!
    </>
}

function calculateTimeLeft(weddingDate) {
    const now = new Date().getTime();
    const distance = weddingDate - now;
    return distance;
}
export default CountDown;