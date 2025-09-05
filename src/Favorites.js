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
          "/image/Grapefruit.png",
        links: "https://www.labcandles.com/products/grapefruit-yuzu/"
      },
      {
        id: 2,
        category: "Kitchen",
        name: "High-Power Blender",
        summary:
          "Daily smoothie beast—powers through frozen fruit and greens.",
        price: "$249",
        imageURL:
          "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop",
        links: "https://www.vitamix.com/"
      },
      {
        id: 3,
        category: "Books",
        name: "Atomic Habits",
        summary:
          "Tiny changes, big results. Great for discipline and momentum.",
        price: "$16",
        imageURL:
          "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
        links: "https://jamesclear.com/atomic-habits"
      },
      {
        id: 4,
        category: "Wellness",
        name: "Yoga Mat (Non-Slip)",
        summary:
          "Cushioned, grippy, and durable—perfect for at-home flows.",
        price: "$89",
        imageURL:
          "https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=1200&auto=format&fit=crop",
        links: "https://www.manduka.com/"
      },
      {
        id: 5,
        category: "Home",
        name: "Aromatherapy Diffuser",
        summary:
          "Set the vibe—lavender for winding down, citrus for energy.",
        price: "$29",
        imageURL:
          "https://images.unsplash.com/photo-1598300189219-d64bb3ddacba?q=80&w=1200&auto=format&fit=crop",
        links: "https://www.muji.com/"
      },
      {
        id: 6,
        category: "Fitness",
        name: "Adjustable Dumbbells",
        summary:
          "Space-saving weights for quick strength sessions at home.",
        price: "$399",
        imageURL:
          "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1200&auto=format&fit=crop",
        links: "https://www.bowflex.com/"
      },
      {
        id: 7,
        category: "Skincare",
        name: "Vitamin C Serum",
        summary:
          "Brightens and evens tone—great under sunscreen each morning.",
        price: "$24",
        imageURL:
          "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1200&auto=format&fit=crop",
        links: "https://theordinary.com/"
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
