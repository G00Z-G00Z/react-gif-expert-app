import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import AddCategory from './components/AddCategory'

const GiffExpertApp = props => {


    const [categories, setCategories] = useState(['One Punch', 'Naruto', 'HunterXHunter'])

    // const addCategory = (e) => {
    //     setCategories([...categories, 'hola'])

    // }



    return <Fragment>
        <h2>GiffExpertApp</h2>
        <hr />

        <AddCategory />

        <ol>
            {categories.map((category) => {
                return <li key={category}>
                    {category}
                </li>
            })}
        </ol>
    </Fragment>


}

GiffExpertApp.propTypes = {

}

export default GiffExpertApp
