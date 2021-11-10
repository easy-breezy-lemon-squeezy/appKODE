import styles from "./Profole.module.css";
import React from "react";
import right from "../../images/icons/right.svg";
import number from "../../images/icons/number.svg";
import favorite from "../../images/icons/favorite.svg";
import rectangle from "./../../images/rectangle.png";
function Profile(props) {
    return (
        <div className={styles.profileWrapper}>
            <div className={styles.profileHeader}>
                <div className={styles.backButton}>
                    <img src={right}/>
                </div>
                <div className={styles.infoProfile}>
                    <img src={rectangle} />
                    <div className={styles.nameProfile}>
                        <h3>Максим лох<span>al</span></h3>
                    </div>
                    <div className={styles.departmentProfile}>
                        <p>Киберкотлета</p>
                    </div>
                </div>
            </div>
            <div className={styles.contactsBlock}>
                <div className={styles.birthday}>
                    <img src={favorite}/>
                    <p>5 июня 1996</p>
                    <div className={styles.age}><p>24 года</p></div>
                </div>
                <div className={styles.number}>
                    <img src={number}/><p>+7 (999) 900 90 90</p>
                </div>
            </div>
        </div>

    )
}
export default Profile;