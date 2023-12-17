const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "LOTR 1",
    description:
      "The legendary first film of The Lord of the Rings series, 'The Fellowship of the Ring,' returns to the big screen, immersing audiences in its enchanting world and epic adventures once again. This timeless masterpiece, filled with the magic of Middle-earth, offers audiences a unique cinematic experience with its unforgettable characters and breathtaking landscapes.",
    location: "Hobbit Street, Shire",
    date: "2021-10-11",
    image: "images/lotr_1.jpeg",
    isFeatured: false,
  },
  {
    id: "e2",
    title: "LOTR 2",
    description:
      "The second installment of the epic Middle-earth saga, 'The Lord of the Rings: The Two Towers,' reintroduces audiences to thrilling battle sequences and the epic journey of unforgettable heroes, presenting an enthralling continuation of the enchanting story.",
    location: "Saruman Street, Isengard",
    date: "2022-10-12",
    image: "images/lotr_3.jpeg",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "LOTR 3",
    description:
      "The magnificent finale of the legendary 'The Lord of the Rings' series, 'The Return of the King,' delivers an unforgettable experience, reaching the climax of war with captivating visuals and emotional depth, inviting audiences to witness the conclusion of an epic saga.",
    location: "Sauron Street, The Mount Doom",
    date: "2023-10-13",
    image: "images/lotr_2.jpeg",
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
