import { useState } from "react";
import { STRINGS } from "../constants/Strings";
import DisplayMap from "./GoogleMap";

const wedding = "Wedding Ceremony";
const haldi = "Haldi Ceremony";
const mehendi = "Mehendi Celebration";
const reception = "Reception";

const events = [
  { title: haldi, date: "12 December 2026", time: "10:00 AM", venue: "Venue Name, Hyderabad", icon: "🌸", lat: 17.542881, lng: 78.481445, zoom: 16 },
  { title: mehendi, date: "12 December 2026", time: "5:00 PM", venue: "Venue Name, Hyderabad", icon: "🍃", lat: 17.542881, lng: 78.481445, zoom: 16 },
  { title: wedding, date: "13 December 2026", time: "11:00 AM", venue: "The Grand Imperial, Jubilee Hills, Hyderabad", icon: "💍", lat: 17.4326, lng: 78.4071, zoom: 17 },
  { title: reception, date: "13 December 2026", time: "7:00 PM", venue: "Venue Name, Hyderabad", icon: "✨", lat: 17.542881, lng: 78.481445, zoom: 16 }
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