import Masonry from "masonry-layout"; // Import Masonry
import { useEffect, useState } from "react";
import "../styles/Favorites.css"; // Optional if you're using a CSS file for styling    

const Favorites = () => {
    // Define local data instead of fetching from an API
    const [favorites, setFavorites] = useState([
        {
            id: 1,
            category: "Drinks",
            name: "My Favorite Tequila",
            imageURL: "Anejo.png",
            summary: "A brief summary of the book.",
            price: "$0.00",
            links: "https://bookwebsite.com",
        },
        {
            id: 2,
            category: "Movies",
            name: "My Favorite Movie",
            imageURL: "path/to/movie-image.jpg",
            summary: "A brief summary of the movie.",
            price: "$10.00",
            links: "https://moviewebsite.com",
        },
        // Add more items as needed
    ]);
    const [error, setError] = useState(null);

    useEffect(() => {
        initializeMasonryLayout(); // Initialize Masonry when the component loads
    }, []);

    const initializeMasonryLayout = () => {
        setTimeout(() => {
            new Masonry(".grid", {
                itemSelector: ".grid-item",
                columnWidth: ".grid-item",
                percentPosition: true,
            });
        }, 500); // Adjust timeout if necessary
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="grid">
            {favorites.map((favorite) => (
                <div key={favorite.id} className="grid-item">
                    <div className="card">
                        <img
                            src={favorite.imageURL}
                            className="card-img-top"
                            alt={favorite.name}
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                {favorite.category} <br />
                                {favorite.name}
                            </h5>
                            <p className="card-text">{favorite.summary}</p>
                            <h5>{favorite.price}</h5>
                            <a
                                href={favorite.links}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <button className="btn btn-primary">
                                    Learn more
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Favorites;
