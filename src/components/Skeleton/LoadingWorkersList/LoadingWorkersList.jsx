import React from 'react';
import styles from "./LoadingWorkersList.module.css";
import { v4 as uuidv4 } from 'uuid';

function LoadingWorkersList() {
    let outList = [];
    for (let i = 0; i < 7; i++) {
        outList.push(<LoadingWorker key={uuidv4()}/>);
    }
    return (
        <div className={styles.loadingWorkersList}>
            {outList}
        </div>
    );
}
function LoadingWorker() {
    return (
        <div className={styles.loadingWorker}>
            <div className={styles.imageWorker}/>
            <div className={styles.infoWorker}>
                <div className={styles.name}/>
                <div className={styles.department}/>
            </div>
        </div>
    );
}
export default LoadingWorkersList;

