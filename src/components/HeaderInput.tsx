import { useEffect, useState } from "react";
import { DatePicker } from "./DatePicker";
import styled from "styled-components";
import { LocationPicker } from "./LocationPicker";
import { TopicPicker } from "./TopicPicker";
import { InputSearch } from "./InputSearch";
import { useNavigate } from "react-router-dom"
import { isEmpty } from "ramda";
type HeaderInputStyleType = {}

const HeaderInputStyle = styled.div<HeaderInputStyleType>`
  display: flex;
  align-items: center;
  > form {
    position: relative;
    border: 4px solid ${props => props.theme.colors.main};
    height: fit-content;
    border-radius: 108px;
    background-color: #fff;

    width: fit-content;
    padding: 0 30px;
    display: flex;

    box-sizing: border-box;
    box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.25);

    > div {
      
      font-family: "Roboto";
      font-style: normal;
      font-weight: bold;
      font-size: 29px;
      line-height: 34px;
      color: #9c9c9c;

      padding: 0 30px;
      text-align: center;
      align-items: center;
      margin: 13px 0;

      :first-child {
        padding-left: 0;
      }
      :not(:first-child) {
        border-left: 2px solid #000;
      }
    }
  }

  button {
    width: 85px;
    height: 85px;
    border-radius: 100%;
    background: #227C36;
    border: 2px solid #FFF2F2;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
    margin-left: 24px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 900;
    font-size: 40px;
    line-height: 48px;
    /* identical to box height */
    color: #FFFFFF;
    -webkit-text-stroke: 2px #000;
    cursor: pointer;

    :hover {
      /* background: #FAFF0E; */
      filter: drop-shadow(0px 0px 15px #FAFF0E);
    }
  }

  @media (max-width: 414px) {
    /* display: flex;
    align-items: center; */
    > form {
      border: 2px solid ${props => props.theme.colors.main};
      padding: 0 15px;
      /* font-size: 13px; */
      /* position: relative;
      border: 4px solid ${props => props.theme.colors.main};
      height: fit-content;
      border-radius: 108px;
      background-color: #fff;

      width: fit-content;
      padding: 0 30px;
      display: flex;

      box-sizing: border-box;
      box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.25); */

      > div {
        font-size: 13px;
        height: 18px;
        line-height: 100%;
        padding: 0 10px;
        margin: 5px 0;
        p {
          line-height: 18px;
        }
        
        /* font-family: "Roboto";
        font-style: normal;
        font-weight: bold;
        font-size: 29px;
        line-height: 34px;
        color: #9c9c9c;

        padding: 0 30px;
        text-align: center;
        align-items: center;
        margin: 13px 0; */

        :first-child {
          /* padding-left: 0; */
        }
        :not(:first-child) {
          /* border-left: 2px solid #000; */
        }
      }
    }

    button {
      width: 45px;
      height: 45px;
      font-size: 20px;
      box-shadow: none;
      -webkit-text-stroke: 1px #000;
      line-height: 45px;
    }
  }
  
`

type HeaderInputProps = {
  // primary?: boolean;
  // label: string;
  trigger?: Function;
}

export const HeaderInput = ({
  // primary = false,
  // label,
  trigger = ()=>{},
  ...props
}: HeaderInputProps) => {

  // const [ displayList, setDisplayList ] = useState<Display[] | []>([])
  // const [ switchSelector, setSwitchSelector ] = useState<string>("idle")
  // useHistory
  const defaultValue = {
    location:"",
    topic:"ScenicSpot",
    query:""
  }

  type apiValueType = {
    location:string,
    topic:string,
    query:string
  }

  const navigate = useNavigate()
  const [ apiValue, setApiValue ] = useState<apiValueType>(defaultValue)

  const handleClickGo = () => {
    // navigate.p
    // console.log(`this is :::${apiQuery('location',apiValue.location)}${apiQuery('topic',apiValue.topic)}${apiQuery('query',apiValue.query)}`)
    trigger((t:boolean) => !t)
    navigate(`/search?${apiQuery('location',apiValue.location)}${apiQuery('topic',apiValue.topic)}${apiQuery('query',apiValue.query)}`)
  }

  // const areaList = []
  // useEffect(()=>{

  // },[])


  return (
    <HeaderInputStyle >
      <form>
        <LocationPicker setApiQuery={setApiValue} />
        <TopicPicker setApiQuery={setApiValue} />
        <DatePicker />
        <InputSearch setApiQuery={setApiValue}/>
      </form>
      <button onClick={handleClickGo}>GO</button>
    </HeaderInputStyle>
  )
}

function apiQuery(type:string, keyword:string) {
  return isEmpty(keyword) ? "" : `${type}=${keyword}&`
}
