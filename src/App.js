import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ArticleCard from "./components/ArticleCard";

function App() {
  const [data, setData] = useState(null);
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/rivalry-issue-24-25")
      .then(res => res.json())
      .then(res => setData(res.data['article.aml'])); // Load "article.aml" from API
  }, []);
    fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/rivalry-issue-24-25")
      .then(res => res.json())
      .then(res => setData(res.data['article.aml'])); // Load "article.aml" from API
  }, []);

  return (
  return (
    <div className="App">
      <Header />
      <Header />
      Hello Daily Bruin!
      <Footer />
      {/* TO TEST OUT THE ARTICLECARD COMPONENT */}
      {data && data.articles.map((article, index) => (
        <ArticleCard 
          index={index}
          props={article} // Pass the entire article object as `props`
        />
      ))}
    </div>
  );
}

export default App;
