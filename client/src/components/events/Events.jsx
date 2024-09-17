import React from 'react';
import './Events.css'; // Ensure the CSS file is correctly linked
import imgSrc from '../../assets/event-temp-img.jpg';

const eventsData = [
  {
    name: "Tech Symposium 2024 In Instrumentation",
    date: "October 15, 2024",
    description: "A symposium to showcase latest advancements in electronics and instrumentation.",
    image: imgSrc // Replace with actual image paths
  },
  {
    name: "Workshop on AI in Instrumentation",
    date: "November 20, 2024",
    description: "Hands-on workshop on applications of AI in Instrumentation.",
    image: imgSrc
  },
  {
    name: "Workshop on AI in Instrumentation",
    date: "November 20, 2024",
    description: "Hands-on workshop on applications of AI in Instrumentation.",
    image: imgSrc
  },
  {
    name: "Workshop on AI in Instrumentation",
    date: "November 20, 2024",
    description: "Hands-on workshop on applications of AI in Instrumentation.",
    image: imgSrc
  }
];

const Events = () => {
  return (
    <div className="events-section w-full min-h-screen">
      <h1 className="events-title">Our Upcoming Events</h1>
      <div className="events-cards">
        {eventsData.map((event, index) => (
          <div key={index} className="event-card">
            <img src={event.image} alt={event.name} className="event-image" />
            <div className="event-info">
              <h2 className="event-name">{event.name}</h2>
              <p className="event-date">{event.date}</p>
              <p className="event-description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
