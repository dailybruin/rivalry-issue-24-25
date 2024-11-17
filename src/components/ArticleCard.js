import React from "react";
import styled from "styled-components";

const colors = ["#28a745", "#E1823E", "#007BFF", "#20c997", "#ffc107", "#ff66cc"]; 

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const ArticleContainer = styled("div")`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 5%;
  margin: 2%;
  max-width: 100%;

  width: 212.199px;
  height: 305.061px;
  flex-shrink: 0;
  background: ${(props) => props.bgColor}; /* random background color passed as prop */
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0 30px 15px rgba(0, 0, 0, 0.4); /* blurred shadow effect */
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const BoxContainer = styled("div")`
  position: relative;
  display: flex;
  flex-direction: row;
  max-width: 100%;
  width: 183.748px;
  height: 234.723px;
  flex-shrink: 0;
  background: #000;
  margin: 14.2px 13.8px 56.5px 13.8px;
`;

const TitleContainer = styled("div")`
  margin-top: 2em;
  position: relative;
  overflow-wrap: break-word;
  word-break: break-word;
  line-height: 22px;
  display: flex;
  width: 182.221px;
  height: 41.807px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #FFF;
  text-align: center;
  font-family: Angkor;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ArticleCard = ({ props }) => {
  const randomColor = getRandomColor(); // Get random color for the background
  return (
    <ArticleContainer bgColor={randomColor}>
      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <BoxContainer>
          <TitleContainer>{props.article_title}</TitleContainer>
        </BoxContainer>
      </div>
    </ArticleContainer>
  );
};

export default ArticleCard;
