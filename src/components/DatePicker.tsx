import { useRef, useState } from "react";
import styled from "styled-components";
import { map, keys, values, compose, path, isEmpty, isNil } from "ramda";
import useOutsideClick from "../tool/useOutsideClick";
import Datepicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/colors/yellow.css"

type DatePickerProps = {
}

type DatePickerStyleProps = {
  readonly open: boolean;
}


const DatePickerStyle = styled.div<DatePickerStyleProps>`
  height: 36px;
  .custom-calendar {
    border: 3px solid #000;
    border-radius: 20px;
    box-shadow: 0px 32px 67px #000000;
    > :after {
      content:"";
      position: absolute;
      width: 20px;
      height: 20px;
      top: -11px;
      border-top: 3px solid #000;
      border-left: 3px solid #000;
      transform: rotate(45deg);
      background-color: #fff;
      right: 45%;
    }
  }
  .ep-arrow {
    display: none;
  }

  p {
    width: max-content;
  }
  
`

function pickDate (day1:string, day2:string) {
  // if(isEmpty(day1) || isEmpty(day2)) return

  return `${day1.split("/").splice(1,2).join("/")}${!isEmpty(day2) ? '~' : ''}${day2.split("/").splice(1,2).join("/")}`
}

export const DatePicker = ({
  // type,
  ...props
}: DatePickerProps) => {

  // const [ value, setValue ] = useState<string>("景點")
  const [ open, setOpen ] = useState<boolean>(false)
  const topicRef = useRef<HTMLDivElement | null>(null)
  useOutsideClick(topicRef,() => setOpen(false))


  // const handleClickPicker = () => {
  //   setOpen(t => !t)
  // }

  // const handleChooseDate = (value:string) => {
  //   // setValue(value)
  //   setOpen(false)
  // }

  return (
    <DatePickerStyle open={open} ref={topicRef}>
      <Datepicker 
        range
        className="custom-calendar yellow"
        calendarPosition="bottom"
        fixMainPosition={true}
        fixRelativePosition={true}
        offsetY={30}
        render={(value:[_:string,_:string ], openCalendar:Function) => {

          const fromDate = value[0] || ""
          const toDate = value[1] || ""
        
          let newValue = pickDate(fromDate,toDate)

          return (
            <p  onClick={() => openCalendar()}>
              {isNil(value[0]) ? "日期" : (newValue) }
            </p>
          )
        }}
      />
    </DatePickerStyle>
  )

}