import React from 'react'

export const GifGridItem = ({ title, url }) => {

    return (
        <div className='card animate__animated animate__fadeInLeftBig animate__fast'>
            <img loading='lazy' src={url} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}
