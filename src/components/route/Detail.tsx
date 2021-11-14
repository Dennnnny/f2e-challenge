import { isEmpty, map } from "ramda";
import { useEffect, useState } from "react";
import { IoCallOutline, IoLocationSharp, IoTimeOutline } from "react-icons/io5";
import { useParams } from "react-router";
import styled from "styled-components";
import { getDetail } from "../../tool/handleFetch";
import { ApiType } from "../../tool/typeConfig"
import { Footer } from "../Footer";
import { Header } from "../Header";
type DetailStyleType = {}

const DetailStyle = styled.div<DetailStyleType>`
  width: 100%;
  div.detail-container {
    padding: 60px 120px;
    height: calc(100vh + 150px);
    margin-bottom: 150px;

    div.detail-picture {
      position: relative;
      display: flex;
      overflow: scroll;
      ::-webkit-scrollbar {
        display: none;
      }
      /* width: 100%; */
      gap: 40px;
      img {
        width: 100%;
        height: 600px;
        object-fit: fill;
        border: 3px solid #000;
        border-radius: 25px;
        z-index: -1;
      }
    }

    div.detail-body {
      margin-top: 40px;
    }

    p {
      font-family: "Roboto";
      font-style: normal;
      font-weight: normal;
      color: #000000;
    }
    
    p.title {
      font-size: 35px;
      line-height: 41px;
      font-weight: bold;
    }

    div.detail-info {
      margin: 20px 0 60px;
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns:  minmax(20%,max-content);
      gap: 40px;
      p.location, p.opentime, p.phone {
        font-size: 25px;
        line-height: 29px;
        font-weight: bold;
        color: #838383;
        svg {
          margin-right: 8px;
          min-width: 25px;
          transform: scale(1.5);
        }
      }
    }

    div.detail-content {
      p.detail-description {
        font-size: 22px;
        line-height: 26px;
        color: #000000;
      }
    }
  }

  @media (max-width: 414px) {
    div.detail-container {
      padding: 24px;
      height: calc(100vh - 209px);
      overflow: scroll;
      margin-bottom: 0;

      div.detail-picture {
        /* width: 100%; */
        gap: 20px;
        img {
          height: 160px;
          border: 2px solid #000;
          border-radius: 15px;
        }
      }

      div.detail-body {
        margin-top: 20px;
      }

      p.title {
        font-size: 18px;
        line-height: 21px;
      }

      div.detail-info {
        margin: 10px 0 30px;
        grid-auto-columns: 33%;
        gap: 10px;
        p.location, p.opentime, p.phone {
          font-size: 10px;
          line-height: 12px;
          display: inline-flex;

          svg {
            margin-right: 8px;
            min-width: 25px;
            transform: scale(1.5);
          }
        }
      }

      div.detail-content {
        p.detail-description {
          font-size: 14px;
          line-height: 18px;
        }
      }
    }
  }

`

type DetailType = {
  // match: object
}

export const Detail = ({
  // match,
  ...props
}:DetailType) => {
  let { key, id } = useParams();

  const [ details, setDetails ] = useState<Array<ApiType>>([])
  
  useEffect(()=>{
    getDetail(key, id).then(setDetails)
  },[id, key])
  return (
    <DetailStyle>
      <Header secondary/>
      { !isEmpty(details)
        ? map((detail:ApiType) => (
          <div key={detail.ID} className="detail-container">
            <div className="detail-picture">
              <img alt={detail.Picture.PictureDescription1 ||"one"} src={detail.Picture.PictureUrl1 || "/taiwan.png"} />
              {detail.Picture.PictureUrl2 && <img alt={detail.Picture.PictureDescription2 ||"two"} src={detail.Picture.PictureUrl2 || "/taiwan.png"} /> }
              {detail.Picture.PictureUrl3 && <img alt={detail.Picture.PictureDescription3 ||"three"} src={detail.Picture.PictureUrl3 || "/taiwan.png"} /> }
            </div>
            <div className="detail-body">
              <p className="title">{detail.Name}</p>
              <div className="detail-info">
                <p className="location"> <IoLocationSharp color="#F67878"/> {detail.Address}</p>
                <p className="opentime"> <IoTimeOutline /> {detail.OpenTime || `${dateFormat(detail.StartTime)}~${dateFormat(detail.EndTime)}` || "活動進行中"}</p>
                <p className="phone"> <IoCallOutline /> {detail.Phone || "聯絡"+detail.Organizer}</p>
              </div>
              <div className="detail-content">
                <p className="detail-description">{detail.DescriptionDetail || detail.Description || "一個好玩的活動吧"}</p>
              </div>
            </div>
          </div>
        ))(details)
        : <div className="detail-container">
            loading
          </div>
      }
      <Footer />
    </DetailStyle>
  )
}

function dateFormat (date: string) {
  return new Date(date).toLocaleDateString()
}