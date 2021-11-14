import { map } from "ramda"
import styled from "styled-components"
import { HomePageCard } from "./HomePageCard"
import { ApiType } from "../tool/typeConfig";

type HomePageListStyleType = {

}

const HomePageListStyle = styled.div<HomePageListStyleType>`

  position: relative;
  overflow: scroll;
  width: 100vw;
  padding: 60px 90px 0px;
  ::-webkit-scrollbar {
    display: none;
  }

  > p {
      position: sticky;
      left: 0;
      font-family: "Roboto";
      font-style: normal;
      font-weight: bold;
      font-size: 29px;
      line-height: 34px;
      color: #9C9C9C;
    }

  > div.container {
    display: inline-flex;
    padding: 24px;

    > a:last-child {
      margin-right:  240px;
    }
  }

  @media (max-width: 414px) {
    padding: 24px;
    > p {
      font-size: 12px;
    }
    > div.container {
      padding: 0;
      > a:last-child {
        margin-right:  60px;
      }
    }
  }
`

type HomePageListType = {
  title: string,
  list: Array<ApiType>,
  topic: string
}

export const HomePageList = ({
  title,
  list,
  topic,
  ...props
}:HomePageListType) => {
  return (
    <HomePageListStyle>
      <p>{title}</p>
      <div className="container">
        {map( (item:ApiType) => {
          return <HomePageCard 
                    key={item.ID}
                    id={item.ID}
                    title={item.Name}
                    location={item.Address}
                    imgSrc={item.Picture.PictureUrl1}
                    topic={topic}
                  />
        } )(list)}
      </div>
    </HomePageListStyle>
  )
}