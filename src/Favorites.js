import { useMemo } from "react";
import Masonry from "react-masonry-css";
import './Favorites.css';


const Favorites = () => {
  // Seed data: 12 items to start. Add more by appending objects.
  const favorites = useMemo(
    () => [
      {
        id: 1,
        category: "Home",
        name: "Lab Candles Grapefruit + Yuzu",
        summary:
          "Pink grapefruit, pomelo, and yuzu lifted by citrus greens.",
        price: "$18",
        imageURL:
          "/images/Grapefruit.png",
        links: "https://www.labcandles.com/products/grapefruit-yuzu/"
      },
      {
        id: 2,
        category: "Kitchen",
        name: "Frozen drink & slush machine",
        summary:
          "Transform ordinary drinks into extraordinary slush. Enjoy the convenience of frozen drinks at home with no ice needed.",
        price: "$299",
        imageURL:
          "/images/Slushi.png",
        links: "https://www.ninjakitchen.com/page/frozen-drink-makers?srsltid=AfmBOopnea862iLpWLtfAKj8RAtgCOx9DQwBHq9dP5o10Se2IAh2CJeI/"
      },
      {
        id: 3,
        category: "Books",
        name: "The Let Them Theory",
        summary:
          "Two simple words, Let Them, will set you free from the exhausting cycle of trying to manage everything and everyone around you.",
        price: "$16",
        imageURL:
          "/images/LetThem.png",
        links: "https://www.melrobbins.com/book/the-let-them-theory/"
      },
      {
        id: 4,
        category: "Food",
        name: "Connecticut Roll",
        summary:
          "Connecticut Roll features Maine lobster, served warmed with butter and lemon, on a New England Roll. The second of our two classic styles, our Connecticut Roll is our most popular roll and often referred to as heaven on a bun.",
        price: "$23",
        imageURL:
          "/images/LobsterRoll.png",
        links: "https://www.cousinsmainelobster.com/"
      },
      {
        id: 5,
        category: "Fragrance",
        name: "Million Gold for Her Eau de Parfum",
        summary:
          "Dive into a intoxicatingly sensual world of golden energy blending fiercely feminine white flowers, warm rose and addictive mineral musk.",
        price: "$98",
        imageURL:
          "/images/Million.png",
        links: "https://www.ulta.com/p/million-gold-her-eau-de-parfum-pimprod2049534?sku=2633410/"
      },
      {
        id: 6,
        category: "Spirits",
        name: "Loganberry Files",
        summary:
          "A sweet red wine with natural loganberry flavor added.",
        price: "$23",
        imageURL:
          "/images/Loganberry.png",
        links: "https://www.merrittestatewinery.com/catalog/p-100167/new-wine-loganberry-files-750ml/"
      },
      {
        id: 7,
        category: "Home",
        name: "DW Home Sparkling Mimosa Wooden wick candle",
        summary:
          "Shimmering spring water splashed over sweet watermelon and green honeydew, enhanced with aromatic hints of crushed rosemary.",
        price: "$18",
        imageURL:
          "/images/Woodwick.png",
        links: "https://www.dwhome.com/products/sparkling-mimosa-wooden-wick-candle/"
      },
      {
        id: 8,
        category: "Tech",
        name: "E-Reader",
        summary:
          "Distraction-free reading with a gorgeous e-ink display.",
        price: "$139",
        imageURL:
          "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=1200&auto=format&fit=crop",
        links: "https://www.amazon.com/kindle"
      },
      {
        id: 9,
        category: "Coffee",
        name: "Burr Grinder",
        summary:
          "Even grind = better coffee. Pair with your favorite beans.",
        price: "$99",
        imageURL:
          "https://images.unsplash.com/photo-1502462041640-b3d7e50d0660?q=80&w=1200&auto=format&fit=crop",
        links: "https://baratza.com/"
      },
      {
        id: 10,
        category: "Style",
        name: "Everyday Crossbody Bag",
        summary:
          "Lightweight, organized, and cute—errands to evenings.",
        price: "$69",
        imageURL:
          "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop",
        links: "https://www.lululemon.com/"
      },
      {
        id: 11,
        category: "Stationery",
        name: "Dot-Grid Journal",
        summary:
          "Perfect for habit tracking, gratitude, and project notes.",
        price: "$20",
        imageURL:
          "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
        links: "https://www.leuchtturm1917.us/"
      },
      {
        id: 12,
        category: "Audio",
        name: "Portable Bluetooth Speaker",
        summary:
          "Room-filling sound for picnics, yoga, or shower concerts.",
        price: "$129",
        imageURL:
          "https://images.unsplash.com/photo-1470364693235-a4a46d0606f3?q=80&w=1200&auto=format&fit=crop",
        links: "https://www.jbl.com/"
      }
    ],
    []
  );

  // Masonry responsive breakpoints
  const breakpoints = {
    default: 4, // >= 1200px
    1100: 3,
    800: 2,
    500: 1
  };

  return (
    <section className="favorites-wrapper">
      <h1 className="page-title">Christi’s Favorite Things</h1>

      <Masonry
        breakpointCols={breakpoints}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {favorites.map((item) => (
          <article key={item.id} className="card">
            <a
              href={item.links}
              target="_blank"
              rel="noreferrer noopener"
              className="image-link"
            >
              <img
                src={item.imageURL}
                alt={`${item.name} — ${item.category}`}
                loading="lazy"
              />
            </a>

            <div className="card-body">
              <h2 className="card-title">
                <span className="category">{item.category}</span>
                <span className="name">{item.name}</span>
              </h2>

              <p className="card-text">{item.summary}</p>

              <div className="card-footer">
                <span className="price">{item.price}</span>
                <a
                  href={item.links}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn"
                >
                  Learn more
                </a>
              </div>
            </div>
          </article>
        ))}
      </Masonry>
    </section>
  );
};

export default Favorites;
