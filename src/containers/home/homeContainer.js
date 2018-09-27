import React, {Component} from 'react'
import {Alert} from 'react-native'
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
    console.warn(nextProps.users.count);
    this.setState({
      users:nextProps.users
    })
  }

  userDetails(userId, inputType) {
    if(userId){
      this.props.userDetails(userId).then(() => {
          return  "ankit"
      })
    }

  }

  render(){
    return(
      <Home usersData={this.state.users} userDetails={(userId, inputType) => this.userDetails(userId, inputType)}/>
    )
  }
}

const mapStateToProps = state => ({
  users: state.fetchUsers.users,
})

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(actions.fetchUsers()),
  userDetails: (userId) => dispatch(actions.userDetails(userId))
})

export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer)
