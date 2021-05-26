const getGifs = async (category) => {
    try {
        const correct_cat = encodeURI(category)
        const url = `https://api.giphy.com/v1/gifs/search?q=${correct_cat}&limit=5&api_key=Xci2BqhB3LBFHXy1LzbsMY9eWJHsZzUy`
        const resp = await fetch(url);
        const { data } = await resp.json()

        const gifsList = data.map(img => {
            const { id, title, images } = img

            return { id, title, url: images?.downsized_medium.url }
        })
        return gifsList

    }
    catch (err) {
        console.dir(err)
        return []
    }
}

export default getGifs