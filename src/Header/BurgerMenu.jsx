import React from "react";
import s from './burgerMenu.module.css'

export const BurgerMenu = ({items, menuActive, setMenuActive}) => {
    return (
        <div className={menuActive ? s.menu.active : s.menu} onClick={() => setMenuActive(false)}>
            <div className={s.blur}>
                <div className={s.menuContent} onClick={e => e.stopPropagation()}>
                    <ul>
                        {items.map(item =>
                            <li>
                                <a href={item.href}>{item.value}</a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}