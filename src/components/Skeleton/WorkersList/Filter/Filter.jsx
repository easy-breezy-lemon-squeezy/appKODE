import React from 'react';
import styles from "./Filter.module.css";


function Filter({active, setActive}) {
    return (
        <div className={styles.filter}>
            <div className={styles.filterWrapper}>
                <div className={styles.window}>

                </div>

            </div>
        </div>

    );
}
export default Filter;