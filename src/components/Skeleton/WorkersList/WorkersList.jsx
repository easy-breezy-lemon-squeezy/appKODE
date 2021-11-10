import React, {useState} from 'react';
import styles from "./WorkersList.module.css";
import Worker from "./Worker/Worker";
import {Route, Routes} from "react-router-dom";
import Profile from "../Profile/Profile";
import Filter from "./Filter/Filter";

const AllUsers = (props) => {
    return (<div>{props.users.map(u => <Worker key={u.id} user={u} setUserProfile={props.setUserProfile}/>)}</div>)
}
const FilterUsers = (props) => {
    return (<div>{props.users.filter(item =>
        item.department.includes(props.department)).map(item =>
        <Worker key={item.id} user={item} setUserProfile={props.setUserProfile}/>
        )} </div>)
}

function WorkersList(props) {
    const users = props.users.items;

    const [modalActive, setModalActive] = useState(true);

    return (
        <div className={styles.workerList}>
            <Routes>
                <Route path="/" element={<AllUsers users={users} setUserProfile={props.setUserProfile}/>}/>
                <Route path="/designers" element={ <FilterUsers users={users} department={'design'} setUserProfile={props.setUserProfile}/>}/>
                <Route path="/analysts" element={<FilterUsers users={users} department={'analytics'} setUserProfile={props.setUserProfile}/>}/>
                <Route path="/frontend" element={<FilterUsers users={users} department={'frontend'} setUserProfile={props.setUserProfile}/>}/>
                <Route path="/backend" element={<FilterUsers users={users} department={'backend'} setUserProfile={props.setUserProfile}/>}/>
                <Route path="/ios" element={<FilterUsers users={users} department={'ios'} setUserProfile={props.setUserProfile}/>}/>
                <Route path="/android" element={<FilterUsers users={users} department={'android'} setUserProfile={props.setUserProfile}/>}/>
                <Route path="/qa" element={<FilterUsers users={users} department={'qa'} setUserProfile={props.setUserProfile}/>}/>
                <Route path="/hr" element={<FilterUsers users={users} department={'hr'} setUserProfile={props.setUserProfile}/>}/>
                <Route path="/management" element={<FilterUsers users={users} department={'management'} setUserProfile={props.setUserProfile}/>}/>
                <Route path="/back_office" element={<FilterUsers users={users} department={'back_office'} setUserProfile={props.setUserProfile}/>}/>
                <Route path="/support" element={<FilterUsers users={users} department={'support'} setUserProfile={props.setUserProfile}/>}/>
                <Route path="/pr" element={<FilterUsers users={users} department={'pr'} setUserProfile={props.setUserProfile}/>}/>
                <Route path="/profile" element={<Profile profile={props.profile}/>}/>
            </Routes>
            {/*<Filter active={modalActive} />*/}

        </div>
    );
}

export default WorkersList;