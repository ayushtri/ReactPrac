const Shimmer = () => {

    const cards = Array.from({ length: 10 });


    return (
        <div className="shimmer-container">
            {cards.map((_, index) => (
                <div className="shimmer-card" key={index}>
                    <div className="shimmer-image"></div>
                    <div className="shimmer-text shimmer-title"></div>
                    <div className="shimmer-text shimmer-subtitle"></div>
                    <div className="shimmer-text shimmer-subtitle"></div>
                    <div className="shimmer-text shimmer-small"></div>
                    <div className="shimmer-text shimmer-small"></div>
                </div>
            ))}            
        </div>
    );
};

export default Shimmer;