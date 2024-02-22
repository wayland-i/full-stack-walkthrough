

// eslint-disable-next-line react/prop-types
const DogListItem = ({id, dog}) => {

    console.log(id)
    console.log(dog)

  return (
    <>
        <h3>{dog}</h3>
        <div>DOGGIE ID {id}</div>
        
    </>
  )
}

export default DogListItem