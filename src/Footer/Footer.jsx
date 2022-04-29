import React from "react";
import s from './footer.module.css'

export const Footer = () => {
    const today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
    return (
        <footer className={s.footerContainer}>
            <div>
                <p>&#169; {date} Shakhray Anton</p>
            </div>
        </footer>
    )
}