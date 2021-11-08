import React from 'react';
import styles from "./CriticalError.module.css";
import error from "./../../../images/error.png";
function CriticalError() {
    return (
        <div className={styles.criticalError}>
            <img src={error}/>
            <h3>Какой-то сверхразум все сломал</h3>
            <p>Постараемся быстро починить</p>
            <a href="/">Попробовать снова</a>
        </div>
    );
}

export default CriticalError;