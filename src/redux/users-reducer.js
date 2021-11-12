import axios from "axios";
import React from "react";

const SET_USERS = 'SET_USERS';
const TOGGLE_IS_ERROR = 'TOGGLE_IS_ERROR';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const TOGGLE_IS_ALPHABETICALLY = 'TOGGLE_IS_ALPHABETICALLY';

let initialState = {
    users: [],
    isError: false,
    profile: [],
    isAlphabetically: false
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
        case TOGGLE_IS_ALPHABETICALLY:{
            return {...state, isAlphabetically: true}
        }
        default:
            return state;
    }

}
export const setUsers = (users) => ({type: SET_USERS, users})
export const toggleIsError = () => ({type: TOGGLE_IS_ERROR})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const toggleIsAlphabetically = (mode) => ({type: TOGGLE_IS_ALPHABETICALLY, isAlphabetically:mode})

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