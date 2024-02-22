
import DogListItem from "./DogListItem"

// eslint-disable-next-line react/prop-types
const DogList = ({items}) => {

    const renderItems = (items) => {
            // eslint-disable-next-line react/prop-types
            return items.map((item) => {
                return <DogListItem key={item.id} {...item}/>
            })
    }

    // console.log(items)

    // items === undefined ? null : console.log(items)
    
  return (
    <>
        <h2>Dog List</h2>

        {items === undefined ? null : renderItems(items)}
    </>
  )
}

export default DogList