import React, {Component} from 'react'
import {Alert, Linking} from 'react-native'
import {connect} from 'react-redux';

import FollowersFollowings from './followersFollowings';
import * as actions from '../../actions/users/fetchUsersAction'

class FollowersFollowingsContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      usersData: []
    }
  }

  componentDidMount(){
    if(this.props.navigation.getParam('fetchType') == 'followers'){
        this.props.fetchUsersFollowersFollowings(this.props.navigation.getParam('username'), 'followers')
    }
    else{
      this.props.fetchUsersFollowersFollowings(this.props.navigation.getParam('username'), 'following')
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.users && nextProps.users.length > 0){
      this.setState({
        usersData: nextProps.users
      })
    }
  }

  onPressUserBlog = (blog) => {
    if(blog){
      Linking.openURL(blog)
    }
  }

  onPressGitUrl = (gitUrl) => {
    if(gitUrl){
      Linking.openURL(gitUrl)
    }
  }

  onPressRepositories = (username) => {
    this.props.navigation.navigate('repositories',{
      username: username
    })
  }

  render(){

    return(
      <FollowersFollowings usersData={this.state.usersData} loading={this.props.isLoading}
        onPressUserProfile={(userId) => this.onPressUserProfile(userId)}/>
    )
  }
}

const mapStateToProps = state => ({
  users: state.fetchUsers.users,
  isLoading: state.fetchUsers.isLoading
})

const mapDispatchToProps = dispatch => ({
  fetchUsersFollowersFollowings: (username, fetchType) => dispatch(actions.fetchUsersFollowersFollowings(username, fetchType))
})

export default connect(mapStateToProps,mapDispatchToProps)(FollowersFollowingsContainer)
