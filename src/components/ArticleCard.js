import styled from "styled-components";

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
  background: #e1823e;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const BoxContainer = styled("div")`
  // inner, black box container that contains the title
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
  padding: 2% 0;
  position: relative;
  overflow-wrap: break-word;
  word-break: break-word;
  line-height: 22px;

  display: flex;
  width: 182.221px;
  height: 41.807px;
  flex-direction: column;
//   justify-content: center;
  justify-content: flex-start;
  flex-shrink: 0;

  color: #fff;
  text-align: center;
  font-family: Angkor;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  .angkor-regular {
    font-family: "Angkor", serif;
    font-weight: 400;
    font-style: normal;
  }
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
  .angkor-regular {
    font-family: "Angkor", serif;
    font-weight: 400;
    font-style: normal;
  }
`;

const ArticleCard = ({ props }) => {
  return (
    <ArticleContainer>
      <BoxContainer>
          <TitleContainer>{props.article_title}</TitleContainer>
      </BoxContainer>
      <AuthorContainer>{props.article_title}</AuthorContainer>
    </ArticleContainer>
  );
};

// props:
// article_title
// article_url
// article_byline
// article_image
// Idea: for different colors randomize between green, orange, blue, teal, yellow, pink
// for the colors: we are taking it in as a parameter; it will be randomly generated in articleGrid and will be passed into articleCard as a parameter
export default ArticleCard;
