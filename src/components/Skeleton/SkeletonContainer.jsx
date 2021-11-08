import React from 'react';
import Skeleton from "./Skeleton";
import {connect} from "react-redux";
import {getUsers} from "../../redux/users-reducer";


class SkeletonContainer extends React.Component{
    componentDidMount() {
        this.props.getUsers();
    }

    render (){

        return (
                <Skeleton users={this.props.users} isError={this.props.isError}/>
        );
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        isError: state.usersPage.isError
    }
}

export default connect(mapStateToProps, {getUsers})(SkeletonContainer);