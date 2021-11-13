import React from 'react';
import styles from "./TabsPanel.module.css";

import {NavLink} from 'react-router-dom';
function TabsPanel() {
    return (
        <div className={styles.panel}>
            <NavLink to="/"><span>Все</span></NavLink>
            <NavLink to="/design"><span>Designers</span></NavLink>
            <NavLink to="/analytics"><span>Analysts</span></NavLink>
            <NavLink to="/frontend"><span>Frontend</span></NavLink>
            <NavLink to="/backend"><span>Backend</span></NavLink>
            <NavLink to="/ios"><span>IOS</span></NavLink>
            <NavLink to="/android"><span>Android</span></NavLink>
            <NavLink to="/qa"><span>QA</span></NavLink>
            <NavLink to="/hr"><span>HR</span></NavLink>
            <NavLink to="/management"><span>Managers</span></NavLink>
            <NavLink to="/back_office"><span>Back Office</span></NavLink>
            <NavLink to="/support"><span>Support</span></NavLink>
            <NavLink to="/pr"><span>PR</span></NavLink>
        </div>
    );
}
export default TabsPanel;