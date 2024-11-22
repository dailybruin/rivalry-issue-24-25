import React from "react";
import styled from "styled-components";
import ArticleCard from "../components/ArticleCard.js";




const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15vw;
  margin: 30vw auto;
  margin-top: 10em;
  margin-bottom: 10em;
  width: 50%;




  @media (max-width: 768px) {
      width: 70%;
      gap: 10vw;
  }
`;








const RightItem = styled.div`
  align-self: flex-end;




  @media (max-width: 768px) {
      align-self: center;
  }
`;




const LeftItem = styled.div`
  align-self: flex-start;




  @media (max-width: 768px) {
      align-self: center;
  }
`;








const ArticleGrid = ({ articles }) => {


  const colors = ["#8dc056", "#e1823e", "#7cc4b2", "#64bfe9", "#d1c704", "#cd9ed1"]




      return (
          <Container>
              {articles.map((article, index) => {
                  const color = colors[index % colors.length];
                   return (
                      <ArticleCard
                          props={article}
                          key={article.id || index}
                          as={index % 2 === 0 ? LeftItem : RightItem}
                      />
                  );
              })}
          </Container>
  );
};




export default ArticleGrid;