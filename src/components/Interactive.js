import React from "react";
import styled from "styled-components";
import UCLA from "../images/ucla-travel-ig2.mp4";
import USC from "../images/usc-travel-ig2.mp4";



const Container = styled.div`
  width: 80%;
  padding-bottom: 80em;
 
  gap: 5em;
  display: flex;
  margin-left: 5em;
  @media (max-width: 1000px) {
    flex-direction: column; 
    margin-left: 2em;
    padding-bottom: 40em;
  }

`;


const Title = styled("div")`
  position: relative;
  line-height: 22px;
  display: flex;
  width: 100%;
  text-align: center;
  font-family: Angkor;
  color: white;
  font-size: 40px; /* updated for desktop size */
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  @media (max-width: 1000px) {
    padding: 5% 0% 0% 0%;
    margin-bottom: 5em;
    font-size: 20px;
    height: 41.807px;
    flex-direction: column;
    width: 50%;
    margin-left: 25%;
  }
`;

const Blurb = styled.div`
    gap: 0px;
    margin-left: 15%;
    width: 50%;
    opacity: 0px;
    font-family: Angkor;
    font-size: 22px;
    font-weight: 400;
    line-height: 39.75px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #8DC056;
    padding: 2em;
    padding-top: 3em;
`

const Box1 = styled.div`
    width: 100%;
    height: 30em;
    border: 15px 0px 0px 0px;
    opacity: 0px;
    background: #000000;
    border: 15px solid #63BEEB;
    @media (max-width: 800px) {
        width: 100%;
        height: 30em;
      }

`

const Box2 = styled.div`
    width: 100%;
    height: 30em;
    border: 15px 0px 0px 0px;
    opacity: 0px;
    background: #000000;
    border: 15px solid #5D529F;
    @media (max-width: 800px) {
        width: 100%;
        height: 30em;
      }
`


const Interactive = () => {
    
    return (
        <>
            
                <Title>Long Roads Home: Breaking down UCLA and USC’s first Big Ten travels</Title>
                <Blurb>Both UCLA football and USC embarked on their inaugural seasons in the Big Ten this season – a conference realignment that accompanied new rivals as well as dramatic logistical differences. By season’s end, the Bruins will have traveled a Big Ten-high 22,048 miles and the Trojans 12,710 miles. These videos track the teams’ travels across the country throughout the season, offering a visual breakdown of the total miles racked up on UCLA and USC’s way to compete against some of the nation’s toughest opponents.</Blurb>
                <Container>
                <Box1>
                <iframe width="100%" height="100%" src={USC} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="width: 100%; height: 100%; border: none;"></iframe>
                </Box1>
                <Box2>
                <iframe width="100%" height="100%" src={UCLA} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="width: 100%; height: 100%; border: none;"></iframe>

                </Box2>
                </Container>
        </>
    );
}
export default Interactive;