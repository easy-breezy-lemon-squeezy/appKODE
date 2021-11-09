import React from 'react';
import styles from "./Search.module.css"
import {SearchInput} from "../../../common/Forms/Forms";
function Search() {

    return (
        <div>
            <div className={styles.search}>
                <div className={styles.text}>Поиск</div>
                <SearchInput/>
            </div>
        </div>
    );
}
export default Search;