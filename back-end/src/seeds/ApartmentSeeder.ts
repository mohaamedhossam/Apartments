import { AppDataSource } from "../data-source";
import { Apartment } from "../entity/apartment";

async function seed() {
  const dataSource = await AppDataSource.initialize();

  const apartmentRepository = dataSource.getRepository(Apartment);

  const apartments = [
    {
      name: "Ocean View Apartment",
      unitNumber: "A101",
      project: "Seaside Towers",
      description: "A beautiful luxury apartment with a stunning ocean view.",
      location: "Miami Beach",
      price: 450000,
      available: true,
    },
    {
      name: "Downtown Loft",
      unitNumber: "B202",
      project: "Urban Living",
      description: "A spacious loft in the heart of downtown, perfect for city lovers.",
      location: "New York City",
      price: 650000,
      available: true,
    },
    {
      name: "Cozy Mountain Retreat",
      unitNumber: "C303",
      project: "Mountain View Estates",
      description: "A cozy retreat located in the mountains, ideal for nature lovers.",
      location: "Aspen",
      price: 350000,
      available: false,
    },
    {
      name: "Luxury Penthouse",
      unitNumber: "D404",
      project: "Skyline Heights",
      description: "A luxurious penthouse with panoramic city views and high-end finishes.",
      location: "Los Angeles",
      price: 1200000,
      available: true,
    },
    {
      name: "Charming Studio Apartment",
      unitNumber: "E505",
      project: "Garden Apartments",
      description: "A charming studio with a beautiful garden view, perfect for singles.",
      location: "San Francisco",
      price: 300000,
      available: true,
    },
    {
      name: "Modern Family Home",
      unitNumber: "F606",
      project: "Family Haven",
      description: "A modern family home with spacious rooms and a large backyard.",
      location: "Dallas",
      price: 500000,
      available: true,
    },
    {
      name: "Elegant Townhouse",
      unitNumber: "G707",
      project: "Suburban Bliss",
      description: "An elegant townhouse located in a quiet suburban area, perfect for families.",
      location: "Chicago",
      price: 400000,
      available: true,
    },
    {
      name: "Historic Victorian House",
      unitNumber: "H808",
      project: "Heritage Homes",
      description: "A beautifully restored Victorian house with vintage charm.",
      location: "Boston",
      price: 750000,
      available: false,
    },
    {
      name: "Contemporary Apartment",
      unitNumber: "I909",
      project: "City Center",
      description: "A sleek and modern apartment close to all city amenities.",
      location: "Seattle",
      price: 550000,
      available: true,
    },
    {
      name: "Serene Lakeside Cabin",
      unitNumber: "J010",
      project: "Lakeside Retreats",
      description: "A serene cabin by the lake, perfect for weekend getaways.",
      location: "Lake Tahoe",
      price: 300000,
      available: true,
    },
  ];

  for (const apt of apartments) {
    const apartment = apartmentRepository.create(apt);
    await apartmentRepository.save(apartment);
  }

  console.log("Apartments seeded successfully!");
  await dataSource.destroy();
}

seed().catch((error) => console.log("Error seeding apartments:", error));
