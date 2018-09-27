import React, {Component} from 'react'
import {Alert, Linking} from 'react-native'
import {connect} from 'react-redux';

import Profile from './profile';
import * as actions from '../../actions/users/fetchUsersAction'

class ProfileContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      user: ''
    }
  }

  componentDidMount(){
    this.props.userDetails(this.props.navigation.getParam('userId'))
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.user){
      this.setState({
        user:nextProps.user
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
      <Profile loading={this.props.isLoading} user={this.state.user} onPressUserBlog={(blog) => this.onPressUserBlog(blog)}
        onPressGitUrl={(gitUrl) => this.onPressGitUrl(gitUrl)} onPressRepositories={(username) => this.onPressRepositories(username)}/>
    )
  }
}

const mapStateToProps = state => ({
  user: state.fetchUsers.user,
  isLoading: state.fetchUsers.isLoading
})

const mapDispatchToProps = dispatch => ({
  userDetails: (userId) => dispatch(actions.userDetails(userId))
})

export default connect(mapStateToProps,mapDispatchToProps)(ProfileContainer)
