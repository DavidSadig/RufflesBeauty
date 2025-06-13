interface Service {
  id: string;
  name: string;
  price: number;
  description: string;
}

const nailData = [
  {
    id: "1",
    name: "Classic Manicure",
    price: 25,
    description: "Simple and clean look.",
    image: "/images/nails/classic.jpg" // ✅ this is required
  },
  {
    id: "2",
    name: "Gel Extensions",
    price: 45,
    description: "Long-lasting and glossy.",
    image: "/images/nails/gel.jpg"
  },
  // ...and so on
];

export default nailData;