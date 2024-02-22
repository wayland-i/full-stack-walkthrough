import './App.css'
import './components/Header'
import Header from './components/Header'
import DogList from './components/DogList'
import { useEffect, useState } from 'react'

function App() {

  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`http://localhost:4000/items`)
    .then(res => res.json())
    .then((data) => setItems(data))
  }, [])

  const renderDogList = (items) => {
    return <DogList items={items}></DogList>
  }

  return (
    <>
      <Header></Header>
      <h1>Dogs!</h1>
      {/* <DogList items={items}></DogList> */}
      {renderDogList(items)}
    </>
  )
}

export default App
