import Worker from "./Worker/Worker";
import React from "react";
import styles from "./WorkersByDepartment.module.css";
import {Route, Routes} from "react-router-dom";
import Profile from "../../Profile/Profile";

function WorkersByDepartment(props) {
    const departments = ['design','analytics','frontend', 'backend','ios', 'android', 'qa', 'hr','management',
        'back_office','support', 'pr']
    return (
        <div className={styles.workerList}>
            <Routes>
                <Route path="/" element={<AllUsers users={props.users} mode={props.mode} setUserProfile={props.setUserProfile}/>}/>
                {departments.map((item,i) =>
                    <Route key={i} path={"/" + item} element={
                        <FilterDepartment users={props.users} department={item}
                                          mode={props.mode} setUserProfile={props.setUserProfile}/>}/>)}
                <Route path="/profile" element={<Profile profile={props.profile}/>}/>
            </Routes>
        </div>
    );

 }

const AllUsers = (props) => {
    if (props.mode === 'byBirthday') {
        return <DivideByNextYear users={props.users} mode={props.mode} setUserProfile={props.setUserProfile}/>
    }
    return (<div>{props.users.map(u => <Worker key={u.id} user={u} setUserProfile={props.setUserProfile}/>)}</div>)
}
const FilterDepartment = (props) => {
    if (props.mode === 'byBirthday') {
        const users = props.users.filter(item => item.department.includes(props.department))
        return (<DivideByNextYear users={users} mode={props.mode} setUserProfile={props.setUserProfile}/>)

    }
    return (<div>{props.users.filter(item =>
        item.department.includes(props.department)).map(item =>
        <Worker key={item.id} user={item} setUserProfile={props.setUserProfile}/>
    )} </div>)
}

const DivideByNextYear = (props) => {
    let currentMonth = new Date().getMonth()
    let currentDate = new Date().getDate()
    let currentYears=[]
    let nextYears=[]

    for(let item of props.users){
        item.monthBirthday=new Date(item.birthday).getMonth()
        item.dateBirthday=new Date(item.birthday).getDate()
        if (item.monthBirthday>currentMonth){
            currentYears.push(item)
        }else if (item.monthBirthday===currentMonth){
            if( item.dateBirthday>currentDate){
                currentYears.push(item)
            } else {
                nextYears.push(item)
            }
        } else {
            nextYears.push(item)
        }
    }
    const users = []
    for (let item of currentYears) {
        users.push(<Worker key={item.id} user={item} setUserProfile={props.setUserProfile} mode={props.mode}/>)
    }
    users.push(
        <div className={styles.divideYear}>
            <div className={styles.line}/>
            <div className={styles.yearText}><p>{(new Date().getFullYear() + 1).toString()}</p></div>
            <div className={styles.line}/>
        </div>)
    for (let item of nextYears) {
        users.push(<Worker key={item.id} user={item} setUserProfile={props.setUserProfile} mode={props.mode}/>)
    }
    return users
}
export default WorkersByDepartment;