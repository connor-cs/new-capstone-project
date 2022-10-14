import React from 'react'
import { useState, useCallback } from 'react'
import TrailsContainer from './TrailsContainer'
import getStateId from './HelperActions/GetStateId'
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api'
import { Button } from '@mui/material'


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

  function stateInput(e) {
    const stateCopy = {
      ...userSearch
    }
    // debugger
    stateCopy.state = getStateId(e.target.value)
    setUserSearch(stateCopy)
    // console.log("statecopy", stateCopy)
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
    // console.log(allstates)
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

  // console.log(trails)
  // // console.log(process.env)
  // const trailsList = (trails) => {
  //   for (let x in trails)
  //   console.log('log', x[0].name)
  
  // trailsList(trails)

  //Google maps stuff:
  const containerStyle = {
    width: '700px',
    height: '600px',
  };
  const center = {
    lat: 38.8,
    lng: -77
  };

  const zoom = 20

  console.log('process.env:', process.env)
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

  // console.log('trails', trails[0].length)
  
//   const trailMarkers = () {
//     for (let i =0; i <trails.length; i++) {
//       return <Marker
//   }
// }
  
 return (
    <main className='explore-page'>

      <div>
        <form onSubmit={onSubmit}>
          <input type="text" name="city" value={userSearch.city} placeholder="City" onChange={handleChange}></input>
          <select onChange={stateInput}>{renderOptions()}</select>
          <button>submit</button>
        </form>
      </div>

      <div className='results'>
        {trails.length > 0 ? <TrailsContainer trails={trails} errors={errors} /> : null}
      </div>
      {/* <Button variant="contained" href="#contained-buttons">
        Link
      </Button> */}

      <div className='map-container'>
        {isLoaded ? <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={zoom}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {/* <Marker position={{ lat: 38.9072, lng: -77.03 }} /> */}
        </GoogleMap> : null}
      </div>

    </main>
  )


}