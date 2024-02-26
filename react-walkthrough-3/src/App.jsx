import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { ItemForm } from './components/ItemForm'
import { List } from './components/List'

function App() {

  const [items, setItems] = useState([])

  //Fetch Items
  useEffect(() => {
    fetch('http://localhost:4000/projects')
    .then(res => res.json())
    .then(data => setItems(data))
  }, [])
  
  // Render List Component with Items
  const renderList = (items) => {
    if (items !== undefined) {
      return <List items={items} onHandleDelete={onHandleDelete}></List>
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
      <ItemForm onAddProject={onAddProject}/>
      {renderList(items)}
    </div>
  )
}

export default App
