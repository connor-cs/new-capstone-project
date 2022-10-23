import React from 'react'
import {GoogleMap} from '@react-google-maps/api'



export default function Map() {

  
  
  return (
    <>
    <h1>This is the map</h1>
    <GoogleMap zoom={10} center={{lat:38, lng: -77}} mapContainerClassName="map-container"></GoogleMap>
    </>
  )
}
