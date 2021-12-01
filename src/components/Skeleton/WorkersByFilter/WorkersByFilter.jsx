import React from 'react';
import WorkersByDepartment from "./WorkersByDepartment/WorkersByDepartment";


function WorkersByFilter(props) {
    let users = props.users;
    if (props.searchText!=="Введи имя, тег, почту..."&&props.searchText){
        const usersByFirstName = users.filter(item => item.name.first.toLowerCase().startsWith(props.searchText.toLowerCase()) &&
            item.name.first.toLowerCase().includes(props.searchText.toLowerCase()));
        const usersByLastName = users.filter(item => item.name.last.toLowerCase().startsWith(props.searchText.toLowerCase())&&
            item.name.last.toLowerCase().includes(props.searchText.toLowerCase()));
        const usersByUserTag = users.filter(item => item.name.first.toLowerCase().startsWith(props.searchText.toLowerCase())&&
            item.name.first.toLowerCase().includes(props.searchText.toLowerCase()));
        const usersArray =  usersByFirstName.concat(usersByLastName, usersByUserTag).flat();
        const uniq = [...new Set(usersArray)];
        users = uniq
    }

    if (props.filterMode === 'alphabetically'){
        users = filterAlphabetically(users)
        return (
            <WorkersByDepartment users={users} setUserProfile={props.setUserProfile} profile={props.profile}/>
        );
    }
    else if(props.filterMode === 'byBirthday') {
        users = filterByBirthday(users)
        return (
            <WorkersByDepartment users={users} mode={'byBirthday'} setUserProfile={props.setUserProfile} profile={props.profile}/>
        );
    }
    else{
        return (
            <WorkersByDepartment users={users} setUserProfile={props.setUserProfile} profile={props.profile}/>
        );
    }

}
const filterAlphabetically = (users) => {
    return users.sort(function(a, b){
        if(a.name.first < b.name.first) { return -1; }
        if(a.name.first > b.name.first) { return 1; }
        return 0;})
}
const filterByBirthday = (users) =>{
    for(let item of users){
        let dd = new Date(item.dob.date).getDate()
        let mm = new Date(item.dob.date).getMonth()
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

export default WorkersByFilter;