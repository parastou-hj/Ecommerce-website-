import React from 'react';
import '../Magazin/Magazin.css';
import NavDown from '../navbar/NavDown';
import Footer from '../Footer/Footer';

const Magazin = () => {
  return (
    <div className="magazin">
      <header className="magazin-header">
        <h1>Welcome to the Magazin</h1>
        <p>Your source for the latest trends and articles</p>
      </header>
      
      <main className="magazin-content container">
        <section className="featured-articles">
          <h2>Featured Articles</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="article-card">
                <img src="article1.jpg" alt="Article 1" />
                <h3>Article 1 Title</h3>
                <p>Brief description of article 1...</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="article-card">
                <img src="article2.jpg" alt="Article 2" />
                <h3>Article 2 Title</h3>
                <p>Brief description of article 2...</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="article-card">
                <img src="article3.jpg" alt="Article 3" />
                <h3>Article 3 Title</h3>
                <p>Brief description of article 3...</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="latest-news">
          <h2>Latest News</h2>
          <ul>
            <li>
              <h3>News Item 1</h3>
              <p>Summary of news item 1...</p>
            </li>
            <li>
              <h3>News Item 2</h3>
              <p>Summary of news item 2...</p>
            </li>
            <li>
              <h3>News Item 3</h3>
              <p>Summary of news item 3...</p>
            </li>
          </ul>
        </section>
      </main>
      
      <Footer />
      <NavDown />
    </div>
  );
}

export default Magazin;
