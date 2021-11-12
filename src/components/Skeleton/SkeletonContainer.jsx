import React from 'react';
import Skeleton from "./Skeleton";
import {connect} from "react-redux";
import {getUsers, setUserProfile, toggleFilterMode} from "../../redux/users-reducer";


class SkeletonContainer extends React.Component{
    componentDidMount() {
        this.props.getUsers();
    }

    render (){
        return (
            <Skeleton users={this.props.users} isError={this.props.isError} profile={this.props.profile}
                      setUserProfile={this.props.setUserProfile}
                      filterMode={this.props.filterMode}
                      toggleFilterMode={this.props.toggleFilterMode}
            />
        );
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        isError: state.usersPage.isError,
        profile: state.usersPage.profile,
        filterMode: state.usersPage.filterMode
    }
}

export default connect(mapStateToProps, {getUsers, setUserProfile, toggleFilterMode})(SkeletonContainer);