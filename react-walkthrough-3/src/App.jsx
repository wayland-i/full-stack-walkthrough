import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { ItemForm } from './components/ItemForm'
import { List } from './components/List'
import { EditItemForm } from './components/EditItemForm'

function App() {

  const [items, setItems] = useState([])
  const [itemToEdit, setItemToEdit] = useState(null)

  //Fetch Items
  useEffect(() => {
    fetch('http://localhost:4000/projects')
    .then(res => res.json())
    .then(data => setItems(data))
  }, [itemToEdit])
  
  // Render List Component with Items
  const renderList = (items) => {
    if (items !== undefined) {
      return <List items={items} onHandleDelete={onHandleDelete} onHandleEdit={onHandleEdit}></List>
    }
  }

  //ADD START
  const onAddProject = (project) => {
    fetch('http://localhost:4000/projects', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(project)
    })
    .then(res => {
      if (res.ok) {
        setItems((items) => [...items, project])
    }})
  }
  //ADD END

  //EDIT START
  const onHandleEdit = (id) => {

    items.map(item => {
      if (item.id == id) {
        setItemToEdit(item)
      }
    })

  }

  const submitEdit = (itemToEdit) => {
    console.log("submitting")
    console.log(itemToEdit.id)

    console.log(`http://localhost:4000/projects/${itemToEdit.id}`)

    fetch(`http://localhost:4000/projects/${itemToEdit.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(itemToEdit)
    })
    .then(res => res.json)
    .then(editedItem => {
      setItems((items) => {
        return items.map(item => {
          if (item.id === editedItem.id) {
            return editedItem
          }
          else {
            return item
          }
        })
      })
    })
    setItemToEdit(null)
  }



  //EDIT END

  //DELETE START
  const onHandleDelete = (id) => {
    console.log("accessing delete")
    console.log(id)
    fetch(`http://localhost:4000/projects/${id}`, {
            method: 'DELETE'
    })
    .then(setItems((items) => {
      return items.filter(item => {
      if (item.id !== id) {
        return item
      } 
      else {
        return null
      }
    })}))
  }
  //DELETE END

  return (
    <div className='app'>
      <Header/>
      {itemToEdit ? <EditItemForm itemToEdit={itemToEdit} submitEdit={submitEdit}/> : <ItemForm onAddProject={onAddProject}/>}
      {renderList(items)}
    </div>
  )
}

export default App
