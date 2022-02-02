import React, { useState, useEffect } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";

const PortfolioContainer = (props) => {
    const [pageTitle, setPageTitle] = useState("Welcome to my portfolio!");
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        getPortfolioItems();
    }, []);

    const getPortfolioItems = () => {
        axios
            .get("https://tararichardson.devcamp.space/portfolio/portfolio_items")
            .then((response) => {
                console.log(response);
                setData(response.data.portfolio_items);
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

    return (
        <div>
            <h2>{pageTitle}</h2>
            <div className="portfolio-items-wrapper">{populatePortfolioItems()}</div>
        </div>
    );
};

export default PortfolioContainer;
