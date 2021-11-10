import React from 'react';
import Skeleton from "./Skeleton";
import {connect} from "react-redux";
import {getUsers, setUserProfile} from "../../redux/users-reducer";


class SkeletonContainer extends React.Component{
    componentDidMount() {
        this.props.getUsers();
    }

    render (){
        return (
            <Skeleton users={this.props.users} isError={this.props.isError} profile={this.props.profile}
                      setUserProfile={this.props.setUserProfile}/>
        );
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        isError: state.usersPage.isError,
        profile: state.usersPage.profile
    }
}

export default connect(mapStateToProps, {getUsers, setUserProfile})(SkeletonContainer);