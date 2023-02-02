import React from 'react';
import {carslist} from "../helpers/carslist";
import CarList from "../components/carList/CarList";

const Gallery = () => {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Car List</h2>
                    <ul className="cars__list">
                        {carslist.map((carList, index) =>{
                            return(
                                <CarList
                                    key={index}
                                    title={carList.title}
                                    description={carList.description}
                                    img={carList.img}
                                />
                            );
                        })}
                    </ul>
            </div>
        </main>
    );
};

export default Gallery;