import React, {Component} from 'react'
import {Alert, Linking} from 'react-native'
import {connect} from 'react-redux';

import Gists from './gists';
import * as actions from '../../actions/users/fetchUsersAction'

class GistsContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      gists: []
    }
  }

  componentDidMount(){
    this.props.fetchGists(this.props.navigation.getParam('username'))
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.gists && nextProps.gists.length>0){
      this.setState({
        gists:nextProps.gists
      })
    }
  }

  onPressGists = (url) => {
    if(url){
      Linking.openURL(url)
    }
  }

  render(){
    return(
      <Gists gists={this.state.gists} onPressGists={(url) => this.onPressGists(url)}/>
    )
  }
}

const mapStateToProps = state => ({
  gists: state.fetchUsers.gists,
  isLoading: state.fetchUsers.isLoading
})

const mapDispatchToProps = dispatch => ({
  fetchGists: (username) => dispatch(actions.fetchGists(username))
})

export default connect(mapStateToProps,mapDispatchToProps)(GistsContainer)
