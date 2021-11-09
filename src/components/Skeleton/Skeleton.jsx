import React from 'react';
import NavigationBar from "./NavigationBar/NavigationBar";
import styles from "./Skeleton.module.css"
import LoadingWorkersList from "./LoadingWorkersList/LoadingWorkersList";
import WorkersList from "./WorkersList/WorkersList";
import CriticalError from "./CriticalError/CriticalError";

function Skeleton(props) {
    return (
        <div>
            <div className={styles.appWrapper}>
                <NavigationBar/>
                <div className={styles.appWrapperContent}>
                    {props.isError
                        ? <CriticalError/>
                        : ((props.users.length === 0) ? <LoadingWorkersList/> : (<WorkersList users={props.users}/>))
                    }

                </div>
            </div>
        </div>

    )
}
export default Skeleton;