import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header';
import styled from 'styled-components';
import background from './images/background.png';
import Footer from './components/Footer';
import ArticleCard from "./components/ArticleCard";

function App() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/rivalry-issue-24-25")
      .then(res => res.json())
      .then(res => setData(res.data['article.aml'])); // Load "article.aml" from API
  }, []);

  const Background = styled.div`
  position: relative;
  width: 100%;
  height: fit-content; /* Change to auto or fit-content if you build cards to expand down */
  background: 
    url(${background}) no-repeat center, /* Top layer background */
    #000000; /* Black fallback background */
  background-size: cover; /* Ensures the image covers the container */
  `;


  return (
    <div className="App">
      <Background>
      <Header />
      Hello Daily Bruin!
      {/* TO TEST OUT THE ARTICLECARD COMPONENT */}
      {data && data.articles.map((article, index) => (
        <ArticleCard 
          index={index}
          props={article} // Pass the entire article object as `props`
        />
      ))}
      </Background>  
      <Footer />
    </div>
    
  );
}

export default App;