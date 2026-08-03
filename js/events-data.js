/* CHRD Training Academy - Central Events Data Store (Single Source of Truth) */

window.eventsData = [
  {
    id: "public-speaking-2026",
    title: "Public Speaking & Stage Presence Workshop",
    name: "Public Speaking & Stage Presence Workshop",
    category: "Workshop",
    status: "Registration Open",
    badge: "Registration Open",
    registrationOpen: true,
    registration: true,
    date: "2026-08-28",
    displayDate: "28 August 2026",
    time: "9:00 AM – 5:00 PM",
    venue: "CHRD Training Academy, Vengara, Malappuram",
    regClosingDate: "25 August 2026",
    duration: "1 Day Practical Workshop",
    language: "Malayalam & English",
    totalFee: 999,
    fee: "₹999",
    registrationFee: 299,
    advanceFee: "₹299",
    balanceFee: "₹700 (Pay at Venue)",
    totalSeats: 25,
    availableSeats: 18,
    seats: "18 Seats Available",
    organizer: "CHRD Training Academy Kerala",
    trainer: "CHRD Expert Faculty",
    poster: "assets/blog-featured.jpg",
    image: "assets/blog-featured.jpg",
    banner: "assets/blog-featured.jpg",
    description: "Enhance your communication, confidence, presentation, and stage performance through practical activities, live speaking sessions, group discussions, and expert guidance.",
    shortDesc: "Enhance your communication, confidence, presentation, and stage performance through practical activities, live speaking sessions, group discussions, and expert guidance.",
    fullDesc: "An intensive 1-day practical workshop designed to build public speaking confidence, voice modulation, body language control, and stage presentation skills through practical activities, live speaking sessions, group discussions, and expert guidance.",
    benefits: [
      "Practical Live Stage Practice",
      "Official Participation Certificate",
      "Workshop Kit & Training Materials",
      "Interactive Group Activities",
      "Expert Guidance & Personalized Feedback"
    ]
  }
];

window.events = window.eventsData;

window.getEventsData = function() {
  return (window.eventsData && Array.isArray(window.eventsData)) ? window.eventsData : [];
};

window.getUpcomingEvents = function() {
  const list = window.getEventsData();
  return list.filter(e => e.registrationOpen === true || e.registration === true || e.status === "Registration Open" || e.status === "Upcoming");
};

window.getEventById = function(eventId) {
  if (!eventId) return null;
  const list = window.getEventsData();
  const target = String(eventId).toLowerCase().trim();
  return list.find(e => String(e.id).toLowerCase().trim() === target) || null;
};
