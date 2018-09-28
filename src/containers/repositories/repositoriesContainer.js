import React, {Component} from 'react'
import {Alert, Linking} from 'react-native'
import {connect} from 'react-redux';

import Repositories from './repositories';
import * as actions from '../../actions/users/fetchUsersAction'

class RepositoriesContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      repositories: []
    }
  }

  componentDidMount(){
    this.props.fetchRepositories(this.props.navigation.getParam('username'))
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.repositories && nextProps.repositories.length>0){
      this.setState({
        repositories:nextProps.repositories
      })
    }
  }

  onPressRepositories = (url) => {
    console.log(url);
    if(url){
      Linking.openURL(url)
    }
  }

  render(){
    return(
      <Repositories repositories={this.state.repositories} onPressRepositories={(url) => this.onPressRepositories(url)}/>
    )
  }
}

const mapStateToProps = state => ({
  repositories: state.fetchUsers.repositories,
  isLoading: state.fetchUsers.isLoading
})

const mapDispatchToProps = dispatch => ({
  fetchRepositories: (username) => dispatch(actions.fetchRepositories(username))
})

export default connect(mapStateToProps,mapDispatchToProps)(RepositoriesContainer)
