
import PropTypes from 'prop-types'
import { GifGridItem } from './GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import getGifs from '../helpers/getGifs'

const GifGrid = ({ category }) => {

    const { data: gifs, loading } = useFetchGifs(category);

    return <>

        <h3 className='animate__animated animate__flash'>{category}</h3>
        {loading && <p className="animate__animated animate__flash">Loading...</p>}
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