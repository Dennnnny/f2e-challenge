import { useRef, useState } from "react";
import styled from "styled-components";
import { map} from "ramda";
import useOutsideClick from "../tool/useOutsideClick";
import { TopicList } from "../tool/configs";
type TopicPickerProps = {
  setApiQuery: Function
}

type TopicPickerStyleProps = {
  readonly open: boolean;
  // defaultValue: string;
}


const TopicPickerStyle = styled.div<TopicPickerStyleProps>`
  position: relative;
  display: flex;

  p {
    width: max-content;
    /* color: #000; */
    /* color: ${(props) => props.defaultValue === "景點" ? "#ccc" : "#000"}; */
  }

  div.topic-picker {
    display: ${(props) => props.open ? 'block' : 'none' };
    position: absolute;
    top: 80px;
    width: 140px;
    padding: 28px;
    border: 3px solid #000;
    border-radius: 20px;
    transform: translateX(-25%);
    text-align: left;
    box-sizing: border-box;
    background-color: #fff;
    box-shadow: 0px 32px 67px #000000;

    :after {
      content:"";
      position: absolute;
      width: 25px;
      height: 25px;
      top: -16px;
      border-top: 3px solid #000;
      border-left: 3px solid #000;
      transform: rotate(45deg);
      background-color: #fff;
      right: 40%;
    }
    span {
      font-size: 23px;
      margin-top: 24px;
    }
    ul {
      display: grid;
      flex-wrap: wrap;
      justify-content: center;
      gap: 16px;
      list-style: none;
      font-size: 29px;
      li {
        font-family: "Roboto";
        font-style: normal;
        font-weight: bold;
        color: #000;
        /* padding: 15px 20px 15px 0; */
        cursor: pointer;
        :last-child {
          /* padding-bottom: 25px; */
        }
        :hover {
          color: #FEA6A2;
        }
        /* text-decoration: none; */
      }
    }
  }

  @media (max-width: 414px) {
    div.topic-picker {
      display: ${(props) => props.open ? 'block' : 'none' };
      position: absolute;
      top: 40px;
      width: 60px;
      padding: 12px 8px;
      border: 3px solid #000;
      border-radius: 10px;
      transform: translateX(-25%);
      text-align: left;
      box-sizing: border-box;
      background-color: #fff;
      box-shadow: 0px 12px 60px #00000070;

      :after {
        content:"";
        position: absolute;
        width: 13px;
        height: 13px;
        top: -10px;
        border-top: 3px solid #000;
        border-left: 3px solid #000;
        transform: rotate(45deg);
        background-color: #fff;
        right: 35%;
      }
      span {
        font-size: 23px;
        margin-top: 24px;
      }
      ul {
        display: grid;
        flex-wrap: wrap;
        justify-content: center;
        gap: 16px;
        list-style: none;
        font-size: 15px;
        li {
          font-family: "Roboto";
          font-style: normal;
          font-weight: bold;
          color: #000;
          /* padding: 15px 20px 15px 0; */
          cursor: pointer;
          :last-child {
            /* padding-bottom: 25px; */
          }
          :hover {
            color: #FEA6A2;
          }
          /* text-decoration: none; */
        }
      }
    }
  }
`

export const TopicPicker = ({
  // type,
  setApiQuery,
  ...props
}: TopicPickerProps) => {

  const [ value, setValue ] = useState<string>("景點")
  const [ open, setOpen ] = useState<boolean>(false)
  const topicRef = useRef<HTMLDivElement | null>(null)
  useOutsideClick(topicRef,() => setOpen(false))

  const handleClickPicker = () => {
    setOpen(t => !t)
  }

  const handleChooseTopic = (data:{displayName:string, value: string}) => {
    setValue(data.displayName)
    setApiQuery((prev:object) => ({...prev,topic:data.value}))
    setOpen(false)
  }

  return (
    <TopicPickerStyle open={open} ref={topicRef}>
      <p onClick={handleClickPicker}>{value}</p>
      <div className="topic-picker">
        <ul>
        {map((topic:{displayName:string,value:string}) => (
          <li key={topic.value} onClick={()=>handleChooseTopic(topic)}>{topic.displayName}</li>
          ))(TopicList)}
        </ul>
      </div>
    </TopicPickerStyle>
  )

}