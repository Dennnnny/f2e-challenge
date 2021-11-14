export type ApiType = {
  "ID": string,
  "Name": string,
  "DescriptionDetail": string,
  "Description": string,
  "Phone": string,
  "Address": string,
  "ZipCode": string,
  "TravelInfo": string,
  "OpenTime": string,
  "Picture": {
      "PictureUrl1": string,
      "PictureDescription1": string,
      "PictureUrl2"?: string,
      "PictureDescription2"?: string,
      "PictureUrl3"?: string,
      "PictureDescription3"?: string,
  },
  "Position": {
      "PositionLon": number,
      "PositionLat": number,
      "GeoHash": string
  },
  "Organizer": string,
  "StartTime": string,
  "EndTime": string,

}

