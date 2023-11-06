const lorem = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`;
const Amenities = [
  {
    location: "school",
    operationalHours: "24 Hours",
    openingHour: "00:00",
    closingHour: "23:59",
    distance: "1 mile",
    address: "123 this place now",
    type: ["Shelter", "Learn"],
    availability: "20",
    image: "../assets/images/location1.jpg",
    description: [lorem, lorem, lorem, lorem, lorem],
    key: "1",
  },
  {
    location: "fitness",
    operationalHours: "10:00 am - 6:00 pm",
    openingHour: "10:00 am",
    closingHour: "6: 00 pm",
    distance: "800 feet",
    address: "123 your place",
    type: ["Health", "Hygiene"],
    availability: "2",
    image: "../assets/images/location2.jpg",
    description: [lorem, lorem],
    key: "2",
  },
  {
    location: "plaza",
    operationalHours: "12:00 pm - 9:00 pm",
    openingHour: "12:00 pm",
    closingHour: "9:00 pm",
    distance: "3 miles",
    address: "123 my house",
    type: ["Shop", "Family"],
    availability: "0",
    image: "../assets/images/location3.jpg",
    description: [lorem],
    key: "3",
  },
  {
    location: "haircuts",
    operationalHours: "7:00 am - 4:00 am",
    openingHour: "7:00 am",
    closingHour: "4:00 am",
    distance: "6 mile",
    address: `'123 I don't know'`,
    type: ["Work", "Hygiene"],
    availability: "7",
    image: "../assets/images/location4.jpg",
    description: [lorem, lorem, lorem],
    key: "4",
  },
  {
    location: "restaurant",
    operationalHours: "9:00 am - 5:00 pm",
    openingHour: "9:00 am",
    closingHour: "5:00 pm",
    distance: "0.8 mile",
    address: `'123 I don't know'`,
    type: ["Food", "Finance"],
    availability: "0",
    image: "../assets/images/location5.jpg",
    description: [lorem, lorem],
    key: "5",
  },
  {
    location: "sleeping",
    operationalHours: "11:00 am - 8:00 pm",
    openingHour: "11:00 am",
    closingHour: "8:00 pm",
    distance: "232 feet",
    address: `'123 I don't know'`,
    type: ["Shelter", "Health", "Family"],
    availability: "15",
    image: "../assets/images/location6.jpg",
    description: [lorem, lorem, lorem, lorem],
    key: "6",
  },
  {
    location: "nail salon",
    operationalHours: "1:00 pm -  7:00 pm",
    openingHour: "1:00 pm",
    closingHour: "7:00 pm",
    distance: "0.9 mile",
    address: `'123 I don't know'`,
    type: ["Health", "Beauty"],
    availability: "4",
    image: "../assets/images/location7.jpg",
    description: [lorem],
    key: "7",
  },
  {
    location: "night school",
    operationalHours: "10:00 pm - 3:00 am",
    openingHour: "10:00 pm",
    closingHour: "3:00 am",
    distance: "2 mile",
    address: `'123 I don't know'`,
    type: ["Education", "Learning"],
    availability: "0",
    image: "../assets/images/location8.jpg",
    description: [lorem, lorem],
    key: "8",
  },
];

export default Amenities;
