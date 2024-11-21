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




const ArticleContainer = styled("div")`
// outermost container
position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;
margin: 3%;
max-width: 100%;
width: 212.199px;
min-height: 305.061px;
height: auto;
flex-shrink: 0;
a {
  text-decoration: none;
  color: inherit; 
}
background: ${(props) =>
  props.bgColor}; /* random background color passed as prop */
transition: box-shadow 0.3s ease-in-out;




&:hover {
  box-shadow:
  //  0 0 20px 7.5px rgba(255, 255, 255, 0.3),
    0 0 20px 7.5px ${(props) => props.bgColor};
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
flex-direction: column;
max-width: 100%;
flex-grow: 1;




width: 183.748px;
height: 234.723px;
flex-shrink: 0;
background: #000;
margin: 14.2px 13.8px 0px 13.8px;
`;




const TitleContainer = styled("div")`




position: relative;
overflow-wrap: break-word;
word-break: break-word;
line-height: 22px;
display: flex;




//no text padding in the title for mobile
padding: 5% 0% 0% 5%;
width: 162.221px;




//if they would like text padding in the title:
// padding: 2% 0;
// width: 182.221px;




height: 41.807px;
flex-direction: column;
//   justify-content: center;
justify-content: flex-start;
flex-shrink: 0;
color: #fff;
color: #fff;
text-align: center;
font-family: Angkor;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-transform: uppercase;
`;




const AuthorContainer = styled("div")`
padding: 0 5%; // to center the author container
position: relative;
overflow-wrap: break-word;
word-break: break-word;
line-height: 24px;
display: flex;
width: 183.748px;
min-height: 41.887px;
height: auto;
flex-direction: column;
align-items: center;
justify-content: center;
flex-shrink: 0;
color: #000;
text-align: center;
font-family: "Alumni Sans";
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: normal;
text-transform: uppercase;
.angkor-regular {
  font-family: "Angkor", serif;
  font-weight: 400;
  font-style: normal;
}
`;




const ArticleCard = ({ props, bgColor, as }) => {
return (
  
  <ArticleContainer as={as} bgColor={bgColor}>
    <a href={props.article_url} >
    <BoxContainer>
      <TitleContainer>{props.article_title}</TitleContainer>
    </BoxContainer>
    <AuthorContainer>{props.article_byline}</AuthorContainer>
    </a>
  </ArticleContainer>
);
};




export default ArticleCard;