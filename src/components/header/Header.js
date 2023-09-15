import React from "react";
import s from "./Header.module.css";

function Header() {
    return (
        <div className={s.header}>
            <div className={s.kittensBtn}>
                <a href="/">Все котики</a>
            </div>
            <div className={s.lovelyBtn}>
                <a href="/lovely">Любимые котики</a>
            </div>
        </div>
    );
}

export default Header;