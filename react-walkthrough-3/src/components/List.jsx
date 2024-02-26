import PropTypes from 'prop-types';
import { ListItem } from './ListItem';

export const List = ({items, onHandleDelete}) => {

    const renderListItem = (items) => {
        return items.map(item => {
            return <ListItem key={item.id} {...item} onHandleDelete={onHandleDelete}/>
        })
    }

  return (
    <div className='container'>
        {renderListItem(items)}
    </div>
  )
}


List.propTypes = {
    items: PropTypes.array.isRequired,
  };