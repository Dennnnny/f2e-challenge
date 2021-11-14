import queryString from "query-string"
import { isEmpty, map, path } from "ramda"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { TopicList } from "../../tool/configs"
import { getList, getSearchList } from "../../tool/handleFetch"
import { ApiType } from "../../tool/typeConfig"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { SearchListCard } from "../SearchListCard"
import { Tab } from "../Tab"
type SearchStyleType = {
  
}

const SearchStyle = styled.div<SearchStyleType>`
  width: 100%;

  div.search-container {
    padding: 40px 120px;
    height: calc(100vh - 150px);
    overflow: scroll;

    div.tab-list {
      display: flex;
      margin-bottom: 24px;
    }
  }

  @media (max-width: 414px) {
    div.search-container {
      padding: 24px ;
      height: calc(100vh - 100px);
      overflow: scroll;

      div.tab-list {
        display: flex;
        margin-bottom: 24px;
      }
    }
  }

`

type SearchType = {

}

export const Search =({
  ...props
}:SearchType) => {
  const [ searchList, setSearchList ] = useState<Array<ApiType>>([])
  const topic = path(["topic"])(queryString.parse(window.location.search)) || ""
  const location = path(["location"])(queryString.parse(window.location.search)) || ""
  const query = path(["query"])(queryString.parse(window.location.search)) || ""
  const [ error, setError ] = useState<boolean>(false)
  const [ triggerSearch, setTriggerSearch ] = useState<boolean>(false)

  useEffect(()=>{
    console.log("trigger")
    // if(  )
    for (let item of TopicList){
      if(topic === item.value) {
        getSearchList(topic,`${location}`,`${query}`).then(setSearchList)
      }else{
        setError(true)
      }
    }
  },[topic,location,query,triggerSearch])
  // console.log("QS",queryString.parse(window.location.search))
  // 用queryString裡的東西 來打api 渲染到畫面上 
  // userEffect fetch with query
  return (
    <SearchStyle>
      <Header secondary trigger={setTriggerSearch}/>
      <div className="search-container">
        <div className="tab-list">
          {map((item:{displayName:string,value:string}) => (
            <Tab
              key={item.value}
              name={item.displayName}
              value={item.value}
              active={topic === item.value??false}
              trigger={setTriggerSearch} 
              location={`${location}`}
              query={`${query}`}
            />
          ))(TopicList)}
        </div>
        <div className="search-list">
          {
            !isEmpty(searchList)
            ? map( (item:ApiType) => 
            (<SearchListCard 
                key={item.ID}
                title={item.Name} 
                location={item.Address} 
                description={item.Description||item.DescriptionDetail}
                imgSrc={item.Picture.PictureUrl1}
                imgDescription={item.Picture.PictureDescription1}
                topic={`${topic}`}
                id={item.ID}
              />
            ))(searchList)
            : 
            <>nothing found...</>
          }
        </div>
      </div>
      <Footer />
    </SearchStyle>
  )
}
