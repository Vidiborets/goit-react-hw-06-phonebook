
import shortid from 'shortid'
import { createAction } from '@reduxjs/toolkit'


const addContacts = createAction('contacts/add',text=>({
        payload:{
            id:shortid.generate(),
        ...text
        }
}))


const deleteContacts = createAction('contacts/delete')

const changeFilter = createAction('contacts/changeFilter')

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContacts, deleteContacts, changeFilter}