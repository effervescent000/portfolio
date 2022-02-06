import axios from "axios";
import React, { useState, useEffect } from "react";

import PortfolioSidebar from "./portfolio-sidebar";

const PortfolioManagerPage = (props) => {
    const [portfolioItems, setPortfolioItems] = useState([]);
    const [itemToEdit, setItemToEdit] = useState({});

    useEffect(() => {
        getPortfolioItems();
    }, []);

    const handleDeleteClick = (item) => {
        axios
            .delete(`https://api.devcamp.space/portfolio/portfolio_items/${item.id}`, {
                withCredentials: true,
            })
            .then((response) => {
                setPortfolioItems(
                    portfolioItems.filter((itemToDelete) => item.id !== itemToDelete.id)
                );
            })
            .catch((error) => console.log("handleClickError", error.response));
    };

    const handleEditClick = (item) => {
        setItemToEdit(item);
    };

    const getPortfolioItems = () => {
        axios
            .get(`https://tararichardson.devcamp.space/portfolio/portfolio_items`, {
                withCredentials: true,
            })
            .then((response) => {
                setPortfolioItems([...response.data.portfolio_items]);
            })
            .catch((error) => console.log("error in getPortfolioItems", error.response));
    };

    return (
        <div className="portfolio-manager-wrapper">
            <div className="left-column"></div>
            <div className="right-column">
                <PortfolioSidebar
                    data={portfolioItems}
                    handleDeleteClick={handleDeleteClick}
                    handleEditClick={handleEditClick}
                />
            </div>
        </div>
    );
};

export default PortfolioManagerPage;
