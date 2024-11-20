import styled from "styled-components";

import DBLogo from "../images/DailyBruinLogo.svg";

const DBHeader = styled("div")`
  z-index: 2001;

  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background: black;
  width: 100%;
  padding: 0.2em 0;
  color: white;
  font-family: "ITC Century";
  font-style: normal;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  font-size: 8px;
  line-height: 30px;
  /* border-bottom: 2px solid black; */

  a {
    text-decoration: none;
  }

  h1 {
    background: linear-gradient(
      90deg,
      #dd3d2e 0%,
      #83be57 22%,
      #5d529f 44%,
      #e4823a 59.5%,
      #64bfe9 80.5%,
      #f4ec53 100%
    );
    width: 108px;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    margin: 0 auto;
  }
`;

const Header = () => {
  return (
    <DBHeader>
      {/* Daily Bruin */}
      <a href="https://dailybruin.com">
        {/*<img src={DBLogo} alt="Daily Bruin" /> */}
        <h1>DAILY BRUIN</h1>
      </a>
    </DBHeader>
  );
};

export default Header;
