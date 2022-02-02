import React, { useState } from "react";
import { Link } from "react-router-dom";

const PortfolioItem = (props) => {
    const [portfolioItemClass, setPortfolioItemClass] = useState("");

    const { id, description, thumb_image_url, logo_url } = props.item;

    const handleMouseEnter = () => {
        setPortfolioItemClass("image-blur");
    };

    const handleMouseLeave = () => {
        setPortfolioItemClass("");
    };

    return (
        <Link to={`/portfolio/${id}`}>
            <div
                className="portfolio-item-wrapper"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div
                    className={`portfolio-img-background ${portfolioItemClass}`}
                    style={{ backgroundImage: `url(${thumb_image_url})` }}
                />
                <div className="img-text-wrapper">
                    <div className="logo-wrapper">
                        <img src={logo_url} alt="logo" />
                    </div>
                    <div className="subtitle">{description}</div>
                </div>
            </div>
        </Link>
    );
};

export default PortfolioItem;
