import actions from '../../redux/actions'
import PropTypes from 'prop-types'
import s from './ContactList.module.scss'
import { getVisibleContacts } from '../../redux/seletrors'
import { useDispatch,useSelector } from 'react-redux'

export default function ContactList () {

  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

    return (
        <ul className={s.list}>
            {contacts.map(({name,number,id}) => (
                  <li className={s.itemList} key={id}>
                  <span className={s.contactName}>{name}</span>
                  <a className={s.contactNumber} href={`tel:${number}`}>{number}</a>
                  <button className={s.contactDelete} type="button" onClick={() => dispatch(actions.deleteContacts(id))}>Удалить</button>
              </li>
            ))}
       </ul>
  )  
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  )
}
