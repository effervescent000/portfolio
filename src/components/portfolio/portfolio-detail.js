import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PortfolioDetail = (props) => {
    const { permalink } = useParams();
    const [portfolioItem, setPortfolioItem] = useState({});
    const { banner_image_url, description, logo_url, name, thumb_image_url, url } = portfolioItem;
    const bannerStyles = {
        backgroundImage: `url(${banner_image_url})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
    };

    useEffect(() => {
        getPortfolioItem();
    }, []);

    const getPortfolioItem = () => {
        axios
            .get(`https://tararichardson.devcamp.space/portfolio/portfolio_items/${permalink}`, {
                withCredentials: true,
            })
            .then((response) => {
                setPortfolioItem(response.data.portfolio_item);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="portfolio-detail-wrapper">
            <div className="banner" style={bannerStyles}>
                {/* <img src={logo_url} alt="logo" /> */}
            </div>
            <div className="portfolio-detail-description-wrapper">
                <div className="description">{description}</div>
            </div>
            <div className="bottom-content-wrapper">
                <a href={url} className="site-link" target="_blank">
                    Visit {name}
                </a>
            </div>
        </div>
    );
};

export default PortfolioDetail;
