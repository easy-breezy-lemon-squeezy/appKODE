import React from 'react';
import Skeleton from "./Skeleton";
import {connect} from "react-redux";
import {getUsers, setSearchText, setUserProfile, toggleFilterMode} from "../../redux/users-reducer";


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
                      setSearchText={this.props.setSearchText}
                      searchText={this.props.searchText}

            />
        );
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        isError: state.usersPage.isError,
        profile: state.usersPage.profile,
        filterMode: state.usersPage.filterMode,
        searchText:state.usersPage.searchText
    }
}

export default connect(mapStateToProps, {getUsers, setUserProfile, toggleFilterMode, setSearchText})(SkeletonContainer);