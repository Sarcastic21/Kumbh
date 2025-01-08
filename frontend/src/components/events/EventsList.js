import React from 'react';
import  EventCard  from './EventCard';

const events = [
  {
    title: 'Paush Purnima',
    date: 'January 13, 2025',
    description: 'Full moon day bath considered highly beneficial for spiritual cleansing.'
  },
  {
    title: 'Makar Sankranti - First Shahi Snan',
    date: 'January 14, 2025',
    description: 'The first and most auspicious royal bath marking the beginning of Mahakumbh.',
    isHighlight: true
  },
  {
    title: 'Mauni Amavasya - Main Shahi Snan',
    date: 'January 29, 2025',
    description: 'The most important royal bath during Mahakumbh, attracting millions of devotees.'
  },
  {
    title: 'Basant Panchami',
    date: 'February 3, 2025',
    description: 'Celebration of spring and knowledge, marked by special ceremonies.'
  },
  {
    title: 'Maghi Purnima',
    date: 'February 12, 2025',
    description: 'A sacred day for taking holy baths and performing charity, marking the culmination of Magha month.'
  },
  {
    title: 'Maha Shivratri',
    date: 'February 26, 2025',
    description: 'A significant Hindu festival dedicated to Lord Shiva, observed with fasting and night-long prayers.'
  }  
];

function EventsList() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Sacred Events Calendar</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {events.map((event) => (
            <EventCard key={event.title} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventsList;
