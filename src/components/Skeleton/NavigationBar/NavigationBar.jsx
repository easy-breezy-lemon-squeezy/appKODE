import React from 'react';
import styles from "./NavigationBar.module.css"
import Search from "./Search/Search";
import TabsPanel from "./TabsPanel/TabsPanel";
function NavigationBar(props) {

    return (
        <div className={styles.barWrapper}>
            <Search toggleIsAlphabetically={props.toggleIsAlphabetically}/>
            <TabsPanel/>
        </div>
    );
}
export default NavigationBar;