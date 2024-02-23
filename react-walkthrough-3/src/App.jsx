import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { ItemForm } from './components/ItemForm'
import { List } from './components/List'

function App() {

  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/projects')
    .then(res => res.json())
    .then(data => setItems(data))
  }, [])
  
  const renderList = (items) => {
    if (items !== undefined) {
      return <List items={items}></List>
    }
  }

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

  return (
    <div className='app'>
      <Header/>
      <ItemForm onAddProject={onAddProject}/>
      {renderList(items)}
    </div>
  )
}

export default App
