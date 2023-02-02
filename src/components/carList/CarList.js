import React from 'react';
import "./style.css";


const CarList = ({title,description,img}) => {
    return (
        <>
            <li className="car-list">
                <h3 className="title">{title}</h3>
                <p className="description">{description}</p>
                <img src={img} alt={title} className="car__img"/>
            </li>
        </>
    );
};

export default CarList;