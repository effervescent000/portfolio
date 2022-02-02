import React, { useState } from "react";

const PortfolioItem = (props) => {
    const [portfolioItemClass, setPortfolioItemClass] = useState("");

    const { id, description, thumb_image_url, logo_url } = props.item;
    return (
        <div className="portfolio-item-wrapper">
            <div
                className={`portfolio-img-background ${portfolioItemClass}`}
                style={{ backgroundImage: `url(${thumb_image_url})` }}
            />
        </div>
    );
};

export default PortfolioItem;
