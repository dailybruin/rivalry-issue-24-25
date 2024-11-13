import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ArticleGrid from "./components/ArticleGrid"

function App() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/rivalry-issue-24-25")
      .then(res => res.json())
      .then(res => setData(res.data['article.aml'])); // Load "article.aml" from API
  }, []);

  return (
    <div className="App">
      <Header />
      Hello Daily Bruin!
      <Footer/>
      <ArticleGrid />

    </div>
  );
}

export default App;
