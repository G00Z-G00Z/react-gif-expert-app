import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ setCategories }) => {


    const [inputValue, setInputValue] = useState("")
    const handleInputChange = (e) => {
        const newCat = e.target.value
        setInputValue(newCat)

    }

    const handleSubmit = e => {
        e.preventDefault()
        let nuevaCat = inputValue.trim()
        if (nuevaCat) {
            setCategories(prevList =>
                (!prevList.find(element => element === nuevaCat)) ?
                    [inputValue, ...prevList] :
                    prevList)

        }
    }


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
    </>

}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired

}

export default AddCategory
