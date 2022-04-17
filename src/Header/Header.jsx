import React from "react";
import {NavLink} from "react-router-dom";
import logo from './../img/logo.png'
import s from './Header.module.css'

export const Header = () => {
    return (
        <header>
            <div>
                <img src={logo} alt=""/>
            </div>
            <div className={s.headerLinks}>
                <ul>
                    <li><NavLink className={s.link} to ='/skills'>Skills</NavLink></li>
                    <li><NavLink className={s.link} to ='/portfolio'>Portfolio</NavLink></li>
                    <li><NavLink className={s.link} to ='/video'>Video</NavLink></li>
                    <li><NavLink className={s.link} to ='/price'>Price</NavLink></li>
                    <li><NavLink className={s.link} to ='/contacts'>Contacts</NavLink></li>
                </ul>
            </div>
            <div className={s.headerLanguage}>
                <NavLink className={s.linkEn} to ='/Main'>en</NavLink> / <NavLink className={s.linkRu} to ='/Main'>ru</NavLink>
            </div>
        </header>
    )
}