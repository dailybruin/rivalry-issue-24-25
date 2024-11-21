import React from "react";
import styled from "styled-components";


const Container = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #d5e7f2;
  overflow: hidden;
  position: relative;
  z-index: 1;
`;

const Image = styled.img`
  width: 100vw;
  height: auto;
  object-fit: cover;
`;

const Credits= styled.div`
  background-color: black;
  color: white;
  width: 220%;
  padding: 1em;
  height: 1em;
  font-family: Angkor;
  font-size: 16px;
  font-weight: 400;
  line-height: 28.91px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

`;

const Landing = ({landing, credits}) => {
    
    return (
        <>
            <Container>
                <Image src={landing} alt="Landing image" />
                <Credits>{credits}</Credits> {/*landing.landing_credits*/}
            </Container>
        </>
    );
}
export default Landing;