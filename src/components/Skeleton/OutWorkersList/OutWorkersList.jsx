import React from 'react';
import WorkersList from "./WorkersList/WorkersList";


function OutWorkersList(props) {
    if (props.filterMode === 'alphabetically'){
        const users = props.users.items.sort(function(a, b){
            if(a.firstName < b.firstName) { return -1; }
            if(a.firstName > b.firstName) { return 1; }
            return 0;})
        return (
            <WorkersList users={users}/>
        );
    }
    else if(props.filterMode === 'byBirthday') {
        const users =  filterByBirthday(props.users.items);
        return (
            <WorkersList users={users} mode={'byBirthday'}/>
        );
    }
    else{
        return (
            <WorkersList users={props.users.items}/>
        );
    }

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

export default OutWorkersList;