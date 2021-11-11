import React from 'react';
import styles from "./Filter.module.css";
import close from  "./../../../../images/icons/close.svg"

function Filter({active, setActive}) {
    return (
        <div className={styles.filter}>
            <div className={styles.window}>
                <div className={styles.headerFilter}>
                    <h3>Сортировка</h3><div className={styles.closeCircle}><img src={close}/></div>
                </div>
                <div className={styles.typesFilter}>
                    <div className={styles.formRadio}>
                        <input type="radio" name="rb" id="rb1" checked/> <label htmlFor="rb1"><span>По алфавиту</span></label>
                    </div>
                    <div className={styles.formRadio}>
                        <input type="radio" name="rb" id="rb2"/> <label htmlFor="rb2"><span>По дню рождения</span></label>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Filter;