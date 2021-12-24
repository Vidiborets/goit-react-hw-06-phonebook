import PropTypes from 'prop-types'
import s from './ContactFilter.module.scss'
import { connect } from 'react-redux'
import actions from '../../redux/actions'

const ContactFilter = ({ value, onChange }) => {
    return (
        <label className={s.label}>
            <input
                type="text"
                name="name"
                value={value}
                onChange={onChange}
                className={s.input}
                placeholder={'Поиск контактов'}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
            />
        </label>
    )
}

ContactFilter.defaultProps = {
  value: '',
};

ContactFilter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};


const mapDispatchToProp = dispatch=>({
  onChange: (e)=>dispatch(actions.changeFilter(e.target.value))
})

const mapStateToProps=(state)=>({
   value:state.contacts.filter
})

export default connect(mapStateToProps,mapDispatchToProp)(ContactFilter)
