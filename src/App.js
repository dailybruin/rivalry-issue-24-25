import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header';
import styled from 'styled-components';
import background from './images/background.png';
import Footer from './components/Footer';
import ArticleGrid from "./components/ArticleGrid"

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


  return data && (
    <div className="App">
      <Background>
      <Header />
      Hello Daily Bruin!
      <ArticleGrid articles={data.articles} />
      <Footer />
      </Background>
    </div>
    
  );
}

export default App;


