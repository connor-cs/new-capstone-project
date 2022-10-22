import React from 'react'
import TrailCard from './TrailCard'

export default function TrailsContainer({errors, trails}) {
const trailsResults = trails.map(trail=> {
    return <TrailCard trail={trail} />
})
    return (
        <div className='trailscontainer'>
            {trailsResults}
            {errors ? errors : null}
        </div>

    )
}
