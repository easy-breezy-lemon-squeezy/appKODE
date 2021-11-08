import React from 'react';
import styles from "./NavigationBar.module.css"
import Search from "./Search/Search";
import TabsPanel from "./TabsPanel/TabsPanel";
function NavigationBar() {

    return (
        <div className={styles.barWrapper}>
            <Search/>
            <TabsPanel/>
        </div>
    );
}
export default NavigationBar;