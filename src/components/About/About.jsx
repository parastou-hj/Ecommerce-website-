// src/components/About/About.js
import React from 'react';
import '../About/About.css';
import NavDown from '../navbar/NavDown';
import Footer from '../Footer/Footer';

const About = () => {
  return (
    <div className="about">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Learn more about our story and our mission</p>
      </header>

      <main className="about-content container">
        <section className="our-story">
          <h2>Our Story</h2>
          <p>
            Our journey began in [year], with a vision to provide high-quality products to our customers. 
            Over the years, we have grown into a trusted name in the industry, committed to excellence and customer satisfaction.
          </p>
        </section>

        <section className="our-mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to deliver exceptional products and services that meet the evolving needs of our customers.
            We strive to create a positive impact in the community and uphold the highest standards of integrity and professionalism.
          </p>
        </section>

        <section className="our-team">
          <h2>Our Team</h2>
          <p>
            Our dedicated team of professionals is the backbone of our success. 
            We are passionate about what we do and work tirelessly to achieve our goals and exceed our customers' expectations.
          </p>
        </section>
      </main>

      <Footer />
      <NavDown />
    </div>
  );
}

export default About;
