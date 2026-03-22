import { useState } from "react";
import { STRINGS } from "../constants/Strings";
import DisplayMap from "./GoogleMap";

const wedding = "Wedding Ceremony";
const haldi = "Haldi Ceremony";
const mehendi = "Mehendi Celebration";

const events = [
  { title: haldi, date: STRINGS.HALDI_DATE_STRING, time: STRINGS.HALDI_TIME_STRING, venue: STRINGS.HALDI_LOCATION, icon: "🌸", lat: 17.542881, lng: 78.481445, zoom: 16 },
  { title: mehendi, date: STRINGS.MEHENDI_DATE_STRING, time: STRINGS.MEHENDI_TIME_STRING, venue: STRINGS.MEHENDI_LOCATION, icon: "🍃", lat: 17.542881, lng: 78.481445, zoom: 16 },
  { title: wedding, date: STRINGS.WEDDING_DATE_STRING, time: STRINGS.WEDDING_TIME, venue: `${STRINGS.WEDDING_HALL}, ${STRINGS.WEDDING_LOCATION}`, icon: "💍", lat: STRINGS.WEDDING_HALL_LAT, lng: STRINGS.WEDDING_HALL_LNG, zoom: 17 },
];

function WeddingEvents() {

  // ✅ default to first event (or null if you prefer)
  const [selectedEvent, setSelectedEvent] = useState(null);

  const getEventCard = (event, index) => {
    return (
      <div
        className="event-card"
        key={index}
        onClick={() => setSelectedEvent(event)} // ✅ important
      >
        <div className="event-icon">{event.icon}</div>
        <div className="event-title">{event.title}</div>
        <div className="event-detail">
          {event.date}<br />
          {event.time}<br />
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
          {events.map((event, index) => getEventCard(event, index))}
        </div>
      </section>

      {/* ✅ pass correct props */}
      {console.log("Selected Event:", selectedEvent)}
      {selectedEvent && (
        <DisplayMap
          mapData={selectedEvent}
          onClose={() => {
            setSelectedEvent(null);
            console.log("Map closed, selectedEvent set to null");
          }} // ✅ important
        />
      )}
    </>
  );
}

export default WeddingEvents;