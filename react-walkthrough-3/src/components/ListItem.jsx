import PropTypes from 'prop-types';

export const ListItem = ({name, about}) => {
  return (
    <div className="tile">
        <h3>{name}</h3>
        <p>{about}</p>
    </div>
  )
}


ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
  };