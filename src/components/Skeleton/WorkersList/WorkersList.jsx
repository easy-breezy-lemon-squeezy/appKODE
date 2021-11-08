import React from 'react';
import styles from "./WorkersList.module.css";
import Worker from "./Worker/Worker";
function WorkersList(props) {
    console.log(props.users)
    return (
        <div className={styles.workerList}>
            {props.users.items.map(u => <Worker key={u.id} user={u}/>)}
        </div>
    );
}

export default WorkersList;