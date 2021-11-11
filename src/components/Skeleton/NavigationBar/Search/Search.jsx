import React from 'react';
import styles from "./Search.module.css"
import {SearchInput} from "../../../common/Forms/Forms";
function Search(props) {

    return (
        <div>
            <div className={styles.search}>
                <div className={styles.text}>Поиск</div>
                <SearchInput activateModalWindow={props.activateModalWindow}/>
            </div>
        </div>
    );
}
export default Search;