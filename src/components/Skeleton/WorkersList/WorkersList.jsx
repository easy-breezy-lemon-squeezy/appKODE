import React from 'react';
import styles from "./WorkersList.module.css";
import Worker from "./Worker/Worker";
import {Route, Routes} from "react-router-dom";
import Profile from "../../Profile/Profile";

const AllUsers = (props) => {
    return (<div>{props.users.map(u => <Worker key={u.id} user={u}/>)}</div>)
}
const FilterUsers = (props) => {
    return (<div>{props.users.filter(item =>
        item.department.includes(props.department)).map(item =>
        <Worker key={item.id} user={item}/>)} </div>)
}

function WorkersList(props) {
    const users = props.users.items;

    return (
        <div className={styles.workerList}>
            <Routes>
                <Route path="/" element={<AllUsers users={users}/>}/>
                <Route path="/designers" element={ <FilterUsers users={users} department={'design'}/>}/>
                <Route path="/analysts" element={<FilterUsers users={users} department={'analytics'}/>}/>
                <Route path="/frontend" element={<FilterUsers users={users} department={'frontend'}/>}/>
                <Route path="/backend" element={<FilterUsers users={users} department={'backend'}/>}/>
                <Route path="/ios" element={<FilterUsers users={users} department={'ios'}/>}/>
                <Route path="/android" element={<FilterUsers users={users} department={'android'}/>}/>
                <Route path="/qa" element={<FilterUsers users={users} department={'qa'}/>}/>
                <Route path="/hr" element={<FilterUsers users={users} department={'hr'}/>}/>
                <Route path="/management" element={<FilterUsers users={users} department={'management'}/>}/>
                <Route path="/back_office" element={<FilterUsers users={users} department={'back_office'}/>}/>
                <Route path="/support" element={<FilterUsers users={users} department={'support'}/>}/>
                <Route path="/pr" element={<FilterUsers users={users} department={'pr'}/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>

        </div>
    );
}

export default WorkersList;