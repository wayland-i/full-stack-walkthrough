import PropTypes from 'prop-types';

export const ListItem = ({name, about, id, onHandleDelete, onHandleEdit}) => {

    const handleDelete = () => {
        // console.log(`deleting project ${id}`)
        onHandleDelete(id)
    }

    const handleEdit = () => {
      onHandleEdit(id)
    }

  return (
    <div className="tile">
        <h3>{name}</h3>
        <p>{about}</p>
        <span>
            <button onClick={handleDelete}>delete</button>
            <button onClick={handleEdit}>edit</button>
        </span>
    </div>
  )
}


ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
  };