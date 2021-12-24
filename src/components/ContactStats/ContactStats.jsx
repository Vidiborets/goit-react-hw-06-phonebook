import { connect } from "react-redux";
import React from "react";
import s from './ContactStats.module.scss'


const ContactStats = ({total})=>{
    return(
            <>
                <h2 className={s.title}>Общее кол-во контактов</h2>
                <span className={s.titleContact}>{total}</span>
            </>
    )
}

const mapStateToProps = state =>({
    total:state.contacts.contacts.length,
})


export default connect(mapStateToProps)(ContactStats)