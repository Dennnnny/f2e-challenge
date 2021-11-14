import { IoLocationSharp } from "react-icons/io5"
import styled from "styled-components"
import { Link } from "react-router-dom"
type SearchListCardStyleType = {

}

const SearchListCardStyle = styled(Link)<SearchListCardStyleType>`
  background: #FFFEFE;
  border: 3px solid #000000;
  box-sizing: border-box;
  border-radius: 25px;
  width: 100%;
  height: 250px;
  display: flex;
  margin-bottom: 40px;
  text-decoration: none;

  img {
    min-width: 340px;
    max-width: 340px;
    border: 3px solid #000;
    border-radius: 25px;
    border-collapse: collapse;
    margin: -3px;
    box-sizing: border-box;
  }

  div.card-container {
    display: flex;
    flex-direction: column;
    padding: 24px;

    p {
      font-family: "Roboto";
      font-style: normal;
      font-weight: normal;
      color: #000000;
    }

    p.title {
      font-weight: bold;
      font-size: 25px;
      line-height: 29px;
    }
    p.location {
      font-size: 18px;
      line-height: 21px;
      color:#838383;
      display: flex;
      align-items: center;
      margin: 18px 0;
      svg {
        margin-right: 8px;
        min-width: 25px;
        transform: scale(1.5);
      }
    }
    p.description {
      font-size: 22px;
      line-height: 26px;
      height: 100%;
      overflow: scroll;
    }
  }

  @media (max-width:414px) {
    height: 100px;
    border-width: 2px;
    margin-bottom: 20px;
    img {
      min-width: 100px;
      max-width: 100px;
      border-width: 2px;
      margin: -2px;
    }
    div.card-container {
      padding: 8px;

      p.title {
        font-size: 18px;
        line-height: 21px;
      }

      p.location {
        font-size: 10px;
        line-height: 12px;
        margin: 4px 0 8px;
        svg {
          min-width: 0;
          margin-right: 4px;
        }
      }
      p.description {
        font-size: 12px;
        line-height: 14px;
      }
    }
  }

`

type SearchListCardType = {
  title: string,
  location: string,
  description: string,
  imgSrc: string,
  imgDescription: string,
  topic?: string,
  id: string
}

export const SearchListCard = ({
  title,
  location,
  description,
  imgSrc,
  imgDescription,
  topic,
  id,
  ...props
}:SearchListCardType) => {
  return (
    <SearchListCardStyle to={`/detail/${topic}/${id}`}>
      <img alt={imgDescription || "location"} src={imgSrc || "/taiwan.png"}/>
      <div className="card-container">
        <p className="title">{title}</p>
        <p className="location"> <IoLocationSharp color="#F67878"/> {location||"臺灣"}</p>
        <p className="description">{description}</p>
      </div>
    </SearchListCardStyle>
  )
}