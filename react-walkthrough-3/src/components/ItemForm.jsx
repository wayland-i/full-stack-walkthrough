import { useState } from "react"


export const ItemForm = ({onAddProject}) => {

    const [formData, setFormData] = useState({
        name: "",
        about: ""
    })

    const handleOnChange = (e) => {
        const {name, value} = e.target

        setFormData({...formData, [name]: value})
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        onAddProject(formData)
    }

  return (
    <form className="item-form" onSubmit={handleOnSubmit}>
        <h2>Item Form</h2>
        <input placeholder="Project Name..."
            onChange={handleOnChange} type="text" 
            name="name" 
            id="name"
            value={formData.name}/>
        <input 
            placeholder="about..." 
            onChange={handleOnChange} 
            type="text" 
            name="about" 
            id="about"
            value={formData.about}/>
        <button type="Submit">Submit</button>
    </form>
  )
}
