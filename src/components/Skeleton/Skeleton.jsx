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
                <NavigationBar activateModalWindow={props.activateModalWindow}/>
                <div className={styles.appWrapperContent}>

                    {props.isError
                        ? <CriticalError/>
                        : ((props.users.length === 0) ? <LoadingWorkersList/> : (<WorkersList users={props.users}
                          profile={props.profile} setUserProfile={props.setUserProfile}
                          isAlphabetically={props.isAlphabetically}
                          isActivateModalWindow={props.isActivateModalWindow}
                          deactivateModalWindow={props.deactivateModalWindow}
                        />))
                    }

                </div>
            </div>
        </div>

    )
}
export default Skeleton;