import React, {useState} from "react";
import styles from "./Forms.module.css";
import filter from "../../../images/icons/filtr.svg";
import search from "../../../images/icons/search.svg";
import ReactModal from 'react-modal';
import close from "../../../images/icons/close.svg";

export const SearchInput = (props) => {
    const [showModal, setShowModal] = useState(false);
    function handleOpenModal (){
        setShowModal(true );
    }
    function handleCloseModal (){
        setShowModal(false);
    }
    const toggleCheckbox = () => {
        function func() {
            return new Promise(resolve => setTimeout(() => {
                resolve();
                handleCloseModal();
            }, 1000));
        }
        func().then(() => (
            props.toggleFilterMode('alphabetically')));
    }
    return (
        <div className={styles.inputSearch} >
            <div className={styles.inputWrapper}>
                <div className={styles.search}>
                    <img src={search}/>
                </div>
                <input type="search" name="search" type="text" placeholder="Введи имя, тег, почту..."/>

                <div onClick={handleOpenModal} className={styles.filter}>
                    <img src={filter}/>
                </div>
                <ReactModal isOpen={showModal} className={styles.Modal} overlayClassName={styles.Overlay}>
                    <div className={styles.headerFilter}>
                        <h3>Сортировка</h3><div onClick={handleCloseModal} className={styles.closeCircle}><img src={close}/></div>
                    </div>
                    <div className={styles.typesFilter}>
                        <div className={styles.formRadio}>
                            <input type="radio" name="rb" id="rb1" onChange={toggleCheckbox}/> <label htmlFor="rb1"><span>По алфавиту</span></label>
                        </div>
                        <div className={styles.formRadio}>
                            <input type="radio" name="rb" id="rb2"/> <label htmlFor="rb2"><span>По дню рождения</span></label>
                        </div>
                    </div>
                </ReactModal>
            </div>

        </div>
    )
}