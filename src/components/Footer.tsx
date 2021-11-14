import styled from "styled-components";
import { BsArrowUp } from "react-icons/bs";
type FooterStyleType = {}

const FooterStyle = styled.footer<FooterStyleType>`
  width: 100%;
  height: 150px;
  background-color: #FEA6A2;
  position: relative;
  z-index: 11;
  
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  /* padding: 8px; */
  p {
    /* padding: 20px; */
    margin: 4px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 34px;
    color: #9c9c9c;
  }

  svg.top {
    border: 3px solid #000;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    background-color: #97CAE1;
    box-sizing: border-box;
    position: absolute;
    top: -150px;
    right: 30px;
    box-shadow: 0px 12px 5px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }

  @media (max-width: 414px) {
    height: 100px;
    p {
      font-size: 13px;
      line-height: 23px;
    }
    svg.top {
      border: 2px solid #000;
      width: 50px;
      height: 50px;
      border-radius: 100%;
      background-color: #97CAE1;
      box-sizing: border-box;
      position: absolute;
      top: -60px;
      right: 20px;
      box-shadow: 0px 12px 5px rgba(0, 0, 0, 0.25);
      cursor: pointer;
    }
  }
`

export const Footer = () => {

  const handleClick = () => {
    window.scroll(0,0)
  }

  return (
    <FooterStyle >
      <BsArrowUp className="top" onClick={handleClick} />
      <p>
        設計師：詩詩小姐
      </p>
      <p>
        工程師：Denny
      </p>
    </FooterStyle>
  )
}
