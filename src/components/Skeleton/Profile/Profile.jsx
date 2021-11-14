import styles from "./Profile.module.css";
import React from "react";
import right from "../../../images/icons/right.svg";
import number from "../../../images/icons/number.svg";
import favorite from "../../../images/icons/favorite.svg";
import {NavLink,Navigate} from "react-router-dom";

function Profile(props) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    if (props.profile.length === 0){
        return (
            <><Navigate to="/" /></>
        )
    }
    return (
        <div className={styles.profileWrapper}>
            <div className={styles.profileHeader}>
                <div className={styles.backButton}>
                    <NavLink to={"/"}>
                         <img src={right} alt={''}/>
                    </NavLink>
                </div>
                <div className={styles.infoProfile}>
                    <img src={props.profile.avatarUrl} alt={''}/>
                    <div className={styles.nameProfile}>
                        <h3>{props.profile.firstName} {props.profile.lastName}<span>{props.profile.userTag.toLowerCase()}</span></h3>
                    </div>
                    <div className={styles.departmentProfile}>
                        <p>{props.profile.department}</p>
                    </div>
                </div>
            </div>
            <div className={styles.contactsBlock}>
                <div className={styles.birthday}>
                    <img src={favorite} alt={''}/>
                    <p>{new Date(props.profile.birthday).getDate() + " " + months[new Date(props.profile.birthday).getMonth()] +
                     " " + new Date(props.profile.birthday).getFullYear()}</p>
                    <div className={styles.age}>
                        <p>{(new Date().getFullYear()) - (new Date(props.profile.birthday).getFullYear())} years</p>
                    </div>
                </div>
                <div className={styles.number}>
                    <img src={number} alt={''}/><p>{props.profile.phone}</p>
                </div>
            </div>
        </div>

    )
}


export default Profile;