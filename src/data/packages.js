// Tour packages mock data
// Each package includes region, timing, price, vehicle suggestions and a list of spots.

export const tourPackages = [
  {
    id: "south-goa",
    title: "South Goa Sightseeing Places",
    timing: "Timing 10:00 am To 6:00 pm",
    price: 5500,
    currency: "Rs",
    vehicle: "SUV Ertiga New Model",
    carType: "Car",
    spots: [
      { icon: "church", label: "Panjim Church" },
      { icon: "umbrella-beach", label: "Miramar Beach" },
      { icon: "torii-gate", label: "Mungueshi Temple" },
      { icon: "ship", label: "Evening Boat Cruise" },
      { icon: "eye", label: "Dona Paula View Point" },
      { icon: "landmark", label: "Old Goa Churches" },
      { icon: "seedling", label: "Spice Plantation" },
    ],
  },
  {
    id: "north-goa",
    title: "North Goa Sightseeing Places",
    timing: "Timing 10:00 am To 6:00 pm",
    price: 3000,
    currency: "Rs",
    vehicle: "SUV Ertiga New Model",
    carType: "Car",
    spots: [
      { icon: "fish", label: "Dolphin Trip" },
      { icon: "mountain", label: "Sigverim Beach" },
      { icon: "umbrella-beach", label: "Calangute Beach" },
      { icon: "bolt", label: "Thunder Work" },
      { icon: "fort-awesome", label: "Fort Aguada" },
      { icon: "umbrella-beach", label: "Candolim Beach" },
      { icon: "snowflake", label: "Snow Park" },
      { icon: "umbrella-beach", label: "Baga Beach" },
    ],
  },
];
