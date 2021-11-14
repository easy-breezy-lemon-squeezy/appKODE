import React from 'react';
import styles from "./TabsPanel.module.css";

import {NavLink} from 'react-router-dom';
function TabsPanel() {
    return (
        <div className={styles.panelWrapper}>
                <div className={styles.panel}>
                        <NavLink to="/"><span>Все</span></NavLink>
                        <NavLink to="/android"><span>Android</span></NavLink>
                        <NavLink to="/ios"><span>iOS</span></NavLink>
                        <NavLink to="/design"><span>Дизайн</span></NavLink>
                        <NavLink to="/management"><span>Менеджмент</span></NavLink>
                        <NavLink to="/qa"><span>QA</span></NavLink>
                        <NavLink to="/back_office"><span>Бэк-офис</span></NavLink>
                        <NavLink to="/frontend"><span>Frontend</span></NavLink>
                        <NavLink to="/hr"><span>HR</span></NavLink>
                        <NavLink to="/pr"><span>PR</span></NavLink>
                        <NavLink to="/backend"><span>Backend</span></NavLink>
                        <NavLink to="/support"><span>Техподдержка</span></NavLink>
                        <NavLink to="/analytics"><span>Аналитика</span></NavLink>
                </div>
        </div>

    );
}
export default TabsPanel;