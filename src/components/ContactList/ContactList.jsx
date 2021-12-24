import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import s from './ContactList.module.scss'
import actions from '../../redux/actions'

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul className={s.list}>
            {contacts.map(({name,number,id}) => (
                  <li className={s.itemList} key={id}>
                  <span className={s.contactName}>{name}</span>
                  <a className={s.contactNumber} href={`tel:${number}`}>{number}</a>
                  <button className={s.contactDelete} type="button" onClick={() => onDeleteContact(id)}>Удалить</button>
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
    }),
    
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
const getVisibleContacts = (allContacts,filter)=>{
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(({name})=>
    name.toLowerCase().includes(normalizedFilter)
  )
}
const mapStateToProps = state =>({
  contacts:getVisibleContacts(state.contacts.contacts , state.contacts.filter)
})

const mapDispatchToProp = dispatch=>({
  onDeleteContact:id=>dispatch(actions.deleteContacts(id))
})



export default connect(mapStateToProps,mapDispatchToProp)(ContactList)