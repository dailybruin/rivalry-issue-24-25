import React from "react";
import styled from "styled-components";





const ArticleContainer = styled("div")`
  // outermost container
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 3%;
  max-width: 100%;
  width: 420.14px; /* updated for desktop size from 212.199px for mobile */
  min-height: 604px; /* updated for desktop size */
  height: auto;
  flex-shrink: 0;
  background: ${(props) =>
    props.bgColor}; /* random background color passed as prop */
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow:
    //  0 0 20px 15px rgba(255, 255, 255, 0.3),
      0 0 12px 10px ${(props) => props.bgColor};
  }
  @media (max-width: 900px) {
    max-width: 100%;
    width: 212.199px;
    min-height: 305.061px;
    height: auto;
    flex-direction: column;
    align-items: center;
    text-align: center;
    &:hover {
      box-shadow: 0 0 7px 7.5px ${(props) => props.bgColor};
    }
  }
`;





const BoxContainer = styled("div")`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  flex-grow: 1;
  width: 363.808px; /* updated for desktop size */
  min-height: 464.736px; /* updated for desktop size */
  height: auto;
  flex-shrink: 0;
  background: #000;
  margin: 27.38px 111.8px 28.17px 28.17px;
  img {
    position: absolute /* to allow overlap */
    top: 10%
    left: 50%
    transform: translate(-50%, -10%)
    width: 90%
    height: auto; 
    object-fit: cover
  
  }
  @media (max-width: 900px) {
    width: 183.748px;
    min-height: 234.723px;
    height: auto;
    flex-shrink: 0;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 14.2px 13.8px 0px 13.8px;
    img {
      width: 95% /* scaling for mobile */
    }
  }
`;




const TitleContainer = styled("div")`
  position: relative;
  overflow-wrap: break-word;
  word-break: break-word;
  line-height: 22px;
  display: flex;
  padding: 5% 0% 0% 5%;
  margin-bottom: 20px;
  width: 323px; /* updated for desktop size */
  height: 41.807px; /* updated for desktop size */
  flex-direction: column;
  //   justify-content: center;
  justify-content: flex-start;
  flex-shrink: 0;
  color: #fff;
  color: #fff;
  text-align: center;
  font-family: Angkor;
  font-size: 22px; /* updated for desktop size */
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  @media (max-width: 900px) {
    padding: 5% 0% 0% 0%;
    margin-bottom: 10px;
    font-size: 12px;
    height: 41.807px;
    flex-direction: column;
    width: 170.221px;
  }
`;




const AuthorContainer = styled("div")`
  padding: 0% 0% 4% 7%; // to center the author container
  position: relative;
  overflow-wrap: break-word;
  word-break: break-word;
  line-height: normal;
  margin-top: -10px;
  display: flex;
  width: 364px; /* updated for desktop size */
  min-height: 78px; /* updated for desktop size */
  height: auto;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  color: #000;
  text-align: center;
  font-family: "Alumni Sans";
  font-size: 30px; /* updated for desktop size */
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  .angkor-regular {
    font-family: "Angkor", serif;
    font-weight: 400;
    font-style: normal;
  }
  @media (max-width: 900px) {
    padding: 0 5%; // to center the author container
    font-size: 20px;
    font-style: normal;
    margin-top: 0px;
    font-weight: 500;
    line-height: normal;
    width: 183.748px;
    min-height: 41.887px;
    height: auto;
    display: flex;
    width: 183.748px;
    min-height: 41.887px;
    height: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
`;




const ArticleCard = ({ props, bgColor, as, articleCardImage}) => {

return (
  
  <ArticleContainer as={as} bgColor={bgColor}>

    <BoxContainer>
      <TitleContainer>{props.article_title}</TitleContainer>
      <img src = {articleCardImage} alt = "Article Image" />
    </BoxContainer>
    <AuthorContainer>{props.article_byline}</AuthorContainer>

  </ArticleContainer>
);
};




export default ArticleCard;