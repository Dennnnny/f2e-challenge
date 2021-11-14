import { ChangeEvent, useState } from "react"
import styled from "styled-components"

type InputSearchStyleType = {}

const InputSearchStyle = styled.input<InputSearchStyleType>`

  border: none;
  outline: none;
  font-family: "Roboto";
  font-style: normal;
  font-weight: bold;
  font-size: 29px;
  max-width: 180px;
  line-height: 34px;
  padding-left: 30px;
  color: #9c9c9c;
  border-left: 2px solid #000;
  margin: 13px 0;
  /* padding: 13px 0 13px 13px; */
  text-align: left;
  box-sizing: border-box;
  ::placeholder {
    color: #9c9c9c;
  }

  @media (max-width: 414px){
    font-size: 13px;
    line-height: 100%;
    height: 18px;
    padding-left: 10px;
    margin: 5px 0;
    width: 5rem;
    /* width: 100%; */
  }
`

type InputSearchType = {
  setApiQuery: Function
}

export const InputSearch = ({
  setApiQuery,
  ...props
}:InputSearchType )=> {

  const [ value, setValue ] = useState<string>("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setApiQuery((prev:object) => ({...prev, query:e.target.value}))
    setValue(e.target.value)
  }

  return (
    <InputSearchStyle placeholder="關鍵字搜尋" value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}>
      {/* <input placeholder="關鍵字搜尋" value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}/> */}
    </InputSearchStyle>
  )
}