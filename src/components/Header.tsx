import { useNavigate } from "react-router";
import styled from "styled-components";
import { HeaderInput } from "./HeaderInput";
import { HeaderSign } from "./HeaderSign";

type HeaderStyleType = {
  secondary: boolean
}

const HeaderStyle = styled.div<HeaderStyleType>`
  padding: ${({secondary}) => secondary ? "12px" : "80px"};
  background-color: #FFE7E6;
  display: flex;
  flex-direction: ${({secondary}) => secondary ? "row" : "column"};
  align-items: ${({secondary}) => secondary ? "start" : "center"};
  justify-content: ${({secondary}) => secondary ? "space-between" : "center"};
  position: relative;
  z-index: 20;

  .header-banner {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      margin: ${({secondary}) => secondary ? "0" : "0 80px"};
      width: ${({secondary}) => secondary ? "180px" : "400px"};
    }
  }

  .header-input {
    margin-top: 36px;
    transform: translateX(5%);
  }

  @media (max-width: 414px) {
    padding: 20px;
    .header-banner {
      img {
        display: ${({secondary}) => secondary ? "none" : "block"};
        width: 140px;
        height: 130px;
        margin: ${({secondary}) => secondary ? "0" : "0 20px"};
      }
    }

    .header-input {
      margin: 12px 0;

    }
    /* background-color: red; */
  }
`

type HeaderProps = {
  secondary?: boolean;
  trigger?: Function;
  // label: string;
  // onClick?: () => void;
}


export const Header = ({
  secondary = false,
  trigger = ()=>{},
  // label,
  ...props
}: HeaderProps) => {
  const navigate = useNavigate()
  const handleClickLogo = () => {
    navigate("/")
  }

  return (
    <HeaderStyle secondary={secondary}>
      <div className="header-banner">
        <HeaderSign label="欸來欸好玩" secondary={secondary} />
        <img alt="logo" src="/taiwan.png" onClick={handleClickLogo} />
        <HeaderSign label="呆丸最好玩" secondary={secondary} />
      </div>

      <div className="header-input">
        <HeaderInput trigger={trigger} />
      </div>

      {secondary && <div style={{width:"180px"}}/>}
    </HeaderStyle>
  )
}
