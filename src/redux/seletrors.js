import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (state) => state.contacts.contacts;
export const getFilter = (state)=> state.contacts.filter;
export const getStats = (state)=> state.contacts.contacts.length

export const getVisibleContacts = createSelector(
    [getContacts,getFilter],
    (contacts,filter)=>{
        const normalizedFilter = filter.toLowerCase();

  return contacts.filter((contact)=>{
      return contact.name.toLowerCase().includes(normalizedFilter)
  })});