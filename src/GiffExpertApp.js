import React, { Fragment, useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GiffExpertApp = props => {


    const [categories, setCategories] = useState(['One Punch Man'])

    return <Fragment>
        <h2>GiffExpertApp</h2>
        <hr />

        <AddCategory setCategories={setCategories} />

        <ol>
            {
                categories.map(category =>
                    <GifGrid
                        category={category}
                        key={category}
                    />
                )
            }
        </ol>
    </Fragment>


}

GiffExpertApp.propTypes = {

}

export default GiffExpertApp
