import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useArticles } from '../contexts/ArticlesContext';

const ArticlesCategory = () => {
  const { articles } = useArticles();
  const [uniqueCategories, setUniqueCategories] = useState([]);

  useEffect(() => {
    const uniqueCategoriesArray = [];

    articles.forEach((article) => {
      if (!uniqueCategoriesArray.includes(article.category)) {
        uniqueCategoriesArray.push(article.category);
      }
    });
    setUniqueCategories(uniqueCategoriesArray);
  }, [articles]);

  return (
    <ul>
      {uniqueCategories.map((category) => (
        <li key={category}>
          <Link to={`/category${category}`}>
            {category} - <span>20 Post</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ArticlesCategory;