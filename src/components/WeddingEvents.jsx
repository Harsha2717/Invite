import { useState } from "react";
import { STRINGS } from "../constants/Strings";
import DisplayMap from "./GoogleMap";

const wedding = "Wedding Ceremony";
const haldi = "Haldi Ceremony";
const mehendi = "Mehendi Celebration";

const events = [
  {
    title: haldi,
    date: STRINGS.HALDI_DATE_STRING,
    time: STRINGS.HALDI_TIME_STRING,
    venue: STRINGS.HALDI_LOCATION,
    icon: "🌸", 
    lat: 17.529036,
    lng: 78.478538,
    zoom: 16,
    video: "/Haldi.mp4",
  },
  {
    title: mehendi,
    date: STRINGS.MEHENDI_DATE_STRING,
    time: STRINGS.MEHENDI_TIME_STRING,
    venue: STRINGS.MEHENDI_LOCATION,
    icon: "🍃",
    lat: 17.529036,
    lng: 78.478538,
    zoom: 16,
    video: "/Mehendi.mp4",
  },
  {
    title: wedding,
    date: STRINGS.WEDDING_DATE_STRING,
    time: STRINGS.WEDDING_TIME,
    venue: STRINGS.WEDDING_HALL,
    icon: "💍",
    lat: STRINGS.WEDDING_HALL_LAT,
    lng: STRINGS.WEDDING_HALL_LNG,
    zoom: 17,
    video: "/Wedding.mp4",
  },
];

function WeddingEvents() {
  const path = window.location.pathname;

  // ✅ LOGIC FIXED HERE
  const isSpecial = path === "/special";

  // ✅ when /special → show all events
  // ✅ otherwise → only wedding event
  const displayEvents = isSpecial ? events : [events[2]];

  const [selectedEvent, setSelectedEvent] = useState(null);

  const getEventCard = (event, index) => {
    return (
      <div
        className="event-card"
        key={index}
        onClick={() => setSelectedEvent(event)}
      >
        {event?.video ? (
          <div className="event-icon">
            <video
              src={event.video}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
          </div>
        ) : (
          <div className="event-icon">{event.icon}</div>
        )}

        <div className="event-title">{event.title}</div>

        <div className="event-detail">
          {event.date}
          <br />
          {event.time}
          <br />
          {event.venue}
        </div>
      </div>
    );
  };

  return (
    <>
      <section className="section-events">
        <h2>{STRINGS.WEDDING_EVENTS}</h2>

        <div className="events-grid">
          {displayEvents.map((event, index) =>
            getEventCard(event, index)
          )}
        </div>
      </section>

      {selectedEvent && (
        <DisplayMap
          mapData={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </>
  );
}

export default WeddingEvents;