// NewsViewer.jsx

import React, { useEffect, useState } from 'react';
import { useAuth } from '../store/auth';
import './NewsViewer.css'; // Import styles for NewsViewer component

export const NewsViewer = () => {
  const [newsData, setNewsData] = useState([]);
  const { authorizationToken } = useAuth();

  useEffect(() => {
    // Fetch news data from MongoDB
    async function fetchNewsData() {
      try {
        const response = await fetch('http://localhost:5000/api/admin/viewnews', {
          method: 'GET',
          headers: {
            Authorization: authorizationToken,
          },
        });
        const data = await response.json();
        setNewsData(data);
      } catch (error) {
        console.error('Error fetching news data:', error);
      }
    }

    fetchNewsData();
  }, [authorizationToken]); // Make sure to include authorizationToken in the dependency array

  return (
    <div className="news-viewer">
      <h2>News Viewer</h2>
      <div className="news-cards-container">
        {/* Display news data in separate card views */}
        {newsData.map((news, index) => (
          <div key={index} className="news-card">
            <h3>{news.headline}</h3>
            <p>{news.date}</p>
            <p>{news.location}</p>
            <p>{news.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
