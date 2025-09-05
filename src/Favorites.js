import { useMemo } from "react";
import Masonry from "react-masonry-css";
import './Favorites.css';


const Favorites = () => {
  // Seed data: 12 items to start. Add more by appending objects.
  const favorites = useMemo(
    () => [
      {
        id: 1,
        category: "Tech & Style",
        name: "Ray-Ban Meta Wayfarer Glasses",
        summary:
          "Combining iconic Hollywood style with Meta AI, these AI glasses let you react to what you see, take pictures and videos, listen on the go and make calls and send messages without touching your phone.",
        price: "$379",
        imageURL:
          "/images/Meta.png",
        links: "https://www.meta.com/ai-glasses/wayfarer-matte-black-clear-green-transitions//"
      },
      {
        id: 2,
        category: "Top Shelf",
        name: "Don Julio 1942 Tequila",
        summary:
          "Transform ordinary drinks into extraordinary slush. Enjoy the convenience of frozen drinks at home with no ice needed.",
        price: "$180",
        imageURL:
          "/images/1942.png",
        links: "https://www.donjulio.com/our-tequilas/don-julio-1942-tequila?ds_e=MICROSOFT&ds_c=26004831_Brand-Variant_DOJUO_DONJUB_SA3_BING_USA_NU_BMC_AO_SEAH_PSEAC_TEAD_NU_ALBOS_NAT_NU_CPC_NU_KEW_A21%2B_CXD_EN_EXPH_BRAD&ds_k=1942+tequila&gclid=cf52dd10300216ec605cb5aa50fa1e6d&gclsrc=3p.ds&msclkid=cf52dd10300216ec605cb5aa50fa1e6d/"
      },
      {
        id: 3,
        category: "Fragrance",
        name: "Million Gold for Her Eau de Parfum",
        summary:
          "Dive into a intoxicatingly sensual world of golden energy blending fiercely feminine white flowers, warm rose and addictive mineral musk.",
        price: "$170",
        imageURL:
          "/images/Million.png",
        links: "https://www.rabanne.com/us/en_US/fragrance/c/frag-women-goldforher/"
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
        name: "Carolina Herrera Very Good Girl Elixir",
        summary:
          "Starting with top notes of playfully mischievous redcurrant and exotic lychee, leading to a seductive heart of rose. Vetiver and vanilla base notes provide a surprising and contemporary finish.",
        price: "$102",
        imageURL:
          "/images/VeryGoodGirl.png",
        links: "https://www.carolinaherrera.com/us/en/p-fragrance/very-good-girl?sku=000000000065182260/"
      },
      {
        id: 6,
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
        id: 7,
        category: "Beauty",
        name: "MAC Lipglass Air Snobbish",
        summary:
          "Shines like glass. Feels like air. A non-sticky, high-shine lip gloss that hydrates lips all day.",
        price: "$25",
        imageURL:
          "/images/Snobbish.png",
        links: "https://www.maccosmetics.com/product/13853/133676/products/makeup/lips/lip-gloss/lipglass-air-non-sticky-gloss?shade=Snobbish/"
      },
      {
        id: 8,
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
        id: 9,
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
        id: 10,
        category: "Beauty",
        name: "The Lip Bar Nonstop Liquid Matte It Girl",
        summary:
          "This non-stop liquid matte goes on like a gloss, dries down matte, and last all day.",
        price: "$15",
        imageURL:
          "/images/ItGirl.png",
        links: "https://thelipbar.com/products/liquid-matte?variant=40404315013209/"
      },
      {
        id: 11,
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
        category: "Home",
        name: "DW Home Sparkling Mimosa Wooden wick candle",
        summary:
          "Shimmering spring water splashed over sweet watermelon and green honeydew, enhanced with aromatic hints of crushed rosemary.",
        price: "$18",
        imageURL:
          "/images/Woodwick.png",
        links: "https://www.dwhome.com/products/sparkling-mimosa-wooden-wick-candle/"
      },
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
