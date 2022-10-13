import React from 'react'
import {GoogleMap, useJsApiLoader} from '@react-google-maps/api'



export default function Map() {

  
  
  // if (!isLoaded) return <div>Loading...</div>
  return (
    <>
    <h1>This is the map</h1>
    <GoogleMap zoom={10} center={{lat:38, lng: -77}} mapContainerClassName="map-container"></GoogleMap>
    </>
  )
}
