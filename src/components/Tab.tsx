import styled from "styled-components"
import { Link } from "react-router-dom"

type TabStyleType = {
  active: boolean
}

const TabStyle = styled(Link)<TabStyleType>`
  margin: 6px;
  padding: 12px 50px;
  border: 3px solid #000000;
  color: ${({active}) => active ? "#fff" : "#000"};
  background-color: ${({active}) => active ? "#51BD5C" : "#fff"};
  box-sizing: border-box;
  border-radius: 20px 20px 0px 0px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 29px;

  text-decoration: none;

  @media (max-width: 414px) {
    padding: 4px 15px;
    font-size: 12px;
    line-height: 14px;
    border: 2px solid #000000;
    border-radius: 12px 12px 0px 0px;
  }
`

type TabType = {
  name: string,
  value: string,
  active: boolean,
  trigger: Function,
  location: string,
  query: string
}

export const Tab = ({
  name,
  active,
  value,
  trigger,
  location,
  query,
  ...props
}:TabType) => {
  return (
    <TabStyle to={`/search/?location=${location}&topic=${value}&query=${query}`} active={active} onClick={() => trigger((t:boolean) => !t)}>
      {name}
    </TabStyle>
  )
}