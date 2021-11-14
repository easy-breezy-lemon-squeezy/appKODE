import React from 'react';
import styles from "./NothingFound.module.css";
import nothingSearch from "../../../images/nothingSearch.svg";

function NothingFound() {
    return (
        <div className={styles.nothingFound}>
            <img src={nothingSearch} alt={''}/>
            <h3>Мы никого не нашли</h3>
            <p>Попробуй скорректировать запрос</p>
        </div>
    );
}

export default NothingFound;