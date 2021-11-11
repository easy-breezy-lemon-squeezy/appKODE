import React, {useState} from "react";
import styles from "./Forms.module.css";
import filter from "../../../images/icons/filtr.svg";
import search from "../../../images/icons/search.svg";
import Filter from "./Filter/Filter";

export const SearchInput = (props) => {
    const [modalActive, setModalActive] = useState(false);
    return (
        <div className={styles.inputSearch}>
            <div className={styles.inputWrapper}>
                <div className={styles.search}>
                    <img src={search}/>
                </div>
                <input type="search" name="search" type="text" placeholder="Введи имя, тег, почту..."/>

                <div onClick={() => setModalActive(true)} className={styles.filter}>
                    <img src={filter}/>
                </div>

            </div>
            <div className={modalActive ? styles.filterWindow & styles.active : styles.filterWindow }>
                <Filter setActive={setModalActive}/>
            </div>

        </div>
    )
}