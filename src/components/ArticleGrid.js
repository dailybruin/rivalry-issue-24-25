import React from "react";
import styled from "styled-components";
import ArticleCard from "../components/ArticleCard.js";




const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15vw;
  margin: 30vw auto;
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
  const imageSequence = [
    "https://assets3.dailybruin.com/images/rivalry-issue-24-25/TJ-harden-bf449f4a94d9657a33589fe85f34cef5.jpg",
    "https://assets3.dailybruin.com/images/rivalry-issue-24-25/Me-drano-f8453ed981aeb1b9883d57d56ec9f6f6.jpg",
    "https://assets3.dailybruin.com/images/rivalry-issue-24-25/Ga-rbers-b07660ab2f33233ec8731f7fd68894c6.jpg",
    "https://assets3.dailybruin.com/images/rivalry-issue-24-25/Sch-wes-b8551966a2621d5a2743f00bf90e119d.jpg",
    "https://assets3.dailybruin.com/images/rivalry-issue-24-25/Keegan-Jones-cc6e7aaeb4363b4768b4f7acabee4ee8.jpg",
    "https://assets3.dailybruin.com/images/rivalry-issue-24-25/deshaun-1ad40b99ce6a8c4593ba62dfd955e88e.jpg",
    "https://assets3.dailybruin.com/images/rivalry-issue-24-25/Lo-ya-dee3d5f0ba95a0b2746ef77f166b66e8.jpg",
    "https://assets3.dailybruin.com/images/rivalry-issue-24-25/Mat-avao-bb4076d7f212dbef28b07a60164a8654.jpg",
    "https://assets3.dailybruin.com/images/rivalry-issue-24-25/Fe-mi-6ce857dabfe4293cb83b40d38ab840b1.jpg",
  ];




      return (
          <Container>
              {articles.map((article, index) => {
                  const color = colors[index % colors.length];
                  const articleImage = imageSequence[index % imageSequence.length] // Cycle through images in a sequence
                   return (
                      <ArticleCard
                          props={article}
                          key={article.id || index}
                          as={index % 2 === 0 ? LeftItem : RightItem}
                          bgColor={color}
                          articleCardImage={articleImage}
                      />
                  );
              })}
          </Container>
  );
};




export default ArticleGrid;