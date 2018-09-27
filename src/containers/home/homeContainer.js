import React, {Component} from 'react'
import {Alert, Linking} from 'react-native'
import {connect} from 'react-redux';

import Home from './home';
import * as actions from '../../actions/users/fetchUsersAction'

class HomeContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      users:[]
    }
  }

  componentDidMount(){
    this.props.fetchUsers()
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.users && nextProps.users.length > 0){
      this.setState({
        users:nextProps.users
      })
    }
  }

  userDetails(userId, inputType) {
    if(userId){
      this.props.userDetails(userId).then(() => {
          return  "ankit"
      })
    }

  }

  onPressUserProfile = (userId) => {
    this.props.navigation.navigate('userProfile',{
      userId: userId
    })
  }

  render(){
    return(
      <Home usersData={this.state.users} onPressUserProfile={(userId) => this.onPressUserProfile(userId)} 
        loading={this.props.isLoading}/>
    )
  }
}

const mapStateToProps = state => ({
  users: state.fetchUsers.users,
  isLoading: state.fetchUsers.isLoading
})

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(actions.fetchUsers()),
  userDetails: (userId) => dispatch(actions.userDetails(userId))
})

export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer)
