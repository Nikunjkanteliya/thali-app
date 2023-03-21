import React from "react";
import Nav from "./Nav";
import style from "./style/aboutus.module.css";

const Aboutus = () => {
  return (
    <div className={`${style.back}`}>
      <Nav />
      <div className={`${style.main}`}>
        <div>
          <h2>Our Story</h2>
          <h3>TRADITIONAL & CONTEMPORARY</h3>
          <p>
            We wish to thank our customers, employees, vendors and our community
            for their work and support as we celebrate 20+ years at Hope Street.
            It has been an interesting and rewarding journey.After 20 years we
            present you India with a fresh new look, a creative menu offering a
            blend of contemporary and traditional favorites, a new kitchen &
            team elevating our food and service, and elegant lighting
            transforming the entire restaurant. Enjoy our Garden Bar and Patio
            in the summer and cozy fireplace seating in the winter.
          </p>
          <h3>WHAT IS 21ST CENTURY CUISINE?</h3>
          <p>
            India represents one of the oldest continuous civilization in human
            history, dating back 3300 BCE. It is ever-evolving and continues to
            do so today. It is the largest democracy with over a billion people,
            numerous religions, languages and subcultures. Indian cuisine is
            anything but homogenous! Regions and religions make up a large
            portion of the cultural fabric of the food. The 21st century
            globalization has made all sorts of ingredients and techniques
            available to the Chefs in India. Today India produces more culinary
            graduates than any other country. They are full of creative energy
            and looking to the rest of the world to spice-up new ingredients to
            ‘Indianize’ them that’s where we come… America is a melting pot like
            India was over a 1000 years ago. Being in the US offers a chef a lot
            of exciting possibilities to play with the ingredients that are not
            commonly found in India. We are availing these opportunities to
            create an exciting menu that has a blend of traditional favorites
            like Chicken Tikka Masala and creative dishes like Bengal Fish Curry
            (made with Salmon that is not usually found in India). The goal is
            to present a creative, fresh, nutritious, tasty, flavorful and a
            balanced meal. Like the 21st century India, we are progressive with
            our cuisine and not bound by the ‘same-old’ mentality.
          </p>
          <footer>“Be the change...”</footer>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
