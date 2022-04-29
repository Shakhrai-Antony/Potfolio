import React, {useState} from "react";
import s from "./burgerBtn.module.css";
import {BurgerMenu} from "./BurgerMenu";

export const BurgerBtn = () => {
    const [menuActive, setMenuActive] = useState(false)
    const items = [{value: 'skills', href: '#skills'},{value: 'portfolio', href: '#portfolio'},
        {value: 'video', href: '#video'},{value: 'price', href: '#price'},{value: 'contacts', href: '#contacts'} ]
    return (
        <div>
            <nav>
                <div className={s.burgerBtn} onClick={() => setMenuActive(!menuActive)}>
                    <span/>
                </div>
            </nav>
            <BurgerMenu menuActive={menuActive} setMenuActive={setMenuActive} items={items}/>
        </div>
    )
}