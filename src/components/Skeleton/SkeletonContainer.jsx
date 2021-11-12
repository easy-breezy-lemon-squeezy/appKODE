import React from 'react';
import Skeleton from "./Skeleton";
import {connect} from "react-redux";
import {getUsers, setUserProfile, toggleIsAlphabetically} from "../../redux/users-reducer";


class SkeletonContainer extends React.Component{
    componentDidMount() {
        this.props.getUsers();
    }

    render (){
        return (
            <Skeleton users={this.props.users} isError={this.props.isError} profile={this.props.profile}
                      setUserProfile={this.props.setUserProfile}
                      isAlphabetically={this.props.isAlphabetically}
                      toggleIsAlphabetically={this.props.toggleIsAlphabetically}
            />
        );
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        isError: state.usersPage.isError,
        profile: state.usersPage.profile,
        isAlphabetically: state.usersPage.isAlphabetically
    }
}

export default connect(mapStateToProps, {getUsers, setUserProfile, toggleIsAlphabetically})(SkeletonContainer);