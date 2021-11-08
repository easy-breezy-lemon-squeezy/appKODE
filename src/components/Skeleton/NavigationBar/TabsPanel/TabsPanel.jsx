import React from 'react';
import styles from "./TabsPanel.module.css";

import {NavLink} from 'react-router-dom';
function TabsPanel() {

    return (
        <div className={styles.panel}>
            <NavLink activeclassname={styles.active} to="/all"><span>Все</span></NavLink>
            <NavLink activeclassname={styles.active} to="/designers"><span>Designers</span></NavLink>
            <NavLink activeclassname={styles.active} to="/analysts"><span>Analysts</span></NavLink>
            <NavLink activeclassname={styles.active} to="/managers"><span>Managers</span></NavLink>
            <NavLink activeclassname={styles.active} to="/ios"><span>iOS</span></NavLink>
            <NavLink activeclassname={styles.active} to="/android"><span>Android</span></NavLink>
        </div>
    );
}
export default TabsPanel;