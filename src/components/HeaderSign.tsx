import styled from "styled-components";

type HeaderSignStyleType = {
  secondary?: boolean
}

const HeaderSignStyle = styled.div<HeaderSignStyleType>`

  display: ${({secondary}) => secondary ? "none" : "block"};

  width: 112px;
  height: 392px;
  overflow: hidden;
  position: relative;
  background-color: #C4C4C4;

  .decoration_top {
    width: 100px;
    height: 380px;
    border: 6px solid #353956;
    position: relative;
  }

  .decoration_bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
  }

  p {
    line-height: 1.35em;
    margin: 0;
    font-size: 48px;
    font-weight: bold;
    -webkit-text-stroke: 1px #FFE7E6;
    color: #FFE7E6;
    filter: 
      drop-shadow(0 2px 0.35px #353956)
      drop-shadow(0 0 0.35px #353956) 
      drop-shadow(0 0 0.35px #353956) 
      drop-shadow(0 0 0.35px #353956) 
      drop-shadow(0 0 0.35px #353956) 
      drop-shadow(0 0 0.35px #353956) 
      drop-shadow(0 0 0.35px #353956) 
      drop-shadow(0 0 0.35px #353956) 
      drop-shadow(0 0 0.35px #353956) 
      drop-shadow(0 0 0.35px #353956) 
      drop-shadow(0 0 0.35px #353956) 
      drop-shadow(0 0 0.35px #353956) 
      drop-shadow(0 1px 0.35px #353956);
  }

  .decoration_top::after{
    content: "";
    border: 6px solid #353956;
    width: 50px;
    height: 50px;
    position: absolute;
    top: -4px;
    left: -4px;
    border-radius:100%;
    transform: translate(-50%,-50%);
    background: #FFE7E6;
  }

  .decoration_top::before{
    content: "";
    border: 6px solid #353956;
    width: 50px;
    height: 50px;
    position: absolute;
    top: -4px;
    right: -4px;
    border-radius:100%;
    transform: translate(50%,-50%);
    background: #FFE7E6;
  }

  .decoration_bottom::before {
    content: "";
    border: 6px solid #353956;
    width: 50px;
    height: 50px;
    position: absolute;
    bottom: -4px;
    right: -4px;
    border-radius:100%;
    transform: translate(50%,50%);
    overflow: hidden;
    background: #FFE7E6;
  }

  .decoration_bottom::after {
    content: "";
    border: 6px solid #353956;
    width: 50px;
    height: 50px;
    position: absolute;
    bottom: -4px;
    left: -4px;
    border-radius:100%;
    transform: translate(-50%,50%);
    background: #FFE7E6;
  }

  @media (max-width: 414px) {
    /* background-color: red; */
    width: 35px;
    height: 115px;

    overflow: hidden;
    position: relative;
    background-color: #C4C4C4;
    .decoration_top {
      width: 100%;
      height: 100%;
      border: 3px solid #353956;
      position: relative;
      box-sizing: border-box;
    }

    .decoration_bottom {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px 12px;
      box-sizing: border-box;
    }

    p {
      line-height: 1.35em;
      margin: 0;
      font-size: 15px;
      font-weight: bold;
      -webkit-text-stroke: 1px #FFE7E6;
      color: #FFE7E6;
      filter: 
        drop-shadow(0 2px 0.35px #353956)
        drop-shadow(0 0 0.35px #353956) 
        drop-shadow(0 0 0.35px #353956) 
        drop-shadow(0 0 0.35px #353956) 
        drop-shadow(0 0 0.35px #353956) 
        drop-shadow(0 0 0.35px #353956) 
        drop-shadow(0 0 0.35px #353956);
    }

    .decoration_top::after{
      content: "";
      border: 3px solid #353956;
      width: 16px;
      height: 16px;
      position: absolute;
      top: -4px;
      left: -4px;
      border-radius:100%;
      transform: translate(-50%,-50%);
      background: #FFE7E6;
    }

    .decoration_top::before{
      content: "";
      border: 3px solid #353956;
      width: 16px;
      height: 16px;
      position: absolute;
      top: -4px;
      right: -4px;
      border-radius:100%;
      transform: translate(50%,-50%);
      background: #FFE7E6;
    }

    .decoration_bottom::before {
      content: "";
      border: 3px solid #353956;
      width: 16px;
      height: 16px;
      position: absolute;
      bottom: -4px;
      right: -4px;
      border-radius:100%;
      transform: translate(50%,50%);
      overflow: hidden;
      background: #FFE7E6;
    }

    .decoration_bottom::after {
      content: "";
      border: 3px solid #353956;
      width: 16px;
      height: 16px;
      position: absolute;
      bottom: -4px;
      left: -4px;
      border-radius:100%;
      transform: translate(-50%,50%);
      background: #FFE7E6;
    }
  }

`

type HeaderSignProps = {
  label: string;
  secondary?: boolean
  // onClick?: () => void;
}

export const HeaderSign = ({
  label,
  secondary,
  ...props
}: HeaderSignProps) => {
  return (
    <HeaderSignStyle secondary={secondary}>
      <div className="decoration_top">
        <div className="decoration_bottom">
          <p>
            {label}
          </p>
        </div>
      </div>
    </HeaderSignStyle>
  )
}
