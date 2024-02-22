import DogListItem from "./DogListItem"

const DogList = ({items}) => {

    const renderItems = (items) => {
        return <DogListItem></DogListItem>
    }

    // console.log(items)

    items === undefined ? null : console.log(items)
    
  return (
    <>
        <h2>Dog List</h2>

        {items === undefined ? null : renderItems()}
    </>
  )
}

export default DogList