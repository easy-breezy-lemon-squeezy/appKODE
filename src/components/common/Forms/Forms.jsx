import React from "react";
import styles from "./Forms.module.css";
import filter from "./../../../images/filtr.svg";
import search from "./../../../images/search.svg";

export const SearchInput = (props) => {

    return (
        <div className={styles.inputSearch}>
            <div className={styles.inputWrapper}>
                <div className={styles.search}>
                    <img src={search}/>
                </div>
                <input type="search" name="search" type="text" placeholder="Введи имя, тег, почту..."/>
                <div className={styles.filter}>
                    <img src={filter}/>
                </div>
            </div>
        </div>
    )
}