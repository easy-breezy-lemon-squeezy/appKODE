import React from 'react';
import NavigationBar from "./NavigationBar/NavigationBar";
import styles from "./Skeleton.module.css"
import LoadingWorkersList from "./LoadingWorkersList/LoadingWorkersList";
import CriticalError from "./CriticalError/CriticalError";
import OutWorkersList from "./OutWorkersList/OutWorkersList";

function Skeleton(props) {
    return (
        <div>
            <div className={styles.appWrapper}>
                <NavigationBar toggleIsAlphabetically={props.toggleIsAlphabetically}/>
                <div className={styles.appWrapperContent}>

                    {props.isError
                        ? <CriticalError/>
                        : ((props.users.length === 0) ? <LoadingWorkersList/> : (<OutWorkersList users={props.users}
                          profile={props.profile} setUserProfile={props.setUserProfile}
                          isAlphabetically={props.isAlphabetically}
                        />))
                    }

                </div>
            </div>
        </div>

    )
}
export default Skeleton;