import jsSHA from "jssha"

export const getList = (topic?: string, config?: object) => {
  return fetcher(`https://ptx.transportdata.tw/MOTC/v2/Tourism/${topic}?$top=10&$format=JSON&$filter=Picture%2FPictureUrl1%20ne%20null`,{ method:"GET",...config })
}

export const getSearchList = (topic?: string, location?: string, keyword?: string, config?: object) => {
  return fetcher(`https://ptx.transportdata.tw/MOTC/v2/Tourism/${topic}/${location}?$top=10&$filter=contains(Name%2C'${keyword}')&$format=JSON`,{ method:"GET",...config })
}

export const getDetail = (topic?: string, id?: string, config?: object) => {
  return fetcher(`https://ptx.transportdata.tw/MOTC/v2/Tourism/${topic}?$filter=contains(Id%2C'${id}')&$format=JSON`,{ method:"GET",...config })
}

const fetcher = async (url:string, config?:object) => {
  return fetch(url,{
    headers: GetAuthorizationHeader(),
    ...config
  }).then(res=>res.json())
}

function GetAuthorizationHeader() {
  const AppID = process.env.REACT_APP_APP_ID || ""
  const AppKey = process.env.REACT_APP_APP_KEY || ""

  const GMTString = new Date().toUTCString();
  const ShaObj = new jsSHA('SHA-1', 'TEXT');
  ShaObj.setHMACKey(AppKey, 'TEXT');
  ShaObj.update('x-date: ' + GMTString);
  const HMAC = ShaObj.getHMAC('B64');
  const Authorization = `hmac username=${AppID}, algorithm="hmac-sha1", headers="x-date", signature=${HMAC}`;

  return { 'Authorization': Authorization, 'X-Date': GMTString /*,'Accept-Encoding': 'gzip'*/}; //如果要將js運行在伺服器，可額外加入 'Accept-Encoding': 'gzip'，要求壓縮以減少網路傳輸資料量
}