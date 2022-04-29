import React from "react";
import {NavLink} from "react-router-dom";
import logo from './../img/logo.png'
import s from './Header.module.css'
import {BurgerBtn} from "./BurgerBtn";

export const Header = () => {
    return (
        <header>
            <div>
                <img src={logo} alt=""/>
            </div>
            <nav className={s.headerLinks}>
                <ul>
                    <li><a href='#skills' className={s.link}>Skills</a></li>
                    <li><a href="#portfolio" className={s.link}>Portfolio</a></li>
                    <li><a href='#video' className={s.link}>Video</a></li>
                    <li><a href='#price' className={s.link}>Price</a></li>
                    <li><a href='#contacts' className={s.link}>Contacts</a></li>
                </ul>
            </nav>
            <div className={s.headerLanguage}>
                <a href ='#main' className={s.linkEn}>en</a> / <a href='#main' className={s.linkRu}>ru</a>
            </div>
            {/*<BurgerBtn/>*/}
        </header>
    )
}