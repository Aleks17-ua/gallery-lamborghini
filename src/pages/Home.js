import React from 'react';
import Header from "../components/header/Header";
import service from '../assets/service1_0.jpg';
import service1 from '../assets/service2.jpg';
import service2 from '../assets/service.jpg';

const Home = () => {
    return (
        <>
            <Header/>
            <main className="section">
                <div className="container">
                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">
                                <p>We also invite you to use our service.</p>
                            </h2>
                        </li>
                    </ul>
                </div>
                <div className="container">
                    <div className="content-list__service">
                        <h2><strong>CERTIFIED REPAIR AND ORIGINAL PARTS</strong></h2>
                        <p>
                            The after-sales service offered by Lamborghini guarantees quality, reliability
                            and impeccable results in all circumstances, backed by the expert support of
                            Lamborghini's official network of dealers and service centers.
                            Certified specialists will provide repairs and maintenance with a full guarantee of
                            the integrity and flawless functionality of your car, regardless of age and mileage.
                            In the event of a repair or refurbishment, only original spare parts will be used
                            and all protocols will be followed to ensure high quality standards.

                            <img  className="service__img" src={service} alt="service"/>
                        </p>
                    </div>
                    <div className="content-list__service">
                        <h2><strong>ORIGINAL PARTS</strong></h2>
                        <p>
                            Our goal has always been to meet and exceed our customers' expectations in terms of quality
                            and service: our parts are also manufactured and supplied according to this principle.
                            Maintaining the efficiency of your Lamborghini means maintaining perfect synergy between all
                            elements of the car.
                            This requires original spare parts: only they can ensure that the superiority and
                            exclusivity of your car will be maintained over time. Optimum performance, quality and
                            safety are only achieved by using components that fully comply with the specifications of
                            each model, ensuring comfort and maximum efficiency.

                            <img  className="service__img" src={service1} alt="service"/>
                        </p>
                    </div>
                    <div className="content-list__service">
                        <h2><strong> TRAINING AND CERTIFICATION</strong></h2>
                        <p>
                            The mission of the Lamborghini Training Academy, located in Sant'Agata Bolognese and
                            specifically designed to educate and develop the skills of aftermarket employees, is to
                            impart the full set of skills required to achieve excellence in customer service and the
                            highest quality standards in terms of service.
                            The team of experts is tasked with training the dealer staff to make them the perfect
                            spokesmen for Lamborghini's principles. These principles include precision, attention to
                            detail and technology development.
                            All work on your car will always be carried out by highly qualified
                            and certified specialists.
                            <img  className="service__img" src={service2} alt="service"/>
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;