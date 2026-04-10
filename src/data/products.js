const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    description:
      "Premium wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 249.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    description:
      "Feature-rich smartwatch with fitness tracking, heart rate monitor, and smartphone notifications. Water-resistant design.",
  },
  {
    id: 3,
    name: "Laptop Stand",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
    description:
      "Ergonomic aluminum laptop stand that improves posture and workspace organization. Adjustable height and angle.",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop",
    description:
      "RGB backlit mechanical keyboard with Cherry MX switches. Perfect for gaming and typing enthusiasts.",
  },
  {
    id: 5,
    name: "USB-C Hub",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=500&h=500&fit=crop",
    description:
      "Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader. Expand your laptop connectivity.",
  },
  {
    id: 6,
    name: "Wireless Mouse",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop",
    description:
      "Ergonomic wireless mouse with precision tracking and long battery life. Comfortable for extended use.",
  },
  {
    id: 7,
    name: "Monitor Stand",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=500&fit=crop",
    description:
      "Dual monitor stand with adjustable height and tilt. Frees up desk space and improves ergonomics.",
  },
  {
    id: 8,
    name: "Webcam HD",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&h=500&fit=crop",
    description:
      "1080p HD webcam with auto-focus and built-in microphone. Ideal for video calls and streaming.",
  },
  {
    id: 9,
    name: "Bluetooth Speaker",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500&h=500&fit=crop",
    description:
      "Portable Bluetooth speaker with deep bass and 12-hour playtime. Perfect for indoor and outdoor use.",
  },
  {
    id: 10,
    name: "Gaming Chair",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=500&h=500&fit=crop",
    description:
      "Ergonomic gaming chair with lumbar support and adjustable height. Designed for long gaming sessions.",
  },
  {
    id: 11,
    name: "External Hard Drive",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500&h=500&fit=crop",
    description:
      "1TB external hard drive with fast data transfer. Ideal for backups and storage.",
  },
  {
    id: 12,
    name: "Power Bank",
    price: 25.99,
    image:
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&h=500&fit=crop",
    description:
      "10000mAh power bank with fast charging support. Compact and travel-friendly.",
  },
  {
    id: 13,
    name: "LED Desk Lamp",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1507477338202-487281e6c27e?w=500&h=500&fit=crop",
    description:
      "Adjustable LED desk lamp with brightness control. Energy-efficient and eye-friendly.",
  },
  {
    id: 14,
    name: "Smartphone Tripod",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1519183071298-a2962be90b8e?w=500&h=500&fit=crop",
    description:
      "Flexible tripod for smartphones and cameras. Perfect for photography and vlogging.",
  },
  {
    id: 15,
    name: "Noise Cancelling Earbuds",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500&h=500&fit=crop",
    description:
      "Wireless earbuds with active noise cancellation and crystal-clear sound quality.",
  },
  {
    id: 16,
    name: "Tablet Stand",
    price: 22.99,
    image:
      "https://images.unsplash.com/photo-1580913428735-bd3c269d6a82?w=500&h=500&fit=crop",
    description:
      "Adjustable tablet stand for comfortable viewing angles. Compatible with all tablets.",
  },
  {
    id: 17,
    name: "Portable SSD",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?w=500&h=500&fit=crop",
    description:
      "High-speed portable SSD with 500GB storage. Compact and durable design.",
  },
  {
    id: 18,
    name: "Fitness Tracker",
    price: 69.99,
    image:
      "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=500&h=500&fit=crop",
    description:
      "Track your steps, calories, and heart rate with this sleek fitness tracker.",
  },
  {
    id: 19,
    name: "Gaming Mouse Pad",
    price: 15.99,
    image:
      "https://images.unsplash.com/photo-1616627981451-cd0d82b48a0b?w=500&h=500&fit=crop",
    description:
      "Large gaming mouse pad with smooth surface and anti-slip base.",
  },
  {
    id: 20,
    name: "VR Headset",
    price: 299.99,
    image:
      "https://images.unsplash.com/photo-1580128637393-1f7e0c88c7d0?w=500&h=500&fit=crop",
    description: "Immersive VR headset for gaming and virtual experiences.",
  },
  {
    id: 21,
    name: "Smart Bulb",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=500&h=500&fit=crop",
    description:
      "WiFi-enabled smart bulb with color changing and voice control.",
  },
  {
    id: 22,
    name: "Wireless Charger",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=500&fit=crop",
    description:
      "Fast wireless charger compatible with all Qi-enabled devices.",
  },
  {
    id: 23,
    name: "Digital Camera",
    price: 499.99,
    image:
      "https://images.unsplash.com/photo-1519183071298-a2962be90b8e?w=500&h=500&fit=crop",
    description: "High-resolution digital camera for photography enthusiasts.",
  },
  {
    id: 24,
    name: "Microphone USB",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1581091870627-3c3a9f6c6f2d?w=500&h=500&fit=crop",
    description: "Studio-quality USB microphone for recording and streaming.",
  },
  {
    id: 25,
    name: "Laptop Backpack",
    price: 54.99,
    image:
      "https://images.unsplash.com/photo-1514474959185-1472d4fef0b9?w=500&h=500&fit=crop",
    description:
      "Stylish and durable laptop backpack with multiple compartments.",
  },
  {
    id: 26,
    name: "Smart Thermostat",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=500&h=500&fit=crop",
    description:
      "Control your home temperature remotely with this smart thermostat.",
  },
  {
    id: 27,
    name: "Electric Kettle",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500&h=500&fit=crop",
    description: "Fast boiling electric kettle with auto shut-off feature.",
  },
  {
    id: 28,
    name: "Coffee Maker",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500&h=500&fit=crop",
    description:
      "Brew perfect coffee every time with this easy-to-use coffee maker.",
  },
  {
    id: 29,
    name: "Air Purifier",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&h=500&fit=crop",
    description: "Keep your air clean with HEPA filter air purifier.",
  },
  {
    id: 30,
    name: "Smart Door Lock",
    price: 179.99,
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=500&h=500&fit=crop",
    description: "Secure your home with keyless smart door lock system.",
  },
  {
    id: 31,
    name: "Portable Fan",
    price: 14.99,
    image:
      "https://images.unsplash.com/photo-1590080877777-2a9d3e6f6d3c?w=500&h=500&fit=crop",
    description: "Compact USB portable fan for cooling anywhere.",
  },
  {
    id: 32,
    name: "Desk Organizer",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=500&fit=crop",
    description: "Keep your desk tidy with this multi-compartment organizer.",
  },
  {
    id: 33,
    name: "Smart TV Stick",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&h=500&fit=crop",
    description: "Stream your favorite shows with this compact smart TV stick.",
  },
  {
    id: 34,
    name: "Electric Toothbrush",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500&h=500&fit=crop",
    description: "Advanced electric toothbrush with multiple cleaning modes.",
  },
  {
    id: 35,
    name: "Hair Dryer",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1585238342028-4f0f0b8b2f36?w=500&h=500&fit=crop",
    description: "Powerful hair dryer with heat control settings.",
  },
  {
    id: 36,
    name: "Action Camera",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1508898578281-774ac4893a7c?w=500&h=500&fit=crop",
    description: "Capture adventures in 4K with this waterproof action camera.",
  },
  {
    id: 37,
    name: "Drone Camera",
    price: 599.99,
    image:
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=500&h=500&fit=crop",
    description: "High-performance drone with HD camera and long flight time.",
  },
  {
    id: 38,
    name: "Projector",
    price: 249.99,
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&h=500&fit=crop",
    description: "Full HD projector for home theater experience.",
  },
];

export function getProducts() {
  return products;
}
