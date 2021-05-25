import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = props => {

    const [inputValue, setInputValue] = useState("Hola mundo")
    const handleInputChange = (e) => {
        const newCat = e.target.value
        setInputValue(newCat)
    }

    const handleSubmit = e => e.preventDefault()


    return <>
        <h2> Add Category</h2>
        <form onSubmit={handleSubmit}>
            <label for="name">Category: </label>
            <input
                type="text"
                name="category"
                placeholder="Category"
                value={inputValue}
                onChange={handleInputChange}></input>



        </form>
        <small>Buscando los resultados de {inputValue}</small>


    </>

}

AddCategory.propTypes = {

}

export default AddCategory
