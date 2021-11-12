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
                <NavigationBar toggleFilterMode={props.toggleFilterMode}/>
                <div className={styles.appWrapperContent}>
                    {props.isError
                        ? <CriticalError/>
                        : ((props.users.length === 0) ? <LoadingWorkersList/> : (<OutWorkersList users={props.users}
                          profile={props.profile} setUserProfile={props.setUserProfile}
                          filterMode={props.filterMode}
                        />))
                    }

                </div>
            </div>
        </div>

    )
}
export default Skeleton;