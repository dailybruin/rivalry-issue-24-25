import fb from "../images/socials/fb.svg";
import insta from "../images/socials/insta.svg";
import twitter from "../images/socials/twitter.svg";
import tiktok from "../images/socials/tiktok.svg";
import email from "../images/socials/email.svg";

import styled from "styled-components";
import { mediaQueries } from "../shared/config";

const Container = styled.div`
  background-color: black;
  height: auto;
  color: #7dc3b5;
  padding: 60px 0 10px 0;
  text-align: center;
  h1 {
    margin: 0;
    font-family: "Times New Roman", Times, serif;
    font-size: 30px;
  }

  .heart {
    color: red;
  }
  /* margin-bottom: 20px; */
`;

const Socials = styled.div`
  position: relative;
  margin-top: 20px;

  img {
    position: relative;
    margin: 0 20px;
  }
  p {
    position: relative;
    margin: 80px 20px;
    ${mediaQueries.mobile} {
      margin: 50px 20px;
    }
  }
`;

const Footer = () => {
  return (
    <Container>
      <h1>DAILY BRUIN</h1>
      <Socials>
        <a
          href="https://www.instagram.com/dailybruin"
          target="_blank"
          rel="noreferrer"
        >
          <img src={insta} alt="" />
        </a>
        <a
          href="https://www.facebook.com/dailybruin"
          target="_blank"
          rel="noreferrer"
        >
          <img src={fb} alt="" />
        </a>
        <a
          href="https://www.twitter.com/dailybruin"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="" />
        </a>
        <a
          href="https://www.tiktok.com/@dailybruin"
          target="_blank"
          rel="noreferrer"
        >
          <img src={tiktok} alt="" />
        </a>
        <a href="http://eepurl.com/cFEiZX" target="_blank" rel="noreferrer">
          <img src={email} alt="" />
        </a>
        <p>
          Built with Suzy’s <span className="heart">♥</span> in Kerckhoff 118 by Emily Zhang,  Kirsten Reign Cabalonga, Sahil Sheth, Evelyn Cho, Armaan Bassi, Jennifer Lee, Henry Nguyen, Max Fukuhara, Ritvik Irigireddy, and Sakshi Thoutireddy. Designed by Lindsey Murto.
        </p>
      </Socials>
    </Container>
  );
};

export default Footer;
