import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Magazin/Magazin.css';
import NavDown from '../navbar/NavDown';
import Footer from '../Footer/Footer';

const Magazin = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
          params: {
            q: 'fashion',
            'api-key': 'zQ6sjU5KYnxRRG75ev0OqNQBAaQE9NPL'
          }
        });
        setArticles(response.data.response.docs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the articles:", error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="magazin">
      <header className="magazin-header">
        <h1>Welcome to the Magazin</h1>
        <p>Your source for the latest trends and articles</p>
      </header>
      
      <main className="magazin-content container">
        {loading ? (
          <p>Loading articles...</p>
        ) : (
          <section className="featured-articles">
            <h2>Featured Articles</h2>
            <div className="row">
              {articles.map((article) => (
                <div className="col-md-4" key={article._id}>
                  <div className="article-card">
                    <img
                      src={`https://static01.nyt.com/${article.multimedia.length ? article.multimedia[0].url : 'default-image.jpg'}`}
                      alt={article.headline.main}
                    />
                    <h3>{article.headline.main}</h3>
                    <p>{article.abstract}</p>
                    <a href={article.web_url} target="_blank" rel="noopener noreferrer">Read more</a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
      
      <Footer />
      <NavDown />
    </div>
  );
};

export default Magazin;
