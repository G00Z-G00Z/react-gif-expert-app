import React from 'react'
import PropTypes from 'prop-types'

const GifGrid = ({ category }) => {

    const getGifs = async (category = "Naruto") => {
        try {
            const correct_cat = category.trim().replace(/\s/g, "+")
            const url = `https://api.giphy.com/v1/gifs/search?q=${correct_cat}&limit=10&api_key=Xci2BqhB3LBFHXy1LzbsMY9eWJHsZzUy`
            const resp = await fetch(url);
            const data = await resp.json()


            const gifs = data.map(img => {
                const { id, title, images } = img

                return { id, title, url: images?.downsized_medium.url }
            })

            console.log(gifs)


        }
        catch (err) {
            console.dir(err)
        }

    }



    return <>
        <h3 >{category}</h3>
    </>
}



GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
export default GifGrid