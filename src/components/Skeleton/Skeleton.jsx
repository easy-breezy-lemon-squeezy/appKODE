import React from 'react';
import NavigationBar from "./NavigationBar/NavigationBar";
import styles from "./Skeleton.module.css"
import LoadingWorkersList from "./LoadingWorkersList/LoadingWorkersList";
import CriticalError from "./CriticalError/CriticalError";
import WorkersByFilter from "./WorkersByFilter/WorkersByFilter";

function Skeleton(props) {
    return (
        <div>
            <div className={styles.appWrapper}>
                <NavigationBar toggleFilterMode={props.toggleFilterMode} setSearchText={props.setSearchText}/>
                <div className={styles.appWrapperContent}>
                    {props.isError
                        ? <CriticalError/>
                        : ((props.users.length === 0) ? <LoadingWorkersList/> : (<WorkersByFilter users={props.users}
                                                                                                  profile={props.profile} setUserProfile={props.setUserProfile}
                                                                                                  filterMode={props.filterMode} searchText={props.searchText}
                        />))
                    }

                </div>
            </div>
        </div>

    )
}
export default Skeleton;