import React from 'react'
import TrailCard from './TrailCard'

export default function TrailsContainer({errors, trails}) {

    console.log('from contain', trails)

    const trailsResults = trails.map((trail, idx)=> {
        console.log(trail)
    return <TrailCard trail={trail} />
})
    return (
        <div className='trailscontainer'>
            {trailsResults}
            {errors ? errors : null}
        </div>

    )
}
