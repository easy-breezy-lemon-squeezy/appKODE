import axios from "axios";

const SET_USERS = 'SET_USERS';
const TOGGLE_IS_ERROR = 'TOGGLE_IS_ERROR';

let initialState = {
    users:[],
    isError: false,
    profile: "null"
}
const usersReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USERS:{
            return {...state, users: action.users}
        }
        case TOGGLE_IS_ERROR:{
            return {...state, isError: true}
        }
        default:
            return state;
    }

}
export const setUsers = (users) => ({type: SET_USERS, users})
export const toggleIsError = (error) => ({type: TOGGLE_IS_ERROR, isError: error})

export const getUsers = () => async(dispatch) => {
        try {
            const users = await axios
                .get(`https://stoplight.io/mocks/kode-education/trainee-test/25143926/users`)
                .then(res => res.data)

            dispatch(setUsers(users));
        }
        catch (err) {
            dispatch(toggleIsError(true));
        }
}

export default usersReducer;