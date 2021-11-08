import React from 'react';
import NavigationBar from "./NavigationBar/NavigationBar";
import styles from "./Skeleton.module.css"
import {Route, Routes} from "react-router-dom";
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
                        : ((props.users.length === 0) ? <LoadingWorkersList/> : <WorkersList users={props.users}/>)
                    }

                </div>
            </div>
        </div>

    )


    /*
    if(props.users.length === 0){
        return (
            <div>
                <div className={styles.appWrapper}>
                    <NavigationBar/>
                    <div className={styles.appWrapperContent}>
                         <LoadingWorkersList/>
                    </div>
                </div>
            </div>
        )
    }
    if(props.users.length === 0){
        return (
            <div>
                <div className={styles.appWrapper}>
                    <NavigationBar/>
                    <div className={styles.appWrapperContent}>

                        <WorkersListContainer users={props.users}/>
                        {

                        <CriticalError/>
                        <Routes>
                            <Route path="/all" element={<LoadingWorkersList/>}/>
                            <Route path="/designers" element={<WorkersList workerType={"designers"}/>}/>
                            <Route path="/analysts" element={<WorkersList workerType={"analysts"}/>}/>
                            <Route path="/managers" element={<WorkersList workerType={"managers"}/>}/>
                            <Route path="/ios" element={<WorkersList workerType={"ios"}/>}/>
                            <Route path="/android" element={<WorkersList workerType={"android"}/>}/>
                        </Routes>}
                    </div>
                </div>
            </div>
        );
    }*/

}
export default Skeleton;