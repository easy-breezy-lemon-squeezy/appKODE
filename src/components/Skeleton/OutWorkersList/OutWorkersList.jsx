import React from 'react';
import WorkersList from "./WorkersList/WorkersList";

function OutWorkersList(props) {

    if (props.isAlphabetically === true){
        const users = props.users.items.sort(function(a, b){
            if(a.firstName < b.firstName) { return -1; }
            if(a.firstName > b.firstName) { return 1; }
            return 0;})

        return (
            <WorkersList users={users}/>
        );
    }
    else {
        return (
            <WorkersList users={props.users.items}/>
        );
    }

}

export default OutWorkersList;