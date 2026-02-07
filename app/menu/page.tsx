import Image from "next/image";

export default function Menu() {
  const menuItems = [
  {
    name: "Espresso",
    price: "$3.50",
    img: "/images/menu/espresso.jpg",
    desc: "The Purest Essence.",
    benefit: "Instantly sharpens focus and energy levels for your morning ritual.",
  },
  {
    name: "Americano",
    price: "$3.75",
    img: "/images/menu/americano.jpg",
    desc: "Smooth & Bold.",
    benefit: "Rich espresso diluted with hot water for a smooth strong taste.",
  },
  {
    name: "Cappuccino",
    price: "$4.00",
    img: "/images/menu/cappuccino.jpg",
    desc: "Velvety & Balanced.",
    benefit: "Perfect balance of espresso, milk and foam.",
  },
  {
    name: "Latte",
    price: "$4.25",
    img: "/images/menu/latte.jpg",
    desc: "Creamy & Smooth.",
    benefit: "Silky steamed milk with rich espresso.",
  },
  {
    name: "Macchiato",
    price: "$4.10",
    img: "/images/menu/macchiato.jpg",
    desc: "Bold & Layered.",
    benefit: "Strong espresso topped with milk foam.",
  },
  {
    name: "Mocha",
    price: "$4.50",
    img: "/images/menu/mocha.jpg",
    desc: "Chocolate Delight.",
    benefit: "Espresso blended with chocolate and steamed milk.",
  },
];


  return (
    <div className="menuContainer">
      {menuItems.map((item) => (
        <div key={item.name} className="menuRow">
          
          <div className="imageBox">
            <Image
              src={item.img}
              alt={item.name}
              fill
              className="coffeeImg"
            />
          </div>

          <div className="textBox">
            <h2>
              {item.name} — {item.price}
            </h2>
            <p>{item.desc}</p>
            <p>{item.benefit}</p>
          </div>

        </div>
      ))}
    </div>
  );
}
