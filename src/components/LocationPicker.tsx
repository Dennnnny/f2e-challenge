import React, { Fragment, useRef, useState } from "react";
import styled from "styled-components";
import { map, keys } from "ramda";
import useOutsideClick from "../tool/useOutsideClick"
type LocationPickerProps = {
  setApiQuery: Function
}

type LocationPickerStyleProps = {
  readonly open: boolean;
  // defaultValue: string;
}


const LocationPickerStyle = styled.div<LocationPickerStyleProps>`
  position: relative;
  display: flex;
  z-index: 5;
  p {
    width: max-content;
  }

  div.location-picker {
    display: ${(props) => props.open ? 'block' : 'none' };
    position: absolute;
    top: 80px;
    width: 600px;
    padding: 28px;
    border: 3px solid #000;
    border-radius: 20px;
    transform: translateX(-50%);
    text-align: left;
    box-sizing: border-box;
    background-color: #fff;
    box-shadow: 0px 32px 67px #000000;
    z-index: 10;

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
      color: #9c9c9c;
      margin-top: 24px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      font-size: 29px;
      li {
        font-family: "Roboto";
        font-style: normal;
        font-weight: bold;
        padding: 15px 20px 15px 0;
        cursor: pointer;
        color: #000;
        :last-child {
          padding-bottom: 25px;
        }
        :hover {
          color: #FEA6A2;
        }
        /* text-decoration: none; */
      }
    }
  }

  @media (max-width: 414px) {
    
    div.location-picker {
      position: absolute;
      top: 40px;
      left: 20px;
      width: 120px;
      height: 300px;
      overflow: scroll;
      padding: 8px;
      border: 3px solid #000;
      border-radius: 10px;
      transform: translateX(-50%);
      text-align: left;
      box-sizing: border-box;
      background-color: #fff;
      box-shadow: 0px 12px 60px #00000070;
      z-index: 10;

      span {
        font-size: 13px;
        color: #9c9c9c;
        margin-top: 24px;
      }
      ul {
        display: flex;
        justify-content: center;
        list-style: none;
        font-size: 29px;
        li {
          font-family: "Roboto";
          font-style: normal;
          font-weight: bold;
          font-size: 15px;
          padding: 8px;
          cursor: pointer;
          color: #000;
          :last-child {
            padding-bottom: 25px;
          }
          :hover {
            color: #FEA6A2;
          }
        }
      }
    }
  }
`
export const LocationPicker = ({
  // type,
  setApiQuery,
  ...props
}: LocationPickerProps) => {

  const [ value, setValue ] = useState<string>("??????")
  const [ open, setOpen ] = useState<boolean>(false)
  const locationRef = useRef<HTMLDivElement | null>(null)
  useOutsideClick(locationRef,() => setOpen(false))

  const locationList = {
    "???":[
      { displayName:"?????????", value:"Taipei" },
      { displayName:"?????????", value:"NewTaipei" },
      { displayName:"?????????", value:"Keelung" },
      { displayName:"?????????", value:"Taoyuan" },
      { displayName:"?????????", value:"YilanCounty" },
      { displayName:"?????????", value:"Hsinchu" },
      { displayName:"?????????", value:"HsinchuCounty" },
    ],
    "???":[
      { displayName:"?????????", value:"MiaoliCounty" },
      { displayName:"?????????", value:"Taichung" },
      { displayName:"?????????", value:"NantouCounty" },
      { displayName:"?????????", value:"ChanghuaCounty" },
      { displayName:"?????????", value:"YunlinCounty" },
    ],
    "???":[
      { displayName:"?????????", value:"Chiayi" },
      { displayName:"?????????", value:"ChiayiCounty" },
      { displayName:"?????????", value:"Tainan" },
      { displayName:"?????????", value:"Kaohsiung" },
      { displayName:"?????????", value:"PingtungCounty" },
    ],
    "???":[
      { displayName:"?????????", value:"HualienCounty" },
      { displayName:"?????????", value:"TaitungCounty" },
    ],
    "??????":[
      { displayName:"?????????", value:"KinmenCounty" },
      { displayName:"?????????", value:"PenghuCounty" },
      { displayName:"?????????", value:"LienchiangCounty" },
    ],
  }

  const handleClickPicker = () => {
    setOpen(t => !t)
  }

  const handleChooseLocation = (data:{displayName:string, value: string}) => {
    setValue(data.displayName)
    setApiQuery((prev:object) => ({...prev,location:data.value}))
    setOpen(false)
  }

  return (
    <LocationPickerStyle open={open} ref={locationRef} >
      {/* <div className="overlay"/> */}
      <p onClick={handleClickPicker} >{value}</p>
      <div className="location-picker">
        {map((locationSection: keyof typeof locationList) => (
          <Fragment key={locationSection}>
          <span>{locationSection}</span>
          <ul>
            {map((location:{displayName:string,value:string}) => (
              <li key={location.displayName} onClick={() => handleChooseLocation(location)}>{location.displayName}</li>
            ))(locationList[locationSection])}
          </ul>
          </Fragment>
        ))(keys(locationList))}
      </div>
    </LocationPickerStyle>
  )

}