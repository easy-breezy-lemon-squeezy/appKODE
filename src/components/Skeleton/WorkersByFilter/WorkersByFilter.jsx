import React from 'react';
import WorkersByDepartment from "./WorkersByDepartment/WorkersByDepartment";
import {Navigate} from "react-router-dom";


function WorkersByFilter(props) {
    if (props.filterMode === 'alphabetically'){
        const users = filterAlphabetically(props.users.items);
        return (
            <WorkersByDepartment users={users} setUserProfile={props.setUserProfile} profile={props.profile}/>
        );
    }
    else if(props.filterMode === 'byBirthday') {
        const users =  filterByBirthday(props.users.items);
        return (
            <WorkersByDepartment users={users} mode={'byBirthday'} setUserProfile={props.setUserProfile} profile={props.profile}/>
        );
    }
    else if(props.filterMode === 'bySearch') {

        const users = props.users.items

        const usersByFirstName = users.filter(item => item.firstName.toLowerCase().startsWith(props.searchText.toLowerCase()) &&
            item.firstName.toLowerCase().includes(props.searchText.toLowerCase()));
        const usersByLastName = users.filter(item => item.lastName.toLowerCase().startsWith(props.searchText.toLowerCase())&&
            item.lastName.toLowerCase().includes(props.searchText.toLowerCase()));
        const usersByUserTag = users.filter(item => item.userTag.toLowerCase().startsWith(props.searchText.toLowerCase())&&
            item.userTag.toLowerCase().includes(props.searchText.toLowerCase()));

        const usersArray =  usersByFirstName.concat(usersByLastName, usersByUserTag).flat();
        const uniq = [...new Set(usersArray)];

        return (
            <>
                <WorkersByDepartment users={uniq} setUserProfile={props.setUserProfile} profile={props.profile} mode={'bySearch'}/>
            </>
        );
    }
    else{
        return (
            <WorkersByDepartment users={props.users.items} setUserProfile={props.setUserProfile} profile={props.profile}/>
        );
    }

}
const filterAlphabetically = (users) => {
    return users.sort(function(a, b){
        if(a.firstName < b.firstName) { return -1; }
        if(a.firstName > b.firstName) { return 1; }
        return 0;})
}
const filterByBirthday = (users) =>{
    for(let item of users){
        let dd = new Date(item.birthday).getDate()
        let mm = new Date(item.birthday).getMonth()
        let currentYear = new Date().getFullYear();
        let birthdayDate = new Date(currentYear, mm, dd)
        let now = new Date().valueOf();
        if (birthdayDate.valueOf() < now){
            birthdayDate.setFullYear(currentYear+1)
        }
        item.fromNow = Number(birthdayDate.valueOf() - now);
    }

    users = users.sort(function(a, b){
        return a.fromNow - b.fromNow
    })

    return users;
}
const filterBySearch = (users) => {
    return users.sort(function(a, b){
        if(a.firstName < b.firstName) { return -1; }
        if(a.firstName > b.firstName) { return 1; }
        return 0;})
}
export default WorkersByFilter;