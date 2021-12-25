import React from "react";
import s from './ContactStats.module.scss'
import { useSelector } from "react-redux";
import { getStats } from "../../redux/seletrors";


export default function ContactStats(){
    const total = useSelector(getStats)

    return(
            <>
                <h2 className={s.title}>Общее кол-во контактов</h2>
                <span className={s.titleContact}>{total}</span>
            </>
    )
}