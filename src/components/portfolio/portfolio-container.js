import React, { useState, useEffect } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";

const PortfolioContainer = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        getPortfolioItems();
    }, []);

    const getPortfolioItems = () => {
        axios
            .get(
                "https://tararichardson.devcamp.space/portfolio/portfolio_items"
            )
            .then((response) => {
                setData(response.data.portfolio_items);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const populatePortfolioItems = () => {
        return data.map((item) => {
            return <PortfolioItem key={item.id} item={item} />;
        });
    };

    const getContent = () => {
        if (isLoading) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="portfolio-items-wrapper">
                    {populatePortfolioItems()}
                </div>
            );
        }
    };

    return <div>{getContent()}</div>;
};

export default PortfolioContainer;
