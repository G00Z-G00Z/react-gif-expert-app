import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { GifGridItem } from './GifGridItem'
import getGifs from '../helpers/getGifs'

const GifGrid = ({ category }) => {

    const [gifs, setGifs] = useState([])

    console.log(category)
    useEffect(() => {
        getGifs(category).then(list => setGifs(list))
    }, [category])

    return <>
        <h3 >{category}</h3>
        <div className="card-grid">
            {
                gifs.map((img) => <GifGridItem key={img.id} {...img} />)
            }
        </div>
    </>
}



GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
export default GifGrid