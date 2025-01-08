import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

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


export function EventsPage() {
  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Sacred Events Calendar</h1>

        <div className="max-w-4xl mx-auto space-y-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 rounded-lg p-3 text-orange-600">
                  <Calendar className="w-6 h-6" />
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                      <p className="text-orange-600 font-medium">{event.date}</p>
                    </div>
                    <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">
                      Major
                    </span>
                  </div>

                  <p className="text-gray-600 mt-2">{event.description}</p>

                  <div className="flex items-center mt-4 text-gray-500">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">Sangam, Prayagraj</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}