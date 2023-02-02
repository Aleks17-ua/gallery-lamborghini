import React from 'react';
import about from './../assets/about.jpg';

const About = () => {
    return (
        <main className="section">
            <div className="container">
                <h1 className="about">About</h1>
                <p className="info">Automobili Lamborghini S.p.A. Founded in 1963 and based in Sant'Agata Bolognese, Bologna,
                    Automobili Lamborghini manufactures supercars that are among the most coveted in the world.
                    The current lineup includes the V12-powered Aventador launched in 2011,
                    the V10-powered Huracán launched in 2014, and the twin-turbo V8 Urus sports crossover
                    launched globally in 2018. In its more than half-century history, Automobili Lamborghini has
                    created a range of dream cars, including the 350 GT, Miura, Espada, Countach, Diablo and Murciélago,
                    as well as limited editions such as the Reventón, Sesto Elemento, Veneno and Centenario. Introduced
                    in 2019 and limited to only 63 units, the Lamborghini Sián FKP 37 supercar marks the first time the
                    brand has used hybrid technology and is the first in the world to use a supercapacitor and
                    the latest materials science in a hybrid car. In this way, the Sián not only delivers supreme
                    dynamics and extraordinary emotions, as befits a true Lamborghini supersport car, but also satisfies
                    the future needs of electrification.

                    <img className="about__logo" src={about} alt="about"/>
                </p>

            </div>
        </main>
    );
};

export default About;