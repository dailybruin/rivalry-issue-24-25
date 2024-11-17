import styled from "styled-components";

const ArticleContainer = styled("div")` // outermost container
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 5%;
  margin: 2%;
  max-width: 100%;

  width: 212.199px;
  height: 305.061px;
  flex-shrink: 0;
  background: #E1823E;
  transition: box-shadow 0.3s ease-in-out; /* smooth transition for hover effect */


  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  &:hover {
    box-shadow: 0 0 30px 15px rgba(0, 0, 0, 0.4); /* More noticeable shadow blur */
  }
`;

const BoxContainer = styled("div")` // inner, black box container that contains the title
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
  .angkor-regular {
    font-family: "Angkor", serif;
    font-weight: 400;
    font-style: normal;
  }
`;

const AuthorContainer = styled("div")`
  
`;

const ArticleCard = ({ props }) => {
  return (
    <ArticleContainer >
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <BoxContainer>
            <TitleContainer>{props.article_title}</TitleContainer>
        </BoxContainer>
      </div>
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