import React from 'react';
import styles from "./LoadingWorkersList.module.css";

function LoadingWorkersList() {
    let outList = [];
    for (let i = 0; i < 7; i++) {
        outList.push(<LoadingWorker/>);
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

