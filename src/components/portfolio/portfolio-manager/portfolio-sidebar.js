import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const PortfolioSidebar = (props) => {
    const portfolioList = props.data.map((item) => {
        return (
            <div key={item.id} className="portfolio-item-thumb">
                <div className="portfolio-thumb-img">
                    <img src={item.thumb_image_url} alt={item.name} />
                </div>
                <div className="text-content">
                    <h1 className="title">{item.name}</h1>
                    <div className="actions">
                        <button className="link-button" onClick={() => props.handleEditClick(item)}>
                            <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button
                            className="link-button"
                            onClick={() => props.handleDeleteClick(item)}
                        >
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                    </div>
                </div>
            </div>
        );
    });

    return <div className="portfolio-sidebar-list-wrapper">{portfolioList}</div>;
};

export default PortfolioSidebar;
