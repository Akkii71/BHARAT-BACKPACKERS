import React, { useState, useEffect } from 'react';

// Main App component
const Home = () => {
    // State variable for search results
    const [searchResults, setSearchResults] = useState([]);

    // Simulated data for Indian places
    const indianPlaces = [
        {
            name: "Taj Mahal",
            location: "Agra, Uttar Pradesh",
            description: "An iconic ivory-white marble mausoleum, a UNESCO World Heritage Site.",
            imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4noI9PPknRN5Ubf-oPfyr2-pYzFrjzFzSnfyW0gehI6YKeAPw_BCyj8cYpCtFzwEERzxhOS6Y7Go36r8hT4jEHoyvUo4earvr2wibRKz16A36wYYWmmkcE2-UWa1wcRc9KV23zQ=s1360-w1360-h1020-rw"
        },
        {
            name: "Jaipur City Palace",
            location: "Jaipur, Rajasthan",
            description: "A magnificent complex of courtyards, gardens, and buildings, home to the royal family.",
            imageUrl: "https://placehold.co/400x250/FCE7F3/334155?text=Jaipur+Palace"
        },
        {
            name: "Kerala Backwaters",
            location: "Alleppey, Kerala",
            description: "A network of serene canals, lakes, and lagoons, perfect for houseboat cruises.",
            imageUrl: "https://placehold.co/400x250/D1FAE5/334155?text=Kerala+Backwaters"
        },
        {
            name: "Gateway of India",
            location: "Mumbai, Maharashtra",
            description: "A monumental arch built to commemorate the landing of King George V and Queen Mary.",
            imageUrl: "https://placehold.co/400x250/E0F7FA/334155?text=Gateway+of+India"
        },
        {
            name: "Varanasi Ghats",
            location: "Varanasi, Uttar Pradesh",
            description: "Sacred steps leading to the Ganges River, bustling with pilgrims and rituals.",
            imageUrl: "https://placehold.co/400x250/FFFBEB/334155?text=Varanasi+Ghats"
        },
        {
            name: "Hampi Ruins",
            location: "Hampi, Karnataka",
            description: "The captivating ruins of the Vijayanagara Empire, a UNESCO World Heritage Site.",
            imageUrl: "https://placehold.co/400x250/F3E8FF/334155?text=Hampi+Ruins"
        },
        {
            name: "Goa Beaches",
            location: "Goa",
            description: "Famous for its beautiful beaches, vibrant nightlife, and Portuguese architecture.",
            imageUrl: "https://placehold.co/400x250/D1FAE5/334155?text=Goa+Beaches"
        },
        {
            name: "Red Fort",
            location: "Delhi",
            description: "A historic fort in the city of Delhi, served as the main residence of the Mughal emperors.",
            imageUrl: "https://placehold.co/400x250/FEE2E2/334155?text=Red+Fort"
        },
        {
          name: "Red Fort",
          location: "Delhi",
          description: "A historic fort in the city of Delhi, served as the main residence of the Mughal emperors.",
          imageUrl: "https://placehold.co/400x250/FEE2E2/334155?text=Red+Fort"
      }
    ];

    // Effect to display all places on initial load
    useEffect(() => {
        // Directly set all places as search results since there's no search function
        setSearchResults(indianPlaces);
    }, []); // Empty dependency array ensures this runs only once on mount

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'width', fontFamily: 'Inter, sans-serif' }}>
            {/* Main Content */}
            <main style={{ flexGrow: 1, maxWidth: '960px', margin: '2rem auto 0', padding: '1rem' }}>
                {/* Hero Section */}
                <section style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '2.25rem', fontWeight: '800', color: '#1f2937', marginBottom: '1rem' }}>Discover Amazing Places in India</h2>
                    <p style={{ fontSize: '1.125rem', color: '#4b5563' }}>Explore a curated list of beautiful destinations across the country!</p>
                </section>

                {/* Results Section */}
                <section id="results-section" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                    {searchResults.map((place, index) => (
                        <div key={index} style={{ backgroundColor: 'white', borderRadius: '0.75rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                            <img
                                src={place.imageUrl}
                                alt={place.name}
                                style={{ width: '100%', height: '12rem', objectFit: 'cover', borderRadius: '0.5rem', marginBottom: '1rem' }}
                                onError={(e) => {
                                    e.target.onerror = null; // Prevent infinite loop
                                    e.target.src = `https://placehold.co/400x250/cccccc/333333?text=Image+Not+Found`; // Fallback image
                                }}
                            />
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem' }}>{place.name}</h3>
                            <p style={{ fontSize: '1rem', color: '#374151', marginBottom: '0.5rem' }}>{place.location}</p>
                            <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>{place.description}</p>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    );
};

export default Home;
