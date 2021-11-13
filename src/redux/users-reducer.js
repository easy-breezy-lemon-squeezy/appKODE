import axios from "axios";
import React from "react";

const SET_USERS = 'SET_USERS';
const TOGGLE_IS_ERROR = 'TOGGLE_IS_ERROR';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const TOGGLE_FILTER_MODE = 'TOGGLE_FILTER_MODE';
const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';

let initialState = {
    users: [],
    isError: false,
    profile: [],
    filterMode: '',
    searchText: ''
}
const usersReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USERS:{
            return {...state, users: action.users}
        }
        case TOGGLE_IS_ERROR:{
            return {...state, isError: true}
        }
        case SET_USER_PROFILE:{
            return {...state, profile: action.profile}
        }
        case TOGGLE_FILTER_MODE:{
            return {...state, filterMode: action.filterMode}
        }
        case SET_SEARCH_TEXT:{
            return {...state, searchText: action.searchText}
        }
        default:
            return state;
    }

}
export const setUsers = (users) => ({type: SET_USERS, users})
export const toggleIsError = () => ({type: TOGGLE_IS_ERROR})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const toggleFilterMode = (filterMode) => ({type: TOGGLE_FILTER_MODE, filterMode})
export const setSearchText = (searchText) => ({type: SET_SEARCH_TEXT, searchText})

export const getUsers = () => async(dispatch) => {
        try {
            const users = await axios
                .get(`https://stoplight.io/mocks/kode-education/trainee-test/25143926/users`)
                .then(res => res.data)
            dispatch(setUsers(users));

        }
        catch (err) {
            dispatch(toggleIsError());
        }
}

export default usersReducer;