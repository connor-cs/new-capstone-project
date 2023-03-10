import React from 'react'
import { useState, useCallback } from 'react'
import TrailsContainer from './TrailsContainer'
import getStateId from './HelperActions/GetStateId'
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api'
import Button from '@mui/material/Button';


export default function Explore() {

  const [userSearch, setUserSearch] = useState(
    {
      city: '',
      state: '',
      distance: ''
    }
  )
  const [errors, setErrors] = useState([])
  const [trails, setTrails] = useState([])
  const [map, setMap] = useState(true)
  const [latLong, setlatLong] = useState({
    lat: null, lng: null
  })

  function stateInput(e) {
    const stateCopy = {
      ...userSearch
    }
    stateCopy.state = getStateId(e.target.value)
    setUserSearch(stateCopy)
  }


  function handleChange(e) {
    const { name, value } = e.target
    setUserSearch({ ...userSearch, [name]: value })
    console.log('name:', name, 'value:', value)
  }

  //post request to tell it what data is needed
  function onSubmit(e) {
    e.preventDefault()
    console.log("usersearch:", userSearch)

    fetch('/trails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userSearch)
    })
      .then(res => {
        if (res.ok) {
          res.json()
            .then(data => {
              console.log("data from fetch:", data)
              setTrails([data])
              
              const latLongCopy = { ...latLong }
              latLongCopy.lat = data.latitude
              latLongCopy.lng = data.longitude
              console.log('latlongcopy', latLongCopy)
              setlatLong(latLongCopy)
            })
        }
        else {
          res.json()
            .then(errors => setErrors([...errors.error]))
        }
      })
  }

  function renderOptions() {
    const allstates = getStateId("all")
    const stateNames = []
    for (let state in allstates) {
      // console.log(allstates[state])
      // if (state==="AL"){
      //   stateNames.push(<option defaultValue={allstates[state].abbreviation}key={allstates[state].id}>{allstates[state].name}</option>)
      // }
      // else{
      stateNames.push(<option value={allstates[state].abbreviation} key={allstates[state].id}>{allstates[state].name}</option>)


    }
    return stateNames
  }

  //Google maps stuff:
  const containerStyle = {
    width: '900px',
    height: '600px',
  };
  const center = {
    lat: 38.8,
    lng: -77
  };

  const { lat, lng } = latLong

  const zoom = 20

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY
  })

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])
  //Google maps stuff ^^
  
  // console.log('from exp', {trails})
  const test = trails[0].map(obj => Object.values(obj))
  console.log({test})
  console.log('drilling', Object.values(trails[0]))

  return (
    <main className='explore-page'>

      <div className="explore-form-div">
        <form onSubmit={onSubmit}>
          <input type="text" name="city" value={userSearch.city} placeholder="City" onChange={handleChange}></input>
          <span>&nbsp;&nbsp;</span>
          <select onChange={stateInput}>{renderOptions()}</select>

          <Button onClick={onSubmit} variant="contained">submit</Button>
        </form>
      </div>
      <div className='explore-container'>
        <div className='results'>
          {trails.length > 0 ? <TrailsContainer trails={trails[0].map(obj => Object.values(obj))} errors={errors} /> : null}
        </div>

        <div className='map-container'>
          {isLoaded ? <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={20}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            {latLong.lat ? <Marker position={{ lat: latLong.lat, lng: latLong.lng }} /> : null}
          </GoogleMap> : null}
        </div>
      </div>



    </main>
  )


}