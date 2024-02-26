import { useState } from "react"

export const EditItemForm = ({itemToEdit, submitEdit}) => {

    const [formData, setFormData] = useState(itemToEdit)

    const handleOnChange = (e) => {

        const {name, value} = e.target

        setFormData({...formData, [name]: value})
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()

        submitEdit(formData)
    }


  return (
    <form className="item-form" onSubmit={handleOnSubmit}>
        <h2>Edit Item Form</h2>
        <input 
            onChange={handleOnChange} 
            type="text" 
            name="name" 
            id="name"
            value={formData.name}/>
        <input 
            onChange={handleOnChange} 
            type="text" 
            name="about" 
            id="about"
            value={formData.about}/>
        <button type="Submit">Submit</button>
    </form>
  )
}
