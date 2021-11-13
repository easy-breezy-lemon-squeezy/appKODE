import React, {useState} from 'react';
import styles from "./Worker.module.css";
import {NavLink} from "react-router-dom";

function Worker(props) {
     const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
     return (
         <div className={styles.worker}>
             <div className={styles.workerWrapper} >
                 <div className={styles.imageWorker}>
                     <NavLink to="/profile" onClick={() => props.setUserProfile(props.user)}>
                         <img src={props.user.avatarUrl}/>
                     </NavLink>

                 </div>
                 <div className={styles.infoWorker}>
                     <NavLink to="/profile" onClick={() => props.setUserProfile(props.user)}>
                         <div className={styles.name}>
                             <h3>{props.user.firstName} {props.user.lastName} </h3>
                             <p>{(props.user.userTag).toLowerCase()}</p>
                             <div className={styles.bithText}>
                                 <p>{props.mode === 'byBirthday' ?
                                    new Date(props.user.birthday).getDate() + " " + months[new Date(props.user.birthday).getMonth()]: ""}
                                 </p>
                             </div>
                        </div>
                    </NavLink>
                    <div className={styles.department}>
                        <p>{props.user.department} </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Worker;