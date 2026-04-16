import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => (
  <div>
    <Header />
    <main className="about-page">
      <section className="about-title">
        <h1>Seeflix</h1>
        <p>Seeflix est votre plateforme de streaming dédiée aux films et séries du monde entier. Découvrez, explorez et partagez vos coups de cœur !</p>
      </section>
      <section className="about-mission">
        <h2>Notre mission</h2>
        <p>Offrir une expérience de divertissement immersive, accessible et personnalisée à tous les passionnés de cinéma et de séries. Seeflix valorise la diversité, la découverte et la convivialité.</p>
      </section>
    </main>
    <Footer />
  </div>
);

export default About;
