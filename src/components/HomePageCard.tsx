import styled from "styled-components"
import { IoLocationSharp } from "react-icons/io5"
import { Link } from "react-router-dom"
type HomePageCardStyleType = {

}

const HomePageStyle = styled(Link)<HomePageCardStyleType>`
  width: 340px;
  border: 3px solid #000;
  box-sizing: border-box;
  border-radius: 25px;
  background-color: #fff;
  overflow: hidden;
  margin: 0 24px;
  text-decoration: none;

  > div.card-container {
    padding: 8px 20px 16px;

    p {
      font-family: "Roboto";
      font-weight: bold;
    }

    p.title {
      font-size: 25px;
      line-height: 29px;
      color: #000;
      margin-bottom: 8px;
    }

    p.location {
      font-size: 18px;
      line-height: 21px;
      color:#838383;
      display: flex;
      align-items: center;

      svg {
        margin-right: 8px;
        min-width: 25px;
        transform: scale(1.5);
      }
    }
  }

  img {
    width: 100%;
    height: 250px;
    border-bottom: 3px solid #000 ;
  }

  @media (max-width: 414px) {
    width: 140px;
    border: 2px solid #000;
    border-radius: 7px;
    margin: 0 12px;

    > div.card-container {
      padding: 6px;

      p.title {
        font-size: 13px;
        line-height: 15px;
        margin-bottom: 2px;
      }

      p.location {
        font-size: 9px;
        line-height: 11px;

        svg {
          min-width: 0;
          /* margin-right: 8px; */
          /* min-width: 15px; */
          /* transform: none; */
        }
      }
    }

    img {
      height: 100px;
      border-width: 2px;
    }
  }

`


type HomePageCardType = {
  title: string,
  location: string,
  imgSrc: string,
  id: string,
  topic: string
}

export const HomePageCard = ({
  // type,
  title,
  location,
  imgSrc,
  id,
  topic,
  ...props
}: HomePageCardType) => {
  return (
    <HomePageStyle to={`/detail/${topic}/${id}`}>
      <img alt="card" src={imgSrc||"/taiwan.png"}/>
      <div className="card-container">
        <p className="title">{title}</p>
        <p className="location">
          <IoLocationSharp color="#F67878"/>
          {location||"臺灣"}
        </p>
      </div>
    </HomePageStyle>
  )
}