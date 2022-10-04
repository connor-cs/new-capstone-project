import React from 'react'
import TrailCard from './TrailCard'
import { useEffect, useState } from 'react'

export default function TrailsContainer({errors, trails}) {
const trailsResults = trails.map(trail=> {
    return <TrailCard trail={trail} />
})
    return (
        <div>
            {trailsResults}
            {errors ? errors : null}
        </div>

    )
}
