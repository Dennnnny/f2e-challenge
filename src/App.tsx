import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Header } from "./components/Header"
import './App.css';

import styled from "styled-components";
import { Footer } from './components/Footer';
import { getList } from './tool/handleFetch';
import { ApiType } from "./tool/typeConfig";
import { HomePageList } from './components/HomePageList';

type MainStyleType = {

}


const MainStyle = styled.div<MainStyleType>`
  div.body {
    height: min-content;
    background-color: #fff;
    overflow: hidden;
    padding-bottom: 40px;
    position: relative;
    z-index: 9;
    
  }
`

function App() {

  const [ scenicSpotList, setScenicSpotList ] = useState<Array<ApiType>>([])
  const [ restaurantList, setRestaurantList ] = useState<Array<ApiType>>([])
  const [ hotelList, setHotelList ] = useState<Array<ApiType>>([])
  const [ activityList, setActivityList ] = useState<Array<ApiType>>([])

  useEffect(()=>{
    getList('ScenicSpot').then(setScenicSpotList)

    getList('Restaurant').then(setRestaurantList)

    getList('Hotel').then(setHotelList)

    getList('Activity').then(setActivityList)

  },[])

  return (
    <MainStyle>
      <Header />
      <div className="body">
        <HomePageList topic="ScenicSpot" title="近期熱門景點" list={scenicSpotList} />
        <HomePageList topic="Restaurant" title="近期熱門餐廳" list={restaurantList} />
        <HomePageList topic="Activity" title="近期熱門活動" list={activityList} />
        <HomePageList topic="Hotel" title="網友推高CP住宿" list={hotelList} />
      </div>
      <Footer />
    </MainStyle>
  );
}

export default App;
