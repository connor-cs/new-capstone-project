import React from 'react'
import { useState } from 'react'
import SelectUSState from 'react-select-us-states'
import TrailsContainer from './TrailsContainer'
import getStateId from './HelperActions/GetStateId'
import Map from './Map'



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

  function stateInput(e) {
    const stateCopy = {
      ...userSearch
    }
    stateCopy.state = getStateId(e)
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
            .then(data => setTrails([...data]))
            .then(console.log("current trails:", trails))
        }
        else {
          res.json()
            .then(errors => setErrors([...errors.error]))
        }
      })
  }


  return (
    <main className='explore-page'>

      <div>
        <form onSubmit={onSubmit}>
          <input type="text" name="city" value={userSearch.city} placeholder="City" onChange={handleChange}></input>
          <SelectUSState placeholder="state" name="state" value={userSearch.state} onChange={stateInput} />
          <label>Max distance:</label>
          <input type="number" name="distance" onChange={handleChange}></input>
          <button>submit</button>
        </form>
      </div>

      <div className='results'>
          {trails.length>0 ? <TrailsContainer trails={trails} errors={errors}/> : null}
      </div>

      <div className='map-container'>
      </div>

    </main>
  )


}
