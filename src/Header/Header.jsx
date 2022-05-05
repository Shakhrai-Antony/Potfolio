import React, {useState} from "react";
import logo from './../img/logo.png'
import s from './Header.module.css'
import {useLockBodyScroll, useToggle} from 'react-use';

export const Header = () => {
        const [locked, toggleLocked] = useToggle(false)
        useLockBodyScroll(locked);
        const toggleUnlock = () => {
            if (locked === true) {
                toggleLocked(false)
            }
        }

    return (
        <header>
            <div className={locked === true ? s.hideContent : null}></div>
            <div>
                <img src={logo} alt=""/>
            </div>
            <nav className={s.headerLinks}>
                <input checked={locked} onChange={ () => toggleLocked() }  id="menu__toggle" className={s.menu__toggle} type="checkbox"/>
                <label className={s.menu__button} htmlFor="menu__toggle">
                    <span></span>
                </label>
                <ul onClick={toggleUnlock} className={s.ulLinks}>
                    <li><a href='#skills' className={s.link}>Skills</a></li>
                    <li><a href="#portfolio" className={s.link}>Portfolio</a></li>
                    <li><a href='#video' className={s.link}>Video</a></li>
                    <li><a href='#price' className={s.link}>Price</a></li>
                    <li><a href='#contacts' className={s.link}>Contacts</a></li>
                </ul>
            </nav>
            <div className={s.headerLanguage}>
                <a href='#main' className={s.linkEn}>en</a> / <a href='#main' className={s.linkRu}>ru</a>
            </div>
        </header>
    )
}