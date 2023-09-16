import React from "react";
import s from "./Header.module.css";
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className={s.header}>
            <div className={s.kittensBtn}>
                <Link to="/" reloadDocument>Все котики</Link>
            </div>
            <div className={s.lovelyBtn}>
                <Link to="/lovely" reloadDocument>Любимые котики</Link>
            </div>
        </div>
    );
}

export default Header;