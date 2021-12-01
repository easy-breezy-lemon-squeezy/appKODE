import React from 'react';
import styles from "./Worker.module.css";
import {NavLink} from "react-router-dom";

function Worker(props) {
     const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
     return (
         <div className={styles.worker}>
             <div className={styles.workerWrapper} >
                 <div className={styles.imageWorker}>
                     <NavLink to="/profile" onClick={() => props.setUserProfile(props.user)}>
                         <img src={props.user.picture.large} alt={''}/>
                     </NavLink>

                 </div>
                 <div className={styles.infoWorker}>
                     <NavLink to="/profile" onClick={() => props.setUserProfile(props.user)}>
                         <div className={styles.name}>
                             <h3>{props.user.name.first} {props.user.name.last} </h3>
                             <p>{(props.user.name.last).toLowerCase()}</p>
                             <div className={styles.bithText}>
                                 <p>{props.mode === 'byBirthday' ?
                                    new Date(props.user.dob.date).getDate() + " " + months[new Date(props.user.dob.date).getMonth()]: ""}
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