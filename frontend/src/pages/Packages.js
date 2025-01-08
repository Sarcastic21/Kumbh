import pi from '../components/web_1.png'
import pj from '../components/web_2.png'
import PackageCard from "../components/PackageCard";
export function Packages() {
    const tour_package = [
      {
        id: "1",
        image :pi,
        title: "Mahakumbh 2025",
        duration: "3 days and 2 nights",
        contact_numbers: ["9316802278", "6351168010"],
        itinerary: {
          day_1: {
            morning: {
              pickup: "From Prayagraj Railway Station or Airport",
              welcome: "Traditional greeting with refreshments",
              check_in:
                "Accommodation in a comfortable hotel or camp near the Kumbh Mela grounds",
              breakfast: "Delicious Indian breakfast",
            },
            afternoon: [
              {
                activity: "Sangam Visit & Holy Bath",
                description:
                  "Boat ride to the Sangam for a holy dip at the confluence of Ganga, Yamuna, and Saraswati",
              },
              {
                activity: "Bade Hanuman Ji Mandir",
                description: "Visit the famous reclining Hanuman temple",
              },
              {
                activity: "Akshayavat Corridor",
                description: "Explore the sacred indestructible banyan tree",
              },
              {
                activity: "Patalpuri Mandir",
                description: "Visit the ancient underground temple",
              },
              {
                activity: "Saraswati Koop",
                description:
                  "Explore the legendary well believed to be the origin of the Saraswati River",
              },
            ],
            evening: [
              {
                activity: "Shiv Mandapam & Mandir",
                description: "Visit the serene temple dedicated to Lord Shiva",
              },
              {
                activity: "Ganga Aarti at Sangam",
                description: "Witness the mesmerizing evening Ganga Aarti ceremony",
              },
              {
                activity: "Parade Grounds Exploration",
                description:
                  "Enjoy cultural activities and local shopping opportunities",
              },
            ],
            night: {
              dinner: "Traditional vegetarian dinner with local delicacies",
              accommodation: "Return to accommodation in a luxurious tent",
            },
          },
          day_2: {
            morning: {
              holy_bath: "Another rejuvenating bath at the Sangam",
              breakfast: "Delicious Indian breakfast to start the day",
            },
            afternoon: [
              {
                activity: "Explore Various Akhadas",
                description:
                  "Discover the unique traditions and spiritual practices of the Akhadas. Interact with saints and observe meditation and rituals",
              },
              {
                activity: "Nag Vasuki Mandir",
                description: "Visit the ancient temple dedicated to the serpent king",
              },
              {
                activity: "Arail Ghat & Shivalaya Park",
                description:
                  "Relax amidst the serene natural beauty and scenic views of the Ganga",
              },
            ],
            evening: [
              {
                activity: "Hot Air Balloon Ride",
                description:
                  "Enjoy panoramic views of the Kumbh Mela from a hot air balloon (subject to weather conditions)",
              },
              {
                activity: "Laser Show at Kali Ghat",
                description:
                  "Experience an enchanting laser light show highlighting the spiritual and cultural heritage of the Kumbh",
              },
              {
                activity: "Complimentary Boat Ride",
                description:
                  "A serene evening boat ride along the Ganga to enjoy the peaceful ambiance",
              },
            ],
            night: {
              dinner: "Enjoy a delicious vegetarian dinner",
              accommodation: "Relax with an overnight stay at the camp or hotel",
            },
          },
          
          day_3: {
           early_morning: {
              holy_bath: "A final dip in the Sangam to complete your spiritual journey",
              breakfast: "Sumptuous Indian breakfast before departure",
            },
            morning_visits: [
              {
                activity: "Mankameshwar Mandir",
                description: "Visit the sacred temple believed to fulfill devotees' wishes",
              },
              {
                activity: "Boat Club",
                description: "Enjoy a peaceful boat ride along the serene Ganga",
              },
              {
                activity: "Anand Bhawan",
                description:
                  "Visit the iconic museum, the former residence of the Nehru family, to learn about India's rich history and freedom struggle",
              },
            ],
            midday: {
              activity: "Nishad Raj Park",
              description:
                "Explore this park, which celebrates the legacy of Nishad Raj, a key figure in Ramayana lore",
            },
            check_out_and_departure: {
              drop_off:
                "Drop-off at Prayagraj Railway Station or Airport with a complimentary souvenir from Kumbh Travels",
            },
          },
          
          // Add day_2 and day_3 itinerary details here...
        },
        _inclusions_: [
          {
            description:
              "Transportation services (pickup/drop-off and internal transfers)",
          },
          { description: "Comfortable lodging with modern amenities" },
          { description: "Meals (breakfast and dinner)" },
          {
            description:
              "Activities (holy baths, Sangam boat ride, guided tours, hot air balloon rides, laser show with complementary boat ride, Nishad raj park, Anand Bhawan and more..)",
          },
          { description: "Expert guidance throughout the trip" },
        ],
        _exclusions_: [{ description: "Lunch and personal expenses" }, { description: "Anything which is not mentioned in inclusion" }],
        _terms_conditions_: [
          {
            title: "Cancellation by Guests",
            policy:
              "100% refund for cancellations made at least 14 days before, 50% refund for 7-13 days before, no refund for less than 7 days.",
          },
          {
            title: "Cancellation by Agency",
            policy:
              "Reschedule or partial refund in case of unforeseen circumstances.",
          },
        ],
      },
      {
        id: "2",
        image :pj,
        title: "Mahakumbh 2025",
        duration: "2 days and 1 nights",
        contact_numbers: ["9316802278", "6351168010"],
        itinerary: {
          day_1: {
            morning: {
              pickup: "From Prayagraj Railway Station or Airport",
              welcome: "Traditional greeting with refreshments",
              check_in:
                "Accommodation in a comfortable hotel or camp near the Kumbh Mela grounds",
              breakfast: "Delicious Indian breakfast",
            },
            afternoon: [
              {
                activity: "Sangam Visit & Holy Bath",
                description:
                  "Boat ride to the Sangam for a holy dip at the confluence of Ganga, Yamuna, and Saraswati",
              },
              {
                activity: "Bade Hanuman Ji Mandir",
                description: "Visit the famous reclining Hanuman temple",
              },
              {
                activity: "Akshayavat Corridor",
                description: "Explore the sacred indestructible banyan tree",
              },
              {
                activity: "Patalpuri Mandir",
                description: "Visit the ancient underground temple",
              },
              {
                activity: "Saraswati Koop",
                description:
                  "Explore the legendary well believed to be the origin of the Saraswati River",
              },
            ],
            evening: [
              {
                activity: "Shiv Mandapam & Mandir",
                description: "Visit the serene temple dedicated to Lord Shiva",
              },
              {
                activity: "Ganga Aarti at Sangam",
                description: "Witness the mesmerizing evening Ganga Aarti ceremony",
              },
              {
                activity: "Parade Grounds Exploration",
                description:
                  "Enjoy cultural activities and local shopping opportunities",
              },
            ],
            night: {
              dinner: "Traditional vegetarian dinner with local delicacies",
              accommodation: "Return to accommodation in a luxurious tent",
            },
          },
         day_2: {
            early_morning: {
              holy_bath: "Another rejuvenating bath at the Sangam.",
              breakfast: "Delicious Indian breakfast to start the day."
            },
            morning_visits: [
              {
                activity: "Explore Various Akhadas",
                description: "Discover the unique traditions and spiritual practices of the Akhadas. Interact with saints and observe meditation and rituals."
              },
              {
                activity: "Nag Vasuki Mandir",
                description: "Explore the revered temple dedicated to the serpent king."
              },
              {
                activity: "Shivalaya Park & Hot Air Balloon Ride",
                description: "Relax in the serene Shivalaya Park. Enjoy a thrilling experience with panoramic views of the Kumbh Mela (subject to weather conditions and operational availability)."
              }
            ],
            midday: [], // No midday activities provided in your description.
            afternoon_adventure: [],
            evening_visits: [
              {
                activity: "Mankameshwar Mandir & Boat Club",
                description: "Visit the sacred Mankameshwar Mandir, known for fulfilling devotees' wishes. Enjoy a peaceful boat ride at the nearby boat club."
              }
            ],
            check_out_and_departure: {
              drop_off: "Guests will be dropped at Prayagraj Railway Station or Airport with warm memories and a complimentary souvenir."
            }
          },
          
        },
        _inclusions_: [
          {
            description:
              "Transportation services (pickup/drop-off and internal transfers)",
          },
          { description: "Comfortable lodging with modern amenities" },
          { description: "Meals (breakfast and dinner)" },
          {
            description:
              "Activities (holy baths, Sangam boat ride, guided tours, hot air balloon rides)",
          },
          { description: "Expert guidance throughout the trip" },
        ],
        _exclusions_: [{ description: "Lunch and personal expenses" }, { description: "Anything which is not mentioned in inclusion" }],
        _terms_conditions_: [
          {
            title: "Cancellation by Guests",
            policy:
              "100% refund for cancellations made at least 14 days before, 50% refund for 7-13 days before, no refund for less than 7 days.",
          },
          {
            title: "Cancellation by Agency",
            policy:
              "Reschedule or partial refund in case of unforeseen circumstances.",
          },
        ],
      },
    ];
    return (
        <div className="min-h-screen py-16 px-4">
            <br></br> <br></br><br></br>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {tour_package.map(pkg => (
              <PackageCard key={pkg.id} pkg={pkg} className="h-64" />
            ))}
          </div>
        </div>
      );
      
      
}