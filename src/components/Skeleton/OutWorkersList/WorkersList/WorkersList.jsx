import Worker from "./Worker/Worker";
import React from "react";
import styles from "../OutWorkersList.module.css";
import {Route, Routes} from "react-router-dom";
import Profile from "../../Profile/Profile";

const AllUsers = (props) => {
    return (<div>{props.users.map(u => <Worker key={u.id} user={u} setUserProfile={props.setUserProfile}/>)}</div>)
}
const FilterDepartment = (props) => {
    return (<div>{props.users.filter(item =>
        item.department.includes(props.department)).map(item =>
        <Worker key={item.id} user={item} setUserProfile={props.setUserProfile}/>
    )} </div>)
}

function WorkersList(props) {

    return (
        <div className={styles.workerList}>

            <Routes>
                <Route path="/" element={<AllUsers users={props.users} setUserProfile={props.setUserProfile}/>}/>
                <Route path="/designers" element={<FilterDepartment users={props.users} department={'design'}
                                                               setUserProfile={props.setUserProfile}/>}/>
                <Route path="/analysts" element={<FilterDepartment users={props.users} department={'analytics'}
                                                              setUserProfile={props.setUserProfile}/>}/>
                <Route path="/frontend" element={<FilterDepartment users={props.users} department={'frontend'}
                                                              setUserProfile={props.setUserProfile}/>}/>
                <Route path="/backend" element={<FilterDepartment users={props.users} department={'backend'}
                                                             setUserProfile={props.setUserProfile}/>}/>
                <Route path="/ios" element={<FilterDepartment users={props.users} department={'ios'}
                                                         setUserProfile={props.setUserProfile}/>}/>
                <Route path="/android" element={<FilterDepartment users={props.users} department={'android'}
                                                             setUserProfile={props.setUserProfile}/>}/>
                <Route path="/qa" element={<FilterDepartment users={props.users} department={'qa'}
                                                        setUserProfile={props.setUserProfile}/>}/>
                <Route path="/hr" element={<FilterDepartment users={props.users} department={'hr'}
                                                        setUserProfile={props.setUserProfile}/>}/>
                <Route path="/management" element={<FilterDepartment users={props.users} department={'management'}
                                                                setUserProfile={props.setUserProfile}/>}/>
                <Route path="/back_office" element={<FilterDepartment users={props.users} department={'back_office'}
                                                                 setUserProfile={props.setUserProfile}/>}/>
                <Route path="/support" element={<FilterDepartment users={props.users} department={'support'}
                                                             setUserProfile={props.setUserProfile}/>}/>
                <Route path="/pr" element={<FilterDepartment users={props.users} department={'pr'}
                                                        setUserProfile={props.setUserProfile}/>}/>
                <Route path="/profile" element={<Profile profile={props.profile}/>}/>
            </Routes>
        </div>
    );

}

export default WorkersList;