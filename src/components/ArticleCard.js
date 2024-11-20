import React from "react";
import styled from "styled-components";




const colorSequence = [
"#8DC056",
"#E1823E;",
"#7CC4B2",
"#63BEEB",
"#D1C704",
"#CE9FD1",
];

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

const ArticleCard = ({ props, index }) => {
  const bgColor = colorSequence[index % colorSequence.length]; // Cycle through colors in sequence
  const articleImage = imageSequence[index % imageSequence.length] // Cycle through images in a sequence
  return (
    <ArticleContainer bgColor={bgColor}>
      <BoxContainer>
        <TitleContainer>{props.article_title}</TitleContainer>
        <img src = {articleImage} alt = "Article Image" />
      </BoxContainer>
      <AuthorContainer>{props.article_byline}</AuthorContainer>
    </ArticleContainer>
  );
};




export default ArticleCard;