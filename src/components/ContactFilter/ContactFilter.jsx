import PropTypes from 'prop-types'
import s from './ContactFilter.module.scss'
import actions from '../../redux/actions'
import { useSelector } from 'react-redux'
import { getFilter } from '../../redux/seletrors'
import { useDispatch } from 'react-redux'

export default function ContactFilter(){
  const value = useSelector(getFilter)
  const dispatch = useDispatch()

    return (
        <label className={s.label}>
            <input
                type="text"
                name="name"
                value={value}
                onChange={(e)=>dispatch(actions.changeFilter(e.target.value))}
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
  onChange: PropTypes.func,
};

