import React from 'react';
import Skeleton from "./Skeleton";
import {connect} from "react-redux";
import {activateModalWindow, deactivateModalWindow, getUsers, setUserProfile} from "../../redux/users-reducer";


class SkeletonContainer extends React.Component{
    componentDidMount() {
        this.props.getUsers();
    }

    render (){

        return (
            <Skeleton users={this.props.users} isError={this.props.isError} profile={this.props.profile}
                      setUserProfile={this.props.setUserProfile}
                      isAlphabetically={this.props.isAlphabetically}
                      isActivateModalWindow={this.props.isActivateModalWindow}
                      activateModalWindow={this.props.activateModalWindow}
                      deactivateModalWindow={this.props.deactivateModalWindow}
            />
        );
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        isError: state.usersPage.isError,
        profile: state.usersPage.profile,
        isAlphabetically:state.usersPage.isAlphabetically,
        isActivateModalWindow:state.usersPage.isActivateModalWindow
    }
}

export default connect(mapStateToProps, {getUsers, setUserProfile, activateModalWindow,deactivateModalWindow})(SkeletonContainer);