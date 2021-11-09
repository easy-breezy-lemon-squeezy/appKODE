import styles from "./Profole.module.css";
import React from "react";
import right from "./../../images/right.svg";
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
                        <h3>Алиса Иванова</h3><p>al</p>
                    </div>
                    <div className={styles.departmentProfile}>
                        <p>Designer</p>
                    </div>
                </div>
            </div>
            <div className={styles.contactsBlock}>
                <div className={styles.birthday}>
                    5 июня 1996
                </div>
                <div className={styles.number}>
                    +7 (999) 900 90 90
                </div>
            </div>
        </div>

    )
}
export default Profile;