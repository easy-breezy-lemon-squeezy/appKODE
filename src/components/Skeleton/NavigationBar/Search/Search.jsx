import React from 'react';
import styles from "./Search.module.css"
import {SearchInput} from "./SearchForm/SearchForm";
function Search(props) {

    return (
        <div>
            <div className={styles.search}>
                <div className={styles.text}><h3>Поиск</h3></div>
                <SearchInput toggleFilterMode={props.toggleFilterMode} setSearchText={props.setSearchText}/>
            </div>
        </div>
    );
}
export default Search;