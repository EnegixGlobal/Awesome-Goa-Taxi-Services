// Vehicle mock data synced with local images under /images/Cars
// Categories supported: town, suv, sedan (used by filter tabs in ChooseTaxiSection)
// Note: All images are locally provided assets. Alt text kept descriptive.

import dzireImg from "../../images/Cars/New-Maruti-Suzuki-Dzire.webp";
import ertigaImg from "../../images/Cars/Final-Ertiga-2022-2.webp";
import innovaImg from "../../images/Cars/innova-hycross-exterior-right-front-three-quarter-73.avif";
import crystaImg from "../../images/Cars/Toyota-Innova-Crysta-2020.webp";
import wingerImg from "../../images/Cars/Winger.jpg";
import tempoTravellerImg from "../../images/Cars/Tempo Traveller.webp";
import busImg from "../../images/Cars/Bus.jpg";

export const VEHICLE_CATEGORIES = [
  { key: "all", label: "All Taxi" },
  { key: "town", label: "Town Taxi" },
  { key: "suv", label: "SUV Taxi" },
  { key: "sedan", label: "Sedan Taxi" },
];

export const vehicles = [
  {
    id: "swift-dzire",
    name: "Swift Dzire",
    model: 2023,
    category: "sedan",
    image: dzireImg,
    capacity: 4,
    luggage: 2,
    ac: true,
    transmission: "Manual",
  },
  {
    id: "ertiga",
    name: "Ertiga",
    model: 2024,
    category: "suv",
    image: ertigaImg,
    capacity: 6,
    luggage: 3,
    ac: true,
    transmission: "Manual",
  },
  {
    id: "innova",
    name: "Innova",
    model: 2024,
    category: "suv",
    image: innovaImg,
    capacity: 7,
    luggage: 4,
    ac: true,
    transmission: "Automatic",
  },
  {
    id: "innova-crysta",
    name: "Innova Crysta",
    model: 2024,
    category: "suv",
    image: crystaImg,
    capacity: 7,
    luggage: 4,
    ac: true,
    transmission: "Automatic",
  },
  {
    id: "winger",
    name: "Winger",
    model: 2024,
    category: "town",
    image: wingerImg,
    capacity: 9,
    luggage: 6,
    ac: true,
    transmission: "Manual",
  },
  {
    id: "tempo-traveller",
    name: "Tempo Traveller",
    model: 2025,
    category: "town",
    image: tempoTravellerImg,
    capacity: 12,
    luggage: 8,
    ac: true,
    transmission: "Manual",
  },
  {
    id: "bus",
    name: "Bus",
    model: 2025,
    category: "town",
    image: busImg,
    capacity: 35,
    luggage: 20,
    ac: true,
    transmission: "Manual",
  },
];
